import { Project, Experience, CaseStudy } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'DevOps Engineer',
    company: 'Infovista',
    duration: 'Jan 2025 - Present',
    location: 'Remote',
    description: 'Leading DevOps initiatives for Planet SaaS, a cutting-edge RF planning solution that combines Infovista\'s expertise with Google\'s processing capabilities.',
    achievements: [
      'Designed GitHub Actions CI/CD pipelines for GCP deployment with tiered environments',
      'Automated infrastructure upgrades, rollbacks, and teardowns via reusable workflows',
      'Implemented Velero backups with failure alerts for data recovery compliance',
      'Trained SaaS team for self-managed deployments of customer environments'
    ],
    technologies: ['GitHub Actions', 'GCP', 'Kubernetes', 'Docker', 'Helm', 'Velero']
  },
  {
    id: '2',
    title: 'DevOps Engineer',
    company: 'Infovista',
    duration: 'Oct 2022 - Dec 2024',
    location: 'Remote',
    description: 'Managed Planet Microservices platform deployed by major mobile operators for wireless network planning and optimization.',
    achievements: [
      'Deployed and upgraded microservices releases for production environments',
      'Maintained and managed customer infrastructure across multiple deployments',
      'Led stress and scalability testing to ensure platform stability and reliability',
      'Resolved critical infrastructure issues in production environments'
    ],
    technologies: ['Robin', 'Kubernetes', 'Docker', 'Helm', 'Azure DevOps', 'Apache JMeter']
  },
  {
    id: '3',
    title: 'Cloud Engineer',
    company: 'Infovista',
    duration: 'Feb 2022 - Dec 2022',
    location: 'Remote',
    description: 'Built Network Lifecycle Automation Cloud Platform - an integrated, cloud-native platform powering all Infovista products.',
    achievements: [
      'Created robust and scalable EKS infrastructure on AWS',
      'Managed IAM policies, EFS file systems, and Route53 DNS routing',
      'Deployed high-level architecture using Terraform and Helm',
      'Released new NLA Planet Cloud environments and managed upgrades'
    ],
    technologies: ['AWS', 'Terraform', 'EKS', 'Kubernetes', 'Helm', 'Route53', 'EFS']
  },
  {
    id: '4',
    title: 'DevOps Engineer Intern',
    company: 'Hydatis',
    duration: 'Mar 2022 - Oct 2022',
    location: 'Tunisia',
    description: 'Developed open-source Anti-Money Laundering solution using event-driven microservices architecture.',
    achievements: [
      'Built modern AML system with event-driven microservices architecture',
      'Implemented cloud-native CI/CD pipelines with Tekton',
      'Integrated RedHat products and container technologies',
      'Automated business services deployment processes'
    ],
    technologies: ['Tekton', 'Apache Kafka', 'OpenShift', 'Kogito', 'Quarkus', 'MongoDB']
  },
  {
    id: '5',
    title: 'Cloud Engineer Intern',
    company: 'SSCA',
    duration: 'Jul 2021 - Oct 2021',
    location: 'Remote',
    description: 'Automated integration and deployment of MERN stack application on Google Cloud Platform.',
    achievements: [
      'Designed robust systems on GCP with Compute Engine',
      'Minimized infrastructure costs and improved performance',
      'Automated infrastructure creation with Terraform',
      'Set up GitLab CI/CD pipelines for automated deployment'
    ],
    technologies: ['Terraform', 'GCP', 'GitLab CI/CD', 'MongoDB', 'Express.js', 'React', 'Node.js']
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Planet SaaS - RF Planning Solution',
    description: 'SaaS RF planning solution that reduces the complexity and cost of wireless network design. Combines Infovista\'s RF planning expertise with Google\'s processing and geodata capabilities.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['GitHub Actions', 'GCP', 'Kubernetes', 'Docker', 'Helm', 'Velero'],
    featured: true,
    metrics: [
      { label: 'Deployment Time', value: '75% Faster' },
      { label: 'Infrastructure Cost', value: '40% Reduced' },
      { label: 'Uptime', value: '99.9%' }
    ]
  },
  {
    id: '2',
    title: 'Planet Microservices Platform',
    description: 'Trustworthy solution deployed by major mobile operators for wireless access network planning and optimization.',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Robin', 'Kubernetes', 'Docker', 'Helm', 'Azure DevOps', 'Apache JMeter'],
    featured: true,
    metrics: [
      { label: 'Load Capacity', value: '10x Improved' },
      { label: 'Response Time', value: '60% Faster' },
      { label: 'Reliability', value: '99.95%' }
    ]
  },
  {
    id: '3',
    title: 'NLA Cloud Platform',
    description: 'Network Lifecycle Automation Cloud Platform - an integrated, automated, cloud-native platform powering Infovista products.',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['AWS', 'Terraform', 'EKS', 'Kubernetes', 'Helm', 'Route53', 'EFS'],
    featured: true,
    metrics: [
      { label: 'Scalability', value: '500% Increase' },
      { label: 'Deployment Speed', value: '80% Faster' },
      { label: 'Cost Optimization', value: '35% Savings' }
    ]
  },
  {
    id: '4',
    title: 'Anti-Money Laundering Solution',
    description: 'Open-source AML system built with event-driven microservices architecture using RedHat products and cloud technologies.',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Tekton', 'Apache Kafka', 'OpenShift', 'Kogito', 'Quarkus', 'MongoDB'],
    featured: false
  },
  {
    id: '5',
    title: 'SSCA MERN Stack on GCP',
    description: 'Automated integration and deployment of MERN stack application on Google Cloud Platform.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Terraform', 'GCP', 'GitLab CI/CD', 'MongoDB', 'Express.js', 'React', 'Node.js'],
    featured: false
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Planet SaaS Cloud Migration',
    subtitle: 'Scaling RF Planning to the Cloud',
    description: 'Led the complete migration of Infovista\'s RF planning solution to a cloud-native SaaS platform, implementing automated CI/CD pipelines and multi-tier environments.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['GitHub Actions', 'GCP', 'Kubernetes', 'Helm', 'Velero'],
    metrics: [
      { label: 'Deployment Time', value: '75% Reduction' },
      { label: 'Infrastructure Cost', value: '40% Savings' },
      { label: 'Team Productivity', value: '3x Increase' },
      { label: 'System Uptime', value: '99.9%' }
    ],
    featured: true
  },
  {
    id: '2',
    title: 'Microservices Platform Optimization',
    subtitle: 'Enterprise-Scale Performance Engineering',
    description: 'Optimized Planet microservices platform for major mobile operators, implementing comprehensive stress testing and scalability improvements.',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Kubernetes', 'Apache JMeter', 'Robin', 'Azure DevOps'],
    metrics: [
      { label: 'Load Capacity', value: '10x Improvement' },
      { label: 'Response Time', value: '60% Faster' },
      { label: 'System Reliability', value: '99.95%' },
      { label: 'Customer Satisfaction', value: '95%' }
    ],
    featured: true
  },
  {
    id: '3',
    title: 'AWS Cloud Infrastructure',
    subtitle: 'Building Scalable Network Automation',
    description: 'Architected and deployed Network Lifecycle Automation platform on AWS, creating robust infrastructure with Terraform and comprehensive automation.',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['AWS', 'Terraform', 'EKS', 'Route53', 'EFS'],
    metrics: [
      { label: 'Infrastructure Scale', value: '500% Growth' },
      { label: 'Deployment Speed', value: '80% Faster' },
      { label: 'Cost Optimization', value: '35% Reduction' },
      { label: 'Automation Coverage', value: '90%' }
    ],
    featured: false
  }
];