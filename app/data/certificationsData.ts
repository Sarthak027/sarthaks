export interface Certification {
  id: string
  title: string
  issuer: string
  issueDate: string
  credentialId?: string
  credentialUrl?: string
  skills?: string[]
}

export const certifications: Certification[] = [
  {
    id: 'azure-fundamentals',
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    issueDate: 'March 2023',
    credentialUrl: 'https://www.credly.com/badges/14cf4588-5dba-4f44-8334-e0179eaf2802',
  },
  {
    id: 'rhel-cloud-native',
    title: 'Foundations of Red Hat Cloud-native Development',
    issuer: 'Coursera',
    issueDate: 'April 2023',
    credentialId: '14c673bdba95a7a4f659829e8b402d96',
  },
  {
    id: 'goldman-sachs',
    title: 'Software Engineering Virtual Experience Program',
    issuer: 'Goldman Sachs',
    issueDate: 'March 2023',
    credentialId: 'aYXHsQRKYxJfkSQzE',
    skills: ['Cryptography', 'Password Hashing'],
  },
  {
    id: 'linux-kernel',
    title: 'LFD103: Linux Kernel Development',
    issuer: 'The Linux Foundation',
    issueDate: 'February 2023',
  },
  {
    id: 'sql-advanced',
    title: 'SQL (Advanced)',
    issuer: 'HackerRank',
    issueDate: 'December 2022',
    credentialId: '72E3C65A8E95',
  },
  {
    id: 'problem-solving-intermediate',
    title: 'Problem Solving (Intermediate)',
    issuer: 'HackerRank',
    issueDate: 'December 2022',
    credentialId: 'FAC3990F5D07',
  },
  {
    id: 'problem-solving-basic',
    title: 'Problem Solving (Basic)',
    issuer: 'HackerRank',
    issueDate: 'December 2022',
    credentialId: '67C1E4A2B351',
  },
  {
    id: 'python-basic',
    title: 'Python (Basic)',
    issuer: 'HackerRank',
    issueDate: 'December 2022',
    credentialId: '7D568CA2395C',
  },
]
