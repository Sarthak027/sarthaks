export interface Experience {
  id: string
  company: string
  role: string
  type: string
  startDate: string
  endDate: string
  location: string
  responsibilities: string[]
  technologies?: string[]
  theme: 'accenture' | 'bluestock' | 'hacktoberfest' | 'girlscript' | 'geeksforgeeks'
}

export const experiences: Experience[] = [
  {
    id: 'accenture',
    company: 'Accenture',
    role: 'Software Engineer',
    type: 'Full-time',
    startDate: 'May 2026',
    endDate: 'Present',
    location: 'India',
    theme: 'accenture',
    responsibilities: [
      'Working on AWS-to-Azure DevOps CI/CD migration and modernization initiatives, migrating existing AWS CodeBuild-based Terraform workflows to Azure DevOps Pipelines',
      'Developing and maintaining Azure DevOps YAML pipelines and reusable pipeline templates for Terraform-based infrastructure deployments',
      'Implementing Terraform workflows covering initialization, validation, plan, plan-destroy, apply, and destroy operations while preserving existing Terraform state and infrastructure configuration',
      'Working with AWS services, IAM roles, OIDC-based authentication, S3 remote state, DynamoDB state locking, and AWS service connections within Azure DevOps',
      'Troubleshooting CI/CD and Infrastructure as Code issues involving Terraform state, backend configuration, AWS permissions, IAM, OIDC authentication, provider versions, and pipeline execution',
      'Automating migration activities across multiple Bitbucket repositories using Bash scripting, including repository validation, pipeline configuration updates, branch management, Git operations, and standardized CI/CD configuration',
      'Integrating KICS security scanning and dashboard stages into Azure DevOps pipelines as part of DevSecOps practices',
      'Creating reusable automation and standardized pipeline configurations to improve consistency across migrated repositories',
      'Collaborating with team members and stakeholders to troubleshoot migration issues, validate pipeline behavior, and support the transition from AWS CodeBuild to Azure DevOps',
    ],
    technologies: ['Azure DevOps', 'Terraform', 'AWS', 'IAM', 'OIDC', 'S3', 'DynamoDB', 'Bash', 'KICS', 'Bitbucket', 'YAML'],
  },
  {
    id: 'bluestock',
    company: 'Bluestock',
    role: 'SDE Intern',
    type: 'Internship',
    startDate: 'October 2024',
    endDate: 'November 2024',
    location: 'Pune District, Maharashtra, India · Remote',
    theme: 'bluestock',
    responsibilities: [
      'Software engineering internship focused on fintech development',
    ],
  },
  {
    id: 'hacktoberfest',
    company: 'Hacktoberfest',
    role: 'Open Source Developer',
    type: 'Part-time',
    startDate: 'October 2024',
    endDate: 'October 2024',
    location: 'Remote',
    theme: 'hacktoberfest',
    responsibilities: [
      'Contributed to open-source projects during Hacktoberfest 2024',
      'Earned all four Hacktoberfest badges',
      'Contributed to projects focused on Docker containerization',
    ],
    technologies: ['Docker', 'JSON Web Token (JWT)'],
  },
  {
    id: 'girlscript',
    company: 'GirlScript Summer of Code',
    role: 'OpenSource Contributor',
    type: 'Part-time',
    startDate: 'May 2024',
    endDate: 'July 2024',
    location: 'Remote',
    theme: 'girlscript',
    responsibilities: [
      'Created separate Docker containers for frontend and backend components',
      'Implemented docker-compose.yml for container communication',
      'Refactored MongoDB connection for lazy initialization',
      'Added error handling for database connection lifecycle',
    ],
    technologies: ['Docker', 'Docker Compose', 'MongoDB'],
  },
  {
    id: 'geeksforgeeks',
    company: 'GeeksforGeeks',
    role: 'Technical Content Writer',
    type: 'Internship',
    startDate: 'December 2022',
    endDate: 'December 2023',
    location: 'Noida, Uttar Pradesh, India · Remote',
    theme: 'geeksforgeeks',
    responsibilities: [
      'Technical content writing for developer education',
      'Created documentation and tutorials',
    ],
    technologies: ['Docker', 'YAML', 'Technical Documentation'],
  },
]
