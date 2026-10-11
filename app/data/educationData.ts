export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
}

export const education: Education[] = [
  {
    id: 'suiit',
    institution: 'Sambalpur University Institute of Information Technology',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science',
    startDate: 'November 2021',
    endDate: 'May 2025',
  },
]
