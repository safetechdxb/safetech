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
          _id: string;
          title: string;
          file: string;
          size:string;
        }
      ];
    }
  ];
};