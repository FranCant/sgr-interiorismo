export interface Category {
  _id: string
  title: string
  slug: {
    current: string
  }
  shortDescription: string
  projects: projects[]
}

export interface Projects {
  _id:? string
  title?: string
  body?: [object]
  slug: {
    current: string
  }
  shortDescription?: string
  description: string
  _type?: string
  image?: {
    asset?: {
      url?: string
    }
  }
  imagesGallery?: [object] 
  categories?: {
    _key?: string
    _ref?: string
    _type?: string
  };
}

export interface HeadData {
  title?: string
  keywords?: string
  description?: string
  defaultProps?: {
    title: string
    keywords: string
    description: string
  }
}