export const siteConfig = {
  name: 'Sarthak Prasad Parida',
  role: 'Software Engineer',
  company: 'Accenture',
  tagline: 'I build infrastructure that works.',
  description: 'Cloud infrastructure, CI/CD modernization, Infrastructure as Code, and automation — making deployments more consistent, repeatable, and secure.',
  availability: 'Currently at Accenture',
  github: 'https://github.com/Sarthak027',
  linkedin: 'https://www.linkedin.com/in/sarthak-prasad-parida/',
  geeksforgeeks: 'https://auth.geeksforgeeks.org/user/sarthakparida147/',
  twitter: 'https://x.com/Sarthaks_twt',
  medium: 'https://medium.com/@sarthakparida147',
}

export const technologies = [
  { name: 'AWS', tooltip: 'EC2 · EKS · Lambda · IAM · S3' },
  { name: 'Azure', tooltip: 'DevOps · Pipelines · IaaS' },
  { name: 'Terraform', tooltip: 'IaC · State · OIDC · Automation' },
  { name: 'Docker', tooltip: 'Containers · Compose · Deployment' },
  { name: 'Kubernetes', tooltip: 'EKS · Orchestration · Scalability' },
]

export const currentWork = {
  title: 'Current Focus',
  command: '$ current-focus --list',
  items: [
    { text: 'Platform Engineering — Building a platform engineering project focused on infrastructure automation, developer workflows, and reliable deployment processes', completed: false },
    { text: 'Claude & AI-Assisted Engineering — Deepening my understanding of Claude and learning to use it effectively for engineering workflows and development', completed: false },
    { text: 'Azure Certifications — Preparing for the AZ-104 (Azure Administrator Associate) and AZ-400 (DevOps Engineer Expert) certifications', completed: false },
    { text: 'AI/ML, MLOps & AIOps — Learning AI and machine learning fundamentals, MLOps practices, and AIOps concepts for my upcoming platform engineering project', completed: false },
    { text: 'ServiceNow — Learning ServiceNow and understanding how it fits into enterprise IT service management and platform workflows', completed: false },
    { text: 'CI/CD Migration — Completed the migration from AWS CodeBuild to Azure DevOps Pipelines', completed: true },
  ],
}

export const terminalCommands = {
  help: `Available commands:
  
  about      - Learn about me
  experience - View my work experience
  projects   - View my projects
  skills     - See my technology stack
  certs      - View certifications
  contact    - Get in touch
  github     - Open GitHub profile
  clear      - Clear terminal`,
  
  about: `Software Engineer at Accenture specializing in cloud infrastructure and DevOps.

I work on AWS-to-Azure DevOps CI/CD migration, Terraform automation, Infrastructure as Code, and cloud infrastructure deployment workflows.

Focus areas: Cloud Engineering, DevOps, IaC, CI/CD, DevSecOps`,
  
  experience: `01. Accenture - Software Engineer (May 2026 - Present)
02. Hacktoberfest - Open Source Developer (Oct 2024)
03. GirlScript Summer of Code - Contributor (May 2024 - Jul 2024)
04. GeeksforGeeks - Technical Content Writer (Dec 2022 - Dec 2023)

Type 'experience <number>' for details`,
  
  projects: `01. LinkSpace - LinkedIn-inspired platform
02. Jesse Course World - Trading course platform
03. Real-Time Cloud-Native Monitoring App

Type 'projects <number>' for details`,
  
  skills: `Cloud:          AWS, Azure, GCP
Infrastructure: Terraform, Docker, Kubernetes
DevOps:         Azure DevOps, Jenkins, Git
Languages:      Python, TypeScript, Java, Go
Systems:        Linux, Bash, Networking`,
  
  certs: `Microsoft Azure Fundamentals
Red Hat Cloud-native Development
Linux Kernel Development
Goldman Sachs Software Engineering
HackerRank SQL Advanced`,
  
  contact: `GitHub:        github.com/Sarthak027
LinkedIn:      linkedin.com/in/sarthak-prasad-parida
GeeksforGeeks: auth.geeksforgeeks.org/user/sarthakparida147`,
}
