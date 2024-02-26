import { allPosts, allCategories, allCountries } from '@contentlayer/generated'

export class ContentManager {
  public readonly posts = new ContentEntityModel(allPosts)
  public readonly categories = new ContentEntityModel(allCategories)
  public readonly countries = new ContentEntityModel(allCountries)
}

class ContentEntityModel<T extends { slug: string }> {
  constructor(private readonly items: Array<T>) {}

  get allItems() {
    return this.items
  }

  getBySlug(slug: string) {
    return this.items.find((item) => item.slug === slug)
  }

  getFilteredItems(callback: (item: T) => boolean) {
    return this.items.filter(callback)
  }
}
