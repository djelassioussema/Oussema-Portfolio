import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Server, 
  GitBranch, 
  Cloud, 
  Settings, 
  Lock, 
  Activity, 
  Brain, 
  Network, 
  Database, 
  Zap, 
  Layers,
  CheckCircle,
  TrendingUp,
  Code,
  Monitor
} from 'lucide-react';

interface Skill {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  tools: string[];
  achievements: string[];
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

export function SkillsShowcase() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const skills: Skill[] = [
    {
      id: 'sre',
      title: 'Site Reliability Engineering',
      subtitle: 'SRE',
      description: 'Building resilient systems with 99.9% uptime, chaos engineering, and automated incident response',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      tools: ['Chaos Monkey', 'Gremlin', 'PagerDuty', 'Datadog', 'New Relic', 'SLI/SLO'],
      achievements: ['99.95% uptime maintained', 'MTTR reduced by 60%', 'Automated 90% of incidents']
    },
    {
      id: 'kubernetes',
      title: 'Kubernetes & Orchestration',
      subtitle: 'Infrastructure',
      description: 'K8s cluster management, service mesh, auto-scaling, and cloud-native application deployment',
      icon: Server,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      tools: ['Kubernetes', 'Helm', 'Kustomize', 'ArgoCD', 'Istio', 'KEDA'],
      achievements: ['Managed 500+ node clusters', 'Zero-downtime deployments', 'Multi-region orchestration']
    },
    {
      id: 'gitops',
      title: 'GitOps & CI/CD',
      subtitle: 'DevOps',
      description: 'ArgoCD, Flux, Tekton pipelines with automated testing, security scanning, and progressive deployments',
      icon: GitBranch,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      tools: ['ArgoCD', 'Flux', 'Tekton', 'GitHub Actions', 'Jenkins', 'Spinnaker'],
      achievements: ['100% GitOps adoption', '50% faster deployments', 'Automated security gates']
    },
    {
      id: 'cloud',
      title: 'Multi-Cloud Architecture',
      subtitle: 'Cloud',
      description: 'AWS, GCP, Azure expertise with hybrid cloud strategies and cloud-agnostic solutions',
      icon: Cloud,
      color: 'text-sky-400',
      bgColor: 'bg-sky-500/10',
      tools: ['AWS', 'GCP', 'Azure', 'CloudFormation', 'CDK', 'Anthos'],
      achievements: ['Multi-cloud strategy design', '40% cost optimization', 'Hybrid cloud migration']
    },
    {
      id: 'iac',
      title: 'Infrastructure as Code',
      subtitle: 'Automation',
      description: 'Terraform, Crossplane, Pulumi for immutable infrastructure and automated provisioning',
      icon: Settings,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      tools: ['Terraform', 'Crossplane', 'Pulumi', 'Ansible', 'CDK', 'Bicep'],
      achievements: ['100% infrastructure automation', 'Immutable deployments', 'Self-healing systems']
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      subtitle: 'Security',
      description: 'Zero-trust architecture, policy-as-code, vulnerability scanning with Falco, Trivy, and OPA',
      icon: Lock,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      tools: ['Falco', 'Trivy', 'OPA', 'Vault', 'Cert-Manager', 'Aqua Security'],
      achievements: ['Zero security incidents', 'SOC2 compliance', 'Automated vulnerability scanning']
    },
    {
      id: 'observability',
      title: 'Observability Stack',
      subtitle: 'Monitoring',
      description: 'Prometheus, Grafana, Jaeger, OpenTelemetry for full-stack monitoring and distributed tracing',
      icon: Activity,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      tools: ['Prometheus', 'Grafana', 'Jaeger', 'OpenTelemetry', 'ELK Stack', 'Fluentd'],
      achievements: ['360° observability', 'Custom SLI dashboards', 'Proactive alerting']
    },
    {
      id: 'aiml',
      title: 'AI/ML Operations',
      subtitle: 'AI/ML',
      description: 'MLOps with Kubeflow, MLflow, model serving with BentoML, and vector database management',
      icon: Brain,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      tools: ['Kubeflow', 'MLflow', 'BentoML', 'Seldon', 'Pinecone', 'Weaviate'],
      achievements: ['ML pipeline automation', 'Model versioning', 'A/B testing framework']
    },
    {
      id: 'networking',
      title: 'Service Mesh & Networking',
      subtitle: 'Networking',
      description: 'Istio, Linkerd, Envoy proxy configuration for secure service-to-service communication',
      icon: Network,
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/10',
      tools: ['Istio', 'Linkerd', 'Envoy', 'Cilium', 'Calico', 'Consul Connect'],
      achievements: ['Zero-trust networking', 'mTLS everywhere', 'Traffic management']
    },
    {
      id: 'data',
      title: 'Data Platform Engineering',
      subtitle: 'Data',
      description: 'Apache Spark, Airflow, data pipelines, and scalable data infrastructure management',
      icon: Database,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      tools: ['Apache Spark', 'Airflow', 'Kafka', 'Snowflake', 'dbt', 'Databricks'],
      achievements: ['Petabyte-scale processing', 'Real-time pipelines', 'Data mesh architecture']
    },
    {
      id: 'performance',
      title: 'Performance Engineering',
      subtitle: 'Performance',
      description: 'Load testing, capacity planning, auto-scaling strategies, and performance optimization',
      icon: Zap,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      tools: ['K6', 'JMeter', 'Gatling', 'Artillery', 'Locust', 'Apache Bench'],
      achievements: ['50% latency reduction', 'Predictive scaling', 'Performance SLOs']
    },
    {
      id: 'platform',
      title: 'Platform Engineering',
      subtitle: 'Platform',
      description: 'Internal developer platforms, self-service infrastructure, and developer productivity tools',
      icon: Layers,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      tools: ['Backstage', 'Crossplane', 'Humanitec', 'Port', 'Kratix', 'Score'],
      achievements: ['Developer self-service', '70% faster onboarding', 'Golden path templates']
    }
  ];

  const categories = [
    'All Skills',
    'Core Infrastructure',
    'Development & Deployment',
    'Security & Monitoring',
    'Emerging Technologies'
  ];

  const skillCategories: SkillCategory[] = [
    {
      name: 'Core Infrastructure',
      skills: skills.filter(s => ['sre', 'kubernetes', 'cloud', 'networking'].includes(s.id))
    },
    {
      name: 'Development & Deployment',
      skills: skills.filter(s => ['gitops', 'iac', 'platform', 'performance'].includes(s.id))
    },
    {
      name: 'Security & Monitoring',
      skills: skills.filter(s => ['security', 'observability'].includes(s.id))
    },
    {
      name: 'Emerging Technologies',
      skills: skills.filter(s => ['aiml', 'data'].includes(s.id))
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All Skills');

  const getFilteredSkills = () => {
    if (selectedCategory === 'All Skills') return skills;
    const category = skillCategories.find(cat => cat.name === selectedCategory);
    return category?.skills || [];
  };


  const overallStats = {
    totalSkills: skills.length,
    yearsExperience: 4,
    certifications: 12
  };

  return (
    <div className="min-h-screen p-60">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
        Technical <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">Comprehensive DevOps and Cloud Engineering Skills</p>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <div className="text-2xl font-bold text-purple-400">{overallStats.totalSkills}</div>
              <div className="text-gray-400 text-sm">Core Skills</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <div className="text-2xl font-bold text-purple-400">{overallStats.yearsExperience}+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <div className="text-2xl font-bold text-orange-400">{overallStats.certifications}</div>
              <div className="text-gray-400 text-sm">Certifications</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105" ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {getFilteredSkills().map((skill) => {
            const Icon = skill.icon;
            
            return (
              <div
                key={skill.id}
                onClick={() => setSelectedSkill(skill)}
                className={`${skill.bgColor} rounded-xl p-6 border border-gray-700 hover:border-purple-500 cursor-pointer transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                    <Icon className={`h-6 w-6 ${skill.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">{skill.title}</h3>
                    <span className="text-purple-400 text-sm font-medium">{skill.subtitle}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{skill.description}</p>


                {/* Top Tools */}
                <div className="flex flex-wrap gap-2">
                  {skill.tools.slice(0, 3).map((tool, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                  {skill.tools.length > 3 && (
                    <span className="px-2 py-1 bg-gray-600 text-gray-400 rounded text-xs">
                      +{skill.tools.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skill Detail Modal */}
        {selectedSkill && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 ${selectedSkill.bgColor} rounded-xl flex items-center justify-center`}>
                    <selectedSkill.icon className={`h-8 w-8 ${selectedSkill.color}`} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{selectedSkill.title}</h2>
                    <span className="text-purple-400 text-lg">{selectedSkill.subtitle}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="text-gray-400 hover:text-white text-3xl font-light"
                >
                  ×
                </button>
              </div>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">{selectedSkill.description}</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Tools & Technologies */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Code className="h-5 w-5 mr-2" />
                    Tools & Technologies
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedSkill.tools.map((tool, index) => (
                      <div key={index} className="flex items-center space-x-2 p-3 bg-gray-700 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-gray-300">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Key Achievements
                  </h3>
                  <div className="space-y-3">
                    {selectedSkill.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-gray-700 rounded-lg">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

       
        </div>
      </div>
  );
}