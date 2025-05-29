export type About = {
  banner: string;
  bannerAlt: string;
  metaTitle: string;
  metaDescription: string;
  pageTitle: string;
  firstSection: {
    mainTitle: string;
    firstTitle: string;
    secondTitle: string;
    description: string;
    image: string;
    imageAlt: string;
    items: [
      {
        title: string;
        logo: string;
        logoAlt: string;
      }
    ];
  };
  secondSection: {
    mission: {
      logoAlt: string;
      logo: string;
      description: string;
    };
    vision: {
      logoAlt: string;
      logo: string;
      description: string;
    };
  };
  thirdSection: {
    title: string;
    description: string;
    items: [
      {
        number: string;
        value: string;
        logo: string;
        logoAlt: string;
      }
    ];
  };
  fourthSection: {
    title: string;
    description: string;
    items: [
      {
        title: string;
        description: string;
        logo: string;
        logoAlt: string;
      }
    ];
  };
  fifthSection: {
    title: string;
    description: string;
    items: [
      {
        title: string;
        description: string;
        logo: string;
        logoAlt: string;
        image: string;
        imageAlt: string;
      }
    ];
  };
  accreditations: [
    {
      logo: string;
      logoAlt: string;
    }
  ];
  sustainablity: {
    image: string;
    imageAlt: string;
    description: string;
  };
};
