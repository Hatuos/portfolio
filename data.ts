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
};

const socialMediaLinks = {
  github: 'https://github.com/Hatuos',
  linkedin: 'https://es.linkedin.com/',
  display: true
};

const skillsSection = {
  title: 'Skills',
  softwareSkillsHeader:'Technologies I\'ve dipped my toes in...',
  backendSoftwareSkills: [
    {
      skillName: 'Java',
      badgeURL : 'https://img.shields.io/badge/Jakarta_EE-%23ED8B00.svg?style=for-the-badge&logo=Java&logoColor=white',
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
      skillName: 'Python',
      badgeURL : 'https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue',
      reference: 'https://www.python.org/'
    },
    {
      skillName: 'C',
      badgeURL : 'https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white',
      reference: 'https://en.wikipedia.org/wiki/C_(programming_language)'
    },
    {
      skillName: 'C++',
      badgeURL : 'https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white',
      reference: 'https://en.wikipedia.org/wiki/C%2B%2B'
    }
  ],
  frontendSoftwareSkills: [
    {
      skillName: 'html',
      badgeURL : 'https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white',
      reference: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    {
      skillName: 'css',
      badgeURL : 'https://img.shields.io/badge/CSS-323330?style=for-the-badge&logo=css3&logoColor=white',
      reference: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
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
      skillName: 'Angular',
      badgeURL : 'https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white',
      reference: 'https://angular.dev/'
    }
  ],
  databaseSkills: [
    {
      skillName: 'DBeaver',
      badgeURL : 'https://img.shields.io/badge/dbeaver-382923?style=for-the-badge&logo=dbeaver&logoColor=white',
      reference: 'https://dbeaver.io/'
    },
    {
      skillName: 'MySQL',
      badgeURL : 'https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white',
      reference: 'https://www.mysql.com/'
    },
    {
      skillName: 'Oracle',
      badgeURL : 'https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white',
      reference: 'https://www.oracle.com/'
    }
  ],
  toolsSoftwareSkills: [
    {
      skillName: 'Git',
      badgeURL : 'https://img.shields.io/badge/Git-330F63?style=for-the-badge&logo=gitlab&logoColor=white',
      reference: 'https://github.com/'
    },
    {
      skillName: 'IntelliJ IDEA',
      badgeURL : 'https://img.shields.io/badge/IntelliJ-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white',
      reference: 'https://www.jetbrains.com/idea/'
    },
    {
      skillName: 'Visual Studio Code',
      badgeURL : 'https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white',
      reference: 'https://code.visualstudio.com/'
    },
    {
      skillName: 'SonarQube',
      badgeURL : 'https://img.shields.io/badge/Sonar-5190cf?style=for-the-badge&logo=sonarqube&logoColor=white',
      reference: 'https://www.sonarsource.com/'
    },
    {
      skillName: 'CicleCI',
      badgeURL : 'https://img.shields.io/badge/circle%20ci-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white',
      reference: 'https://circleci.com/'
    }
  ],
  display: true
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

}
  
export { introduction, socialMediaLinks, skillsSection, myJourney, projectsSection};