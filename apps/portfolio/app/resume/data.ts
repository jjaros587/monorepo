interface Experience {
  date: { from: string; to?: string }
  place: string
  position: string
  company: string
  description: string
  stack: string[]
}

interface Education {
  date: number
  place: string
  degree: string
  school: string
  main: string
  side?: string
  thesis?: { label: string; link: string }
}

interface Languages {
  name: string
  level: string
  progress: number
}

interface Resume {
  experience: Experience[]
  education: Education[]
  languages: Languages[]
  skills: Record<string, string[]>
}

export const RESUME_DATA: Resume = {
  experience: [
    {
      date: { from: '2021-01' },
      place: 'Prague (Czechia)',
      position: 'FRONTEND ENGINEER',
      company: 'Ataccama Software, s.r.o.',
      description:
        'I was given an opportunity to switch role and started developing the app I had been ensuring quality of. Starting from simple tasks, I quickly progressed to implementation of complex features, earning the trust to assume a leadership role.  I was driving an initiative involving the breakdown and migration of our codebase to monorepo libraries and led teams and ensuring the successful delivery when developing new features.',
      stack: [
        'Javascript',
        'Typescript',
        'React',
        'MobX',
        'GraphQL',
        'Apollo',
        'Jest',
        'Playwright',
        'Lingui',
        'HTML',
        'CSS',
        'styled-components',
        'Docker',
      ],
    },
    {
      date: { from: '2019-04', to: '2020-12' },
      place: 'Prague (Czechia)',
      position: 'QA ENGINEER',
      company: 'Ataccama Software, s.r.o.',
      description: `A member of a team responsible for developing the 'core' part of the platform serving as the foundation for features developed by other teams. My role involved ensuring quality throughout the lifecycle, with a focus on test automation utilizing GraphQL API calls and developing an internal framework built for this purpose.`,
      stack: ['Java', 'GraphQL', 'Selenium WebDriver', 'Docker'],
    },
    {
      date: { from: '2018-03', to: '2019-06' },
      place: 'Prague (Czechia)',
      position: 'SOFTWARE ENGINEER',
      company: 'E-Consulting Future, s.r.o.',
      description:
        'Development of a tool for data transfer from the app to a payroll SW and automation of functional test scenarios.',
      stack: ['Python', 'Selenium WebDriver', 'Test Complete'],
    },
    {
      date: { from: '2017-06', to: '2019-06' },
      place: 'Prague (Czechia)',
      position: 'QA ENGINEER',
      company: 'E-Consulting Future, s.r.o.',
      description:
        'Development of a tool for data transfer from the app to a payroll SW and automation of functional test scenarios.',
      stack: ['React', 'Apollo'],
    },
    {
      date: { from: '2016-06', to: '2017-06' },
      place: 'Prague (Czechia)',
      position: 'SW TESTER/ANALYST ',
      company: 'Trask Solutions, a.s.',
      description:
        'Development of a tool for data transfer from the app to a payroll SW and automation of functional test scenarios.',
      stack: ['React', 'Apollo'],
    },
  ],
  education: [
    {
      date: 2020,
      place: 'Prague (Czechia)',
      degree: 'Master’s degree - Ing. (equiv. to MsC)',
      school: 'University of economics - Faculty of informatics and statistics',
      main: 'Information systems and technologies',
      side: 'Software quality management',
      thesis: {
        label:
          'Framework for creating generatable automated functional tests using tool Selenium WebDriver',
        link: '',
      },
    },
    {
      date: 2018,
      place: 'Prague (Czechia)',
      degree: 'Bachelor’s degree - Bc. (equiv. to BsC)',
      school: 'University of economics - Faculty of informatics and statistics',
      main: 'Applied informatics',
      thesis: {
        label:
          'Proposal of an implementation of a continuous delivery practice into the development process of the Vehiklo.cz application',
        link: '',
      },
    },
    {
      date: 2014,
      place: 'Písek (Czechia)',
      degree: 'Maturita certificate (equiv. to Technical diploma)',
      school: 'Secondary technical school',
      main: 'Information technologies',
    },
  ],
  languages: [
    {
      name: 'Czech',
      level: 'C2, native',
      progress: 6,
    },
    {
      name: 'English',
      level: 'B2/C1',
      progress: 4.5,
    },
    {
      name: 'Spanish',
      level: 'A2/B1',
      progress: 2.5,
    },
    {
      name: 'Italian',
      level: 'A1',
      progress: 1,
    },
  ],
  skills: {
    Languages: [
      'Javascript (ES 6)',
      'Typescript',
      'Node.js',
      'Java',
      'GraphQL',
      'SQL',
      'Python',
      'HTML5',
      'CSS3',
      'XML',
    ],
    Frameworks: ['Next.js', 'Express.js', 'Apollo GraphQL'],
    Libraries: ['React 18', 'MobX', 'styled-components', 'typegoose', 'typeGraphQL'],
    Testing: ['Jest', 'Playwright', 'Selenium WebDriver'],
    'Build and other tools': ['git', 'Webpack', 'Nx', 'pnpm', 'Yarn', 'Docker'],
  },
}
