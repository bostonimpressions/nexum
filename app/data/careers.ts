export interface Career {
  title: string
  type: string[]
  experience: string
  location: string
  category: string
  link: string
}

export const careers: Career[] = [
  {
    title: "Account Executive",
    type: ["On Site", "Full Time"],
    experience: "5 - 6 Years",
    location: "Chicago, Illinois",
    category: "Sales",
    link: "/careers/account-executive"
  },
  {
    title: "Software Engineer",
    type: ["Remote", "Full Time"],
    experience: "3+ Years",
    location: "Remote (US)",
    category: "Engineering",
    link: "/careers/software-engineer"
  },
  {
    title: "Marketing Coordinator",
    type: ["Hybrid", "Part Time"],
    experience: "2 - 3 Years",
    location: "New York, NY",
    category: "Marketing",
    link: "/careers/marketing-coordinator"
  }
]
