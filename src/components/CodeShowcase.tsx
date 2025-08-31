import React, { useState } from 'react';
import { Play, Copy, Check } from 'lucide-react';

interface CodeShowcaseProps {
  darkMode: boolean;
}

const CodeShowcase: React.FC<CodeShowcaseProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const codeSnippets = [
    {
      title: "Kubernetes Deployment",
      language: "yaml",
      code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
  labels:
    app: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web-app
  template:
    metadata:
      labels:
        app: web-app
    spec:
      containers:
      - name: web-app
        image: nginx:1.21
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "64Mi"
            cpu: "250m"
          limits:
            memory: "128Mi"
            cpu: "500m"`
    },
    {
      title: "Terraform AWS Infrastructure",
      language: "hcl",
      code: `resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name = "main-vpc"
    Environment = var.environment
  }
}

resource "aws_subnet" "public" {
  count             = 2
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.\${count.index + 1}.0/24"
  availability_zone = data.aws_availability_zones.available.names[count.index]

  map_public_ip_on_launch = true

  tags = {
    Name = "public-subnet-\${count.index + 1}"
    Type = "Public"
  }
}`
    },
    {
      title: "Docker Multi-stage Build",
      language: "dockerfile",
      code: `# Build stage
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost/ || exit 1

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`
    },
    {
      title: "GitHub Actions Pipeline",
      language: "yaml",
      code: `name: Deploy to GCP
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup GCP
        uses: google-github-actions/setup-gcloud@v1
        with:
          service_account_key: \${{ secrets.GCP_SA_KEY }}
          project_id: \${{ secrets.GCP_PROJECT_ID }}
          
      - name: Build and Push
        run: |
          docker build -t gcr.io/\$PROJECT_ID/app:\$GITHUB_SHA .
          docker push gcr.io/\$PROJECT_ID/app:\$GITHUB_SHA
          
      - name: Deploy to GKE
        run: |
          gcloud container clusters get-credentials prod-cluster
          kubectl set image deployment/app app=gcr.io/\$PROJECT_ID/app:\$GITHUB_SHA
          kubectl rollout status deployment/app`
    }
  ];

  const copyToClipboard = async (code: string, index: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const getLanguageColor = (language: string) => {
    const colors = {
      yaml: 'text-blue-400',
      hcl: 'text-purple-400',
      dockerfile: 'text-green-400',
      groovy: 'text-purple-400'
    };
    return colors[language as keyof typeof colors] || 'text-gray-400';
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Code <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Showcase</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            Real-world DevOps and Infrastructure as Code examples from my projects
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-6 p-2 rounded-lg bg-gray-800">
            {codeSnippets.map((snippet, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                {snippet.title}
              </button>
            ))}
          </div>

          {/* Code Display */}
          <div className="rounded-xl overflow-hidden border bg-gray-800/50 border-gray-700">
            {/* Code Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-900 border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="font-medium text-gray-300">
                  {codeSnippets[activeTab].title}
                </span>
                <span className={`text-sm ${getLanguageColor(codeSnippets[activeTab].language)}`}>
                  {codeSnippets[activeTab].language}
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(codeSnippets[activeTab].code, activeTab)}
                className="flex items-center space-x-2 px-3 py-1 rounded-md hover:bg-gray-700 text-gray-300 transition-colors"
              >
                {copiedIndex === activeTab ? (
                  <>
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-sm">Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Content */}
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm leading-relaxed text-gray-300">
                <code>{codeSnippets[activeTab].code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeShowcase;