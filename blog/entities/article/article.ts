export type PlainArticle = {
  title: string;
  category: string;
  slug: string;
  author: {
    name: string;
  };
} & Record<string, unknown>;

export class Article {
  constructor(
    /**
     * name of the instance
     */
    readonly title: string,
    readonly category: string,
    readonly slug: string,
    readonly author: {
      name: string;
    }
  ) {}

  /**
   * create a Article object from a
   * plain object.
   */
  static from(plainArticle: PlainArticle) {
    return new Article(
      plainArticle.title,
      plainArticle.category,
      plainArticle.slug,
      plainArticle.author
    );
  }
}
