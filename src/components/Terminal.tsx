import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, Maximize2 } from 'lucide-react';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const userInfo = {
    user: 'oussema',
    host: 'devops-portfolio',
    home: '/home/oussema',
    shell: '/bin/bash',
    role: 'DevOps Engineer & Cloud Architect',
    location: 'Tunisia',
    email: 'djelassioussema@email.com',
    sshKeys: 3,
    sudo: 'enabled',
    status: 'Available for opportunities',
    specialization: 'Kubernetes, AWS, DevSecOps'
  };

  const commands = {
    whoami: () => [
      `👤 User: Oussema Jelassi`,
      `🏠 Home: ${userInfo.home}`,
      `🐚 Shell: ${userInfo.shell}`,
      `🎯 Role: ${userInfo.role}`,
      `🌍 Location: ${userInfo.location}`,
      `📧 Email: ${userInfo.email}`,
      `🔑 SSH Keys: ${userInfo.sshKeys} active`,
      `🎫 Sudo: ${userInfo.sudo}`,
      `💼 Current Status: ${userInfo.status}`,
      `🚀 Specialization: ${userInfo.specialization}`
    ],
    help: () => [
      'Available commands:',
      '  whoami      - Display user information',
      '  about       - Show detailed information about me',
      '  skills      - List technical skills',
      '  experience  - Show work experience',
      '  projects    - List major projects',
      '  contact     - Get contact information',
      '  education   - Academic background',
      '  deploy      - Simulate a deployment',
      '  monitor     - Check system health',
      '  security    - Run security scan',
      '  infrastructure - Show infrastructure stats',
      '  pipeline    - View CI/CD pipeline status',
      '  costs       - Show cost optimization',
      '  testimonials - Client testimonials',
      '  clear       - Clear terminal',
      '  help        - Show this help message'
    ],
    about: () => [
      'Med Aymen Chakroun - DevOps Engineer & Cloud Architect',
      '',
      '🎓 Background: Electrical Engineering → Computer Science → Cloud Computing',
      '💡 Unique perspective: Systems thinking from circuits to containers',
      '🛠️  Core expertise: Kubernetes, AWS, Infrastructure as Code, DevSecOps',
      '📈 Impact: 90% vulnerability reduction, 50% faster deployments',
      '🌐 Experience: International clients, cross-cultural teams',
      '🔧 Approach: Automation-first, security-minded, cost-conscious',
      '',
      'Bridging the gap between innovation and stability.'
    ],
    skills: () => [
      'Technical Skills:',
      '',
      '☁️  Cloud Platforms:',
      '   • AWS (EC2, EKS, RDS, S3, Lambda, CloudFormation)',
      '   • Azure (AKS, ARM Templates, DevOps)',
      '   • GCP (GKE, Cloud Functions)',
      '',
      '🐳 Container Technologies:',
      '   • Docker, Docker Compose',
      '   • Kubernetes, Helm Charts',
      '   • Container Security (Trivy, Aqua)',
      '',
      '🔧 Infrastructure as Code:',
      '   • Terraform, Terragrunt',
      '   • Ansible, Puppet',
      '   • CloudFormation, ARM Templates',
      '',
      '🚀 CI/CD & DevOps:',
      '   • Jenkins, GitLab CI, GitHub Actions',
      '   • ArgoCD, Flux (GitOps)',
      '   • Maven, Gradle, npm',
      '',
      '🔒 Security & Monitoring:',
      '   • Vault, SOPS, Sealed Secrets',
      '   • Prometheus, Grafana, ELK Stack',
      '   • Falco, OPA Gatekeeper'
    ],
    experience: () => [
      'Work Experience:',
      '',
      '🏢 Senior DevOps Engineer | TechCorp International (2022-Present)',
      '   • Led Kubernetes migration for 50+ microservices',
      '   • Implemented GitOps with ArgoCD, reduced deployment time by 60%',
      '   • Achieved 99.9% uptime through automated monitoring & alerting',
      '',
      '☁️  Cloud Engineer | CloudFirst Solutions (2020-2022)',
      '   • Designed multi-region AWS architecture for high availability',
      '   • Automated infrastructure provisioning with Terraform',
      '   • Reduced infrastructure costs by 40% through optimization',
      '',
      '🔧 DevOps Engineer | StartupTech (2019-2020)',
      '   • Built CI/CD pipelines from scratch using Jenkins & Docker',
      '   • Implemented infrastructure monitoring with Prometheus',
      '   • Established security best practices & compliance frameworks'
    ],
    projects: () => [
      'Major Projects:',
      '',
      '🚀 Multi-Cloud Kubernetes Platform',
      '   • Deployed across AWS, Azure, and GCP',
      '   • 99.9% uptime, auto-scaling, disaster recovery',
      '   • Reduced operational overhead by 70%',
      '',
      '🔐 Zero-Trust Security Implementation',
      '   • Service mesh with Istio, mTLS everywhere',
      '   • Policy-as-code with OPA Gatekeeper',
      '   • 90% reduction in security vulnerabilities',
      '',
      '📊 Observability & Monitoring Stack',
      '   • Prometheus, Grafana, Jaeger, ELK',
      '   • Custom dashboards & alerting rules',
      '   • Mean time to resolution improved by 80%',
      '',
      '⚡ GitOps-based Deployment Pipeline',
      '   • ArgoCD, Helm, automated testing',
      '   • Deploy 50+ times per day with confidence',
      '   • Zero-downtime deployments'
    ],
    contact: () => [
      'Contact Information:',
      '',
      '📧 Email: medaymen.chakroun@email.com',
      '💼 LinkedIn: linkedin.com/in/medaymen-chakroun',
      '🐙 GitHub: github.com/medaymen-chakroun',
      '🌍 Location: Tunisia (Remote Ready)',
      '📞 Available for: Full-time, Contract, Consulting',
      '',
      'Timezone: CET (UTC+1)',
      'Languages: English, French, Arabic'
    ],
    education: () => [
      'Education & Certifications:',
      '',
      '🎓 Master of Science in Computer Science',
      '   • Specialization: Cloud Computing & Distributed Systems',
      '   • Thesis: "Optimizing Kubernetes Resource Allocation"',
      '',
      '🎓 Bachelor of Science in Electrical Engineering',
      '   • Focus: Systems Design & Control Theory',
      '   • Foundation for current systems thinking approach',
      '',
      '📜 Certifications:',
      '   • AWS Certified Solutions Architect - Professional',
      '   • Certified Kubernetes Administrator (CKA)',
      '   • HashiCorp Certified: Terraform Associate',
      '   • Docker Certified Associate',
      '   • Certified Ethical Hacker (CEH)'
    ],
    deploy: () => [
      '🚀 Initiating deployment...',
      '',
      '✅ Pre-deployment checks passed',
      '✅ Docker images built and pushed',
      '✅ Kubernetes manifests validated',
      '✅ Security scans completed',
      '✅ Rolling update started',
      '✅ Health checks passing',
      '✅ Traffic routing updated',
      '',
      '🎉 Deployment completed successfully!',
      '📊 Deployment time: 3m 24s',
      '🔍 Zero downtime achieved',
      '📈 All services healthy'
    ],
    monitor: () => [
      '📊 System Health Check:',
      '',
      '🟢 Kubernetes Cluster: Healthy (24 nodes)',
      '🟢 Application Pods: 156/156 Running',
      '🟢 Database: Primary/Replica sync OK',
      '🟢 Load Balancer: Distributing traffic',
      '🟢 CDN: Cache hit ratio 94%',
      '🟢 SSL Certificates: Valid (Auto-renewed)',
      '',
      '📈 Performance Metrics:',
      '   • CPU Usage: 34% average',
      '   • Memory Usage: 67% average',
      '   • Network I/O: 1.2GB/s',
      '   • Response Time: 120ms avg',
      '',
      '✅ All systems operational'
    ],
    security: () => [
      '🔒 Security Scan Results:',
      '',
      '✅ Vulnerability Assessment:',
      '   • Critical: 0 vulnerabilities',
      '   • High: 2 vulnerabilities (patched)',
      '   • Medium: 5 vulnerabilities (mitigated)',
      '   • Low: 12 vulnerabilities (monitored)',
      '',
      '🛡️ Security Controls:',
      '   • WAF: Active, blocking 99.8% of attacks',
      '   • mTLS: Enabled across all services',
      '   • RBAC: Properly configured',
      '   • Network Policies: Enforced',
      '   • Pod Security Standards: Restricted',
      '',
      '📊 Security Score: 96/100',
      '🏆 Compliance: SOC 2, ISO 27001 ready'
    ],
    infrastructure: () => [
      '🏗️ Infrastructure Overview:',
      '',
      '☁️  Multi-Cloud Setup:',
      '   • AWS: Production (3 regions)',
      '   • Azure: DR site (2 regions)',
      '   • GCP: Development & testing',
      '',
      '📊 Resource Utilization:',
      '   • Compute: 234 instances',
      '   • Storage: 45TB provisioned',
      '   • Network: 12 VPCs, 48 subnets',
      '   • Databases: 8 clusters',
      '',
      '💰 Cost Optimization:',
      '   • Reserved Instances: 70% coverage',
      '   • Spot Instances: 30% of workloads',
      '   • Auto-scaling: Saves 40% on compute',
      '',
      '📈 Efficiency Score: 94/100'
    ],
    pipeline: () => [
      '🔄 CI/CD Pipeline Status:',
      '',
      '📊 Pipeline Metrics (Last 30 days):',
      '   • Total Deployments: 1,247',
      '   • Success Rate: 99.2%',
      '   • Average Duration: 8m 45s',
      '   • Failed Deployments: 10 (auto-rolled back)',
      '',
      '🚀 Active Pipelines:',
      '   • frontend-app: ✅ Deployed v2.1.4 (5m ago)',
      '   • api-service: ✅ Deployed v1.8.2 (12m ago)',
      '   • worker-service: 🔄 Deploying v1.3.1 (Stage 3/5)',
      '   • database-migrations: ✅ Completed (2h ago)',
      '',
      '📈 Quality Gates:',
      '   • Unit Tests: 94% coverage',
      '   • Security Scans: All passed',
      '   • Performance Tests: All passed'
    ],
    costs: () => [
      '💰 Cost Optimization Report:',
      '',
      '📉 Monthly Savings Achieved:',
      '   • Reserved Instances: $4,200/month',
      '   • Spot Instances: $2,800/month',
      '   • Auto-scaling: $3,100/month',
      '   • Storage Optimization: $1,500/month',
      '   • Total Savings: $11,600/month',
      '',
      '📊 Cost Breakdown:',
      '   • Compute: 45% ($18,200)',
      '   • Storage: 20% ($8,100)',
      '   • Network: 15% ($6,075)',
      '   • Other Services: 20% ($8,100)',
      '',
      '🎯 Optimization Opportunities:',
      '   • Further right-sizing: $800/month potential',
      '   • Reserved Instance expansion: $1,200/month',
      '',
      '📈 ROI: 340% on DevOps investments'
    ],
    testimonials: () => [
      '🌟 Client Testimonials:',
      '',
      '"Med Aymen transformed our infrastructure completely. We went from',
      'weekly outages to 99.9% uptime. His expertise in Kubernetes and',
      'security is exceptional." - CTO, TechStartup Inc.',
      '',
      '"The best DevOps engineer we\'ve worked with. Reduced our cloud',
      'costs by 40% while improving performance. Highly recommended!"',
      '- Engineering Manager, Global Corp',
      '',
      '"His systematic approach and electrical engineering background',
      'brings a unique perspective. Delivered a rock-solid platform."',
      '- Lead Architect, FinTech Solutions',
      '',
      '⭐ Average Rating: 4.9/5 (24 reviews)',
      '🏆 100% project success rate'
    ],
    clear: () => []
  };

  useEffect(() => {
    // Initial whoami command
    const initialOutput = commands.whoami();
    setHistory([
      'medaymen@devops-portfolio:~/portfolio $ whoami',
      ...initialOutput,
      ''
    ]);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const newHistory = [...history, `medaymen@devops-portfolio:~/portfolio $ ${cmd}`];

    if (trimmedCmd === 'clear') {
      setHistory([]);
    } else if (commands[trimmedCmd as keyof typeof commands]) {
      const output = commands[trimmedCmd as keyof typeof commands]();
      setHistory([...newHistory, ...output, '']);
    } else if (trimmedCmd === '') {
      setHistory([...newHistory, '']);
    } else {
      setHistory([...newHistory, `Command not found: ${cmd}. Type 'help' for available commands.`, '']);
    }

    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <section id="terminal" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Interactive DevOps Terminal</h2>
          <p className="text-xl text-gray-400">Explore my expertise through terminal commands</p>
          <p className="text-cyan-400 mt-2">Try commands: <code className="bg-slate-700 px-2 py-1 rounded">help</code>, <code className="bg-slate-700 px-2 py-1 rounded">skills</code>, <code className="bg-slate-700 px-2 py-1 rounded">deploy</code></p>
        </div>

        <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
          {/* Terminal Header */}
          <div className="flex items-center justify-between bg-slate-800 px-6 py-4 border-b border-slate-700">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded, backfull bg-green-500"></div>
              </div>
              <div className="flex items-center space-x-2">
                <TerminalIcon className="h-5 w-5 text-green-400" />
                <span className="text-green-400 font-medium">Interactive DevOps Terminal</span>
              </div>
              <div className="bg-green-500 text-black text-xs px-2 py-1 rounded-full font-medium">
                Live Demo
              </div>
            </div>
            <button className="text-gray-400 hover:text-white">
              <Maximize2 className="h-5 w-5" />
            </button>
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalRef}
            className="h-96 overflow-y-auto p-6 bg-black cursor-text font-mono text-sm"
            onClick={focusInput}
          >
            {history.map((line, index) => (
              <div key={index} className={`${
                line.startsWith('medaymen@devops-portfolio') 
                  ? 'text-green-400' 
                  : line.startsWith('🟢') || line.startsWith('✅') || line.startsWith('🎉')
                    ? 'text-green-300'
                    : line.startsWith('🟡') || line.startsWith('⚠️')
                      ? 'text-yellow-300'
                      : line.startsWith('🔴') || line.startsWith('❌')
                        ? 'text-red-300'
                        : line.startsWith('📊') || line.startsWith('💰') || line.startsWith('🚀')
                          ? 'text-blue-300'
                          : 'text-gray-300'
              }`}>
                {line}
              </div>
            ))}
            <div className="flex items-center text-green-400">
              <span className="mr-2">medaymen@devops-portfolio:~/portfolio $</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="bg-transparent border-none outline-none text-white flex-1"
                autoFocus
              />
              <span className="animate-pulse">|</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;