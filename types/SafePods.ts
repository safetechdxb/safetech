export type SafePodsData = {
  metaTitle: string;
  metaDescription: string;
  banner: string;
  bannerAlt: string;
  pageTitle: string;
  firstSection: {
    firstTitle: string;
    secondTitle: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  secondSection: {
    title: string;
    items: [
      {
        title: string;
        description: string;
        image: string;
        imageAlt: string;
      }
    ];
  };
  thirdSection: {
    title: string;
    items: [
      {
        title: string;
        description: string;
        logo: string;
        logoAlt: string;
      }
    ];
  };
  fourthSection: {
    title: string;
    items: [
      {
        title: string;
        description: string;
        image: string;
        imageAlt: string;
      }
    ];
  };
  fifthSection: {
    title: string;
    items: [
      {
        image: string;
        imageAlt: string;
      }
    ];
  };
};
