import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import iso from 'iso-3166-1'

const countries = iso.all()
const codes = countries.map((country) => country.alpha2)
const names = countries.map((country) => country.country)

const Author = defineDocumentType(() => ({
  name: 'Author',
  filePathPattern: 'authors/*.mdx',
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
    biography: { type: 'string', required: true },
    avatar: { type: 'string', required: false }, // Optional URL to the author's avatar image
  },
}))

const Country = defineDocumentType(() => ({
  name: 'Country',
  filePathPattern: 'countries/*.mdx',
  contentType: 'mdx',
  fields: {
    slug: { type: 'string', required: true },
    name: {
      type: 'string',
      required: true,
    },
    code: {
      type: 'enum',
      options: codes,
      required: true,
    },
  },
}))

const Category = defineDocumentType(() => ({
  name: 'Category',
  filePathPattern: 'categories/*.mdx',
  contentType: 'mdx',
  fields: {
    slug: {
      type: 'string',
      required: true,
    },
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
  },
}))

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/*.mdx',
  contentType: 'mdx',
  fields: {
    slug: {
      type: 'string',
      required: true,
    },
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    country: {
      type: 'reference',
      of: Country,
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    // category: {
    //   type: 'reference',
    //   of: Category,
    //   required: true,
    // },
    // author: {
    //   type: 'reference',
    //   of: Author,
    //   required: true,
    // },
    // computedFields: {
    //   url: {
    //     type: 'string',
    //     resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    //   },
    // },
  },
}))

// Export the schemas
export default makeSource({
  contentDirPath: 'apps/travel-blog-frontend/content',
  documentTypes: [Post, Country, Category, Author],
})
