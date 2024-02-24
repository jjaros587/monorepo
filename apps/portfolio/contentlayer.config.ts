import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Education = defineDocumentType(() => ({
  name: 'Education',
  filePathPattern: 'education/*.mdx',
  contentType: 'mdx',
  fields: {
    date: {
      type: 'number',
      required: true,
    },
    degree: {
      type: 'string',
      required: true,
    },
    school: {
      type: 'string',
      required: true,
    },
    place: {
      type: 'string',
      required: true,
    },
  },
}))

const Experience = defineDocumentType(() => ({
  name: 'Experience',
  filePathPattern: 'experience/*.mdx',
  contentType: 'mdx',
  fields: {
    position: {
      type: 'string',
      required: true,
    },
    company: {
      type: 'string',
      required: true,
    },
    place: {
      type: 'string',
      required: true,
    },
    dateFrom: {
      type: 'date',
      required: true,
    },
    dateTo: {
      type: 'date',
      required: false,
    },
    stack: {
      type: 'list',
      of: { type: 'string' },
    },
    jobType: {
      type: 'enum',
      options: ['QA', 'FE'],
      required: true,
    },
  },
}))

export default makeSource({
  contentDirPath: 'apps/portfolio/assets/data/mdx',
  documentTypes: [Education, Experience],
})
