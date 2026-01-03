const introduction = {
    username: 'Samir',
    title: 'Hello World!',
    welcomeAvatar: "img/profileImage.png",
    subTitle:
    `I\'m looking to collaborate on whatever helps me learn.
    Ask me about whatever you want related to computer engineering, I may not know the answer but I'm sure I'll learn something.`,
    resumeLink:
      '-----',
    display: true
} as { username: string, title: string, welcomeAvatar: string, subTitle: string, resumeLink: string, display: boolean };

const socialMediaLinks = {
  github: 'https://github.com/Hatuos',
  linkedin: 'https://es.linkedin.com/',
  display: true
} as { github: string, linkedin: string, display: boolean };

const skillsSection = {
  title: 'Skills',
  softwareSkillsHeader:'Technologies I\'ve dipped my toes in...',
  backendSoftwareSkills: [
    {
      skillName: 'Java',
      badgeURL : 'https://img.shields.io/badge/Jakarta_EE-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white',
      reference: 'https://www.oracle.com/java/'
    },
    {
      skillName: 'Spring',
      badgeURL : 'https://img.shields.io/badge/Spring-F2F4F9?style=for-the-badge&logo=spring',
      reference: 'https://spring.io/'
    },
    {
      skillName: 'SpringBoot',
      badgeURL : 'https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot',
      reference: 'https://spring.io/projects/spring-boot'
    },
    {
      skillName: 'Hibernate',
      badgeURL : 'https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=hibernate&logoColor=fff',
      reference: 'https://spring.io/'
    },
    {
      skillName: 'Python',
      badgeURL : 'https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue',
      reference: 'https://www.python.org/'
    }
  ],
  frontendSoftwareSkills: [
    {
      skillName: 'TypeScript',
      badgeURL : 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
      reference: 'https://www.typescriptlang.org/'
    },
    {
      skillName: 'Node.js',
      badgeURL : 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white',
      reference: 'https://nodejs.org/'
    },
    {
      skillName: 'PNPM',
      badgeURL : 'https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=fff',
      reference: 'https://pnpm.io/'
    },
    {
      skillName: 'Angular',
      badgeURL : 'https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white',
      reference: 'https://angular.dev/'
    }
  ],
  databaseSkills: [
    {
      skillName: 'Oracle',
      badgeURL : 'https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white',
      reference: 'https://www.oracle.com/'
    },
    
    {
      skillName: 'MySQL',
      badgeURL : 'https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white',
      reference: 'https://www.mysql.com/'
    }
  ],
  toolsSoftwareSkills: [
    {
      skillName: 'Docker',
      badgeURL : 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=fff',
      reference: 'https://www.docker.com/'
    },
    {

      skillName: 'Jenkins',
      badgeURL : 'https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white',
      reference: 'https://www.jenkins.io/'
    },
    {

      skillName: 'Postman',
      badgeURL : 'https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white',
      reference: 'https://www.postman.com/'
    },
    {
      skillName: 'SonarQube',
      badgeURL : 'https://img.shields.io/badge/SonarQube-126ED3?style=for-the-badge&logo=sonarqubecloud&logoColor=fff',
      reference: 'https://www.sonarsource.com/'
    }
  ],
  display: true
} as {
  title: string, 
  softwareSkillsHeader: string, 
  backendSoftwareSkills: { skillName: string, badgeURL: string, reference: string }[],
  frontendSoftwareSkills:  { skillName: string, badgeURL: string, reference: string }[],
  databaseSkills: { skillName: string, badgeURL: string, reference: string }[],
  toolsSoftwareSkills: { skillName: string, badgeURL: string, reference: string }[],
  display: boolean
};

const myJourney = {
  display: true,
  myJourneyHeader:'My Journey',
  academicJourneyHeader: 'Education',
  workJourneyHeader: 'Experiences',
  academicExperience: [
    {
      role: 'Student',
      centerName: 'University of La Laguna',
      centerLink: "https://www.ull.es/",
      date: 2023,
      desc: 'Computer engineering degree',
      certificationDescription: [
        'Higher university degree with specialization in software engineering'
      ], 
      keyNotes: [
        'C, C++, Java, Javascript, Python, Ruby, Assembler, R, Matlab',
        'Development outside specific frameworks. Software development fundamentals are prioritized.'
      ]
    }
  ],
  workExperience: [
    {
      role: 'FullStack Developer',
      companyName: 'Plexus Tech',
      companyLink: "https://www.plexus.es/en/",
      date: '2023 - Present',
      workDescription: [
        'Fullstack developer for the development and maintenance of service-oriented applications.'
      ],
      keyNotes: [
        'Jakarta EE / Spring application development and maintenance',
        'Angular application development and maintenance'
      ]
    }
  ]
} as {
  display: boolean, 
  myJourneyHeader: string, 
  academicJourneyHeader: string,
  workJourneyHeader: string,
  academicExperience: { role: string, centerName: string, centerLink: string, date: number, desc: string, certificationDescription: string[], keyNotes: string[] }[];
  workExperience: { role: string, companyName: string, companyLink: string, date: string, workDescription: string[], keyNotes: string[] }[]
};

const projectsSection = {
  display: true,
  title: 'Projects',
  githubProjectsLink: 'https://github.com/Hatuos',
  projects: [
    {
      title: 'Project Tittle 1',
      description: 'Example project 1 serves for things X and Y, along with the implementation of Z.',
      image: "img/exampleProjectImage.png",
      link: 'https://github.com/Hatuos',
      projectTags: ['Angular', 'Typescript']
    },
    {
      title: 'Project Tittle 2',
      description: 'Example project 2 serves for things X and Y, along with the implementation of Z.',
      image: "img/exampleProjectImage.png",
      link: 'https://github.com/Hatuos',
      projectTags: ['Java', 'Spring','Spring Boot']
    },
    {
      title: 'Project Tittle 3',
      description: 'Example project 3 serves for things X and Y, along with the implementation of Z.',
      image: "img/exampleProjectImage.png",
      link: 'https://github.com/Hatuos',
      projectTags: ['Python', 'Pandas']
    }
  ]
} as {
  display: boolean,
  title: string,
  githubProjectsLink: string,
  projects: { title: string, description: string, image: string, link: string, projectTags: string[] }[]
}
  
export { introduction, socialMediaLinks, skillsSection, myJourney, projectsSection};