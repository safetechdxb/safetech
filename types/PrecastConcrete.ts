export type PrecastConcrete = {
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
      ]
    },
    thirdSection: {
      title: string,
      description: string,
      items: [
        {
          title: string,
          description: string,
          logo: string,
          logoAlt: string
        }
      ]
    },
    fourthSection: {
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