export type careers = {
  banner: string;
  bannerAlt: string;
  metaTitle: string;
  metaDescription: string;
  pageTitle: string;
  firstSection: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    items: [
      {
        title: string;
        description: string;
      }
    ];
  };
  secondSection: {
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
  thirdSection: {
    items: [
      {
        title: string;
        mode: string;
        jobType: string;
      }
    ];
  };
};
