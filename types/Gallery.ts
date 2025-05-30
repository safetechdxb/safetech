export type Gallery = {
    metaTitle: string,
    metaDescription: string,
    banner: string,
    bannerAlt: string,
    pageTitle: string,
    categories: [
      {
        category: string,
        images: [
          {
            image: string,
            imageAlt: string,
            title: string
          }
        ]
      }
    ]
  }