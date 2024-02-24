interface Strenght {
  title: string
  iconName: string
  text: string
}

interface Languages {
  name: string
  level: string
  progress: number
}

interface Resume {
  strenghts: Strenght[]
  languages: Languages[]
  skills: Record<string, string[]>
}

export const RESUME_DATA: Resume = {
  strenghts: [
    {
      title: 'Attention to detail',
      iconName: 'eye',
      text: `I've been told numerous times that my work is nearly bug-free. That, of course, doesn't mean I don't make mistakes, but generally speaking, the results are of high quality. This proficiency stems from my experience as a QA engineer, where I can analyze problems from a broader perspective, identify and address all possible flows, and primarily test my work myself.`,
    },
    {
      title: 'Collaborative',
      iconName: 'people-group',
      text: `I am highly collaborative. I believe in open communication and actively engage with colleagues to discuss every aspect of our tasks. It's better to ask a stupid question than to miss something. This approach helps ensure everyone is on the same page, preventing future changes and saving time, effort, and money.`,
    },
    {
      title: 'Not afraid of failure',
      iconName: 'triangle-exclamation',
      text: 'Mistakes are part of being human. Like Einstein once said, "A person who never made a mistake never tried anything new." I can only agree with that… my mistakes taught me the most.',
    },
    {
      title: 'Ability to accept feedback',
      iconName: 'comments',
      text: 'I am not only able to accept feedback but I expect it and periodically ask for it. Positive feedback and recognition for work completed serve as motivation, while constructive feedback, provided in a constructive manner, helps identify areas for growth and personal development.',
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
      'Javascript (ES6)',
      'Typescript',
      'Node.js',
      'Python',
      'Java',
      'GraphQL',
      'SQL',
      'HTML5',
      'CSS3',
      'XML',
    ],
    'Frameworks & Libraries': [
      'React 18',
      'Next.js',
      'MobX',
      'typegoose',
      'typeGraphQL',
      'styled-components',
      'Express.js',
      'Apollo GraphQL',
    ],
    Testing: ['Jest', 'Playwright', 'Selenium WebDriver'],
    'Build and other tools': ['git', 'nx', 'pnpm', 'webpack', 'yarn', 'docker'],
  },
}
