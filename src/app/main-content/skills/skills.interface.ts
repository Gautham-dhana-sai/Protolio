export interface skill {
    name: string,
    image: string,
    category: string,
    link: string
}

export interface skills {
    languages: skill[] | [],
    frameWorks: skill[] | [],
    technologies: skill[] | [],
    tools: skill[] | []
}
