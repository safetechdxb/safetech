export type home = {
  metaTitle: string;
  metaDescription: string;
  aboutSection: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    items: [
      {
        number: string;
        value: string;
      }
    ];
  };
  bannerStyle: string;
  bannerImage: string;
  bannerVideo: string;
  bannerImageAlt: string;
  posterImage: string;
  bannerTitle: string;
  bannerDescription: string;
  banners: [
    {
      image: string;
      imageAlt: string;
      title: string;
      description: string;
    }
  ];
  products: {
    title: string; 
    items: [
      {
        title: string;
        description: string;
        image: string;
        imageAlt: string;
        url: string;
      }
    ];
  };
  facilities: {
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
  clients: {
    title: string;
    items: [
      {
        image: string;
        imageAlt: string;
      }
    ];
  };
};
