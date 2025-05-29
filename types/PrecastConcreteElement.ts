export type PrecastConcreteElement = {
    title: string,
    description: string,
    image: string,
    imageAlt: string,
    metaTitle: string,
    metaDescription: string,
    banner: string,
    bannerAlt: string,
    pageTitle: string,
    slug: string,
    firstSection: {
      firstTitle: string,
      secondTitle: string,
      description: string,
      image: string,
      imageAlt: string
    },
    secondSection: {
      title: string,
      description: string,
      items: [
        {
          title: string,
          description: string
        }
      ]
    }
  }
    
