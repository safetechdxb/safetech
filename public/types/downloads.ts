export type downloadsData = {
  banner: string;
  bannerAlt: string;
  metaDescription: string;
  metaTitle: string;
  pageTitle: string;
  categories: [
    {
      category: string;
      _id: string;
      files: [
        {
          file: string;
          title: string;
          _id: string;
        }
      ];
    }
  ];
};