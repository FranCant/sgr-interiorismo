export interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  shortDescription: string;
  projects: projects[];
}

interface Projects {
  _id: string;
  title?: string;
  body?: any;
  slug: {
    current: string;
  };
  shortDescription?: string;
  description: string;
  _type?: string;
  image?: {
    asset?: {
      url?: string;
    };
  };
  imagesGallery: imagegallery;
  categories?: {
    _key?: string;
    _ref?: string;
    _type?: string;
  };
}
interface imagegallery {
  map(arg0: (imagen: any) => JSX.Element): import("react").ReactNode;
  asset: {
    _key?: string;
    _ref?: string;
    _type?: "image";
  };
}

export interface HeadData {
  title?: string;
  keywords?: string;
  description?: string;
  defaultProps?: {
    title: string;
    keywords: string;
    description: string;
  };
}
