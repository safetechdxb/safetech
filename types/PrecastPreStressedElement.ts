export type PrecastPreStressedElement = {
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
      image: string,
      imageAlt: string,
      items: [
        {
          title: string,
          description: string
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
          image: string,
          imageAlt: string
        }
      ]
    },
    forthSectionStyle: string,
    forthSection: {
      title: string,
      description: string,
      image: string,
      imageAlt: string,
      column1Title: string,
      column2Title: string,
      items: [
        {
          column1Value: string,
          column2Value: string,
          image: string,
          imageAlt: string,
          title: string,
          description: string
        }
      ]
    }
  }
