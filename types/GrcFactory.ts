export type GrcFactory = {
    metaTitle: string,
    metaDescription: string,
    pageTitle: string,
    banner: string,
    bannerAlt: string,
    productSlug: string,
    firstSection: {
      firstTitle: string,
      secondTitle: string,
      description: string,
      image: string,
      imageAlt: string
    },
    elementsSection: {
      title: string,
      description: string,
      items: [
        {
          title: string,
          description: string,
          image: string,
          imageAlt: string
        }
      ]
    },
    thirdSection: {
      title: string,
      items: [
        {
          title: string,
          description: string,
          image: string,
          imageAlt: string
        }
      ]
    }
  }