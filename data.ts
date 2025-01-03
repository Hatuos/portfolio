const introduction = {
    username: 'Hatuos',
    title: 'I\'m Hatuos.',
    welcomeAvatar: "img/profileImage.png",
    subTitle:
    `I\'m looking to collaborate on whatever helps me learn.
    Ask me about whatever you want related to computer engineering, I may not know how to answer you but I'm sure I'll learn something.`,
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
      badgeURL : 'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=Java&logoColor=white',
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
      badgeURL : 'https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white',
      reference: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
      skillName: 'JavaScript',
      badgeURL : 'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E',
      reference: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
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
  toolsSoftwareSkills: [
    {
      skillName: 'GitHub',
      badgeURL : 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white',
      reference: 'https://github.com/'
    },
    {
      skillName: 'GitLab',
      badgeURL : 'https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white',
      reference: 'https://about.gitlab.com/'
    },
    {
      skillName: 'IntelliJ IDEA',
      badgeURL : 'https://img.shields.io/badge/IntelliJ_IDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white',
      reference: 'https://www.jetbrains.com/idea/'
    },
    {
      skillName: 'Visual Studio Code',
      badgeURL : 'https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white',
      reference: 'https://code.visualstudio.com/'
    },
    {
      skillName: 'DBeaver',
      badgeURL : 'https://img.shields.io/badge/dbeaver-382923?style=for-the-badge&logo=dbeaver&logoColor=white',
      reference: 'https://dbeaver.io/'
    },
    {
      skillName: 'SonarQube',
      badgeURL : 'https://img.shields.io/badge/Sonarqube-5190cf?style=for-the-badge&logo=sonarqube&logoColor=white',
      reference: 'https://www.sonarsource.com/'
    }
  ],
  learning: [
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
      skillName: 'Angular',
      badgeURL : 'https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white',
      reference: 'https://angular.dev/'
    },
    {
      skillName: 'Python',
      badgeURL : 'https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue',
      reference: 'https://www.python.org/'
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
      desc: 'Computer engineering degree',
      keyNotes: [
        'Higher university degree with specialization in software engineering'
      ]
    }
  ],
  workExperience: [
    {
      role: 'FullStack Developer',
      companyName: 'Plexus Tech',
      companyLink: "https://www.plexus.es/en/",
      desc: '',
      keyNotes: [
        'Java Jakarta EE Application Development and Maintenance',
        'Angular application development and maintenance'
      ]
    }
  ]
};
  
export { introduction, socialMediaLinks, skillsSection, myJourney };