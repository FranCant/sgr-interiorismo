export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 90,
        }
      },
      {
        name: 'blockProject',
        title: 'Block Project',
        description: 'ADMIN Project',
        type: 'boolean',
      },
      {
        name: 'subtitle',
        title: 'Sub Title',
        type: 'string',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
      {
        name: 'shortDescription',
        title: 'Short Description',
        type: 'string',
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference', to: {type: 'category'}}],
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'imagesGallery',
        title: 'Images gallery',
        type: 'array',
        of: [{ type: 'image' }]
       },
      {
        name: 'tags',
        title: 'Tags',
       type:'array',
       of: [
         {
           name:'tag',
           title:'Tag',
           type:'string'
         }
       ]
      },
     
    ],
  };