import { Injectable } from "@angular/core";
import { skill, skills } from "./skills.interface";

@Injectable({
    providedIn: 'root'
})
export class SkillsService {
    skills: skills = {
        languages: [
            {
                name: 'C Programming',
                image: 'C.png',
                category: 'Coding',
                link: 'https://www.cprogramming.com/'
            },
            {
                name: 'Python Programming',
                image: 'Python.png',
                category: 'Coding',
                link: 'https://www.python.org/'
            },
            {
                name: 'Java',
                image: 'Java.svg',
                category: 'Coding',
                link: 'https://www.java.com/en/'
            },
            {
                name: 'JavaScript',
                image: 'JavaScript.png',
                category: 'Web Development',
                link: 'https://www.javascript.com/'
            },
            {
                name: 'TypeScript',
                image: 'TypeScript.webp',
                category: 'Web Development',
                link: 'https://www.typescriptlang.org/'
            }
        ],
        frameWorks: [
            {
                name: 'Angular',
                image: 'Angular.webp',
                category: 'Frontend Web Development',
                link: 'https://angular.dev/'
            },
            {
                name: 'Node.js',
                image: 'node-js.svg',
                category: 'Backend Web Development',
                link: 'https://nodejs.org/en'
            },
            {
                name: 'Express.js',
                image: 'Expressjs.png',
                category: 'Backend Web Development',
                link: 'https://expressjs.com/'
            },
            {
                name: 'Nest.js',
                image: 'Nestjs.png',
                category: 'Backend Web Development',
                link: 'https://nestjs.com/'
            },
            {
                name: 'Objection.js',
                image: 'Objectionjs.png',
                category: 'Backend Web Development',
                link: 'https://vincit.github.io/objection.js/'
            },
            {
                name: 'Mongoose',
                image: 'Mongoosejs.png',
                category: 'Backend Web Development',
                link: 'https://mongoosejs.com/'
            }
        ],
        technologies: [
            {
                name: 'Redis',
                image: 'Redis.png',
                category: 'Cache Database',
                link: 'https://redis.io/'
            },
            {
                name: 'Database Management System',
                image: 'DBMS.png',
                category: 'Database',
                link: 'https://www.ibm.com/docs/en/zos-basic-skills?topic=zos-what-is-database-management-system'
            },
            {
                name: 'Git',
                image: 'Git.png',
                category: 'Devops',
                link: 'https://git-scm.com/'
            },
            {
                name: 'Socket.io',
                image: 'Socketio.png',
                category: 'Service',
                link: 'https://socket.io/'
            }
        ],
        tools: [
            {
                name: 'HTML',
                image: 'Html.png',
                category: 'Frontend Web Development',
                link: 'https://html.com/'
            },
            {
                name: 'CSS',
                image: 'Css.png',
                category: 'Frontend Web Development',
                link: 'https://www.w3.org/Style/CSS/Overview.en.html'
            },
            {
                name: 'MySQL',
                image: 'Mysql.svg',
                category: 'Database',
                link: 'https://www.mysql.com/'
            },
            {
                name: 'MongoDB',
                image: 'Mongodb.png',
                category: 'Database',
                link: 'https://www.mongodb.com/'
            },
            {
                name: 'Docker',
                image: 'Docker.png',
                category: 'Devops',
                link: 'https://www.docker.com/'
            },
            {
                name: 'GitHub',
                image: 'Github.jpg',
                category: 'Devops',
                link: 'https://github.com/'
            }
        ]

    }
    constructor() { }

    getSkillsByCategory(tab: string): skill[] {
        if (tab === 'languages') {
            return this.skills.languages
        } else if (tab === 'frameWorks') {
            return this.skills.frameWorks
        } else if ( tab === 'technologies') {
            return this.skills.technologies
        } else if (tab === 'tools') {
            return this.skills.tools
        }
        return []
    }

}