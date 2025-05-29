export type News = {
    metaTitle: string,
    metaDescription: string,
    banner: string,
    bannerAlt: string,
    pageTitle: string,
    categories: [
      {
        name: string
      }
    ],
    news: [
      {
        title: string,
        slug: string,
        content: string,
        thumbnail: string,
        thumbnailAlt: string,
        coverImage: string,
        coverImageAlt: string,
        category: string,
        images: string[],
        createdAt: string,
        metaTitle: string,
        metaDescription: string
      }
    ]
  }