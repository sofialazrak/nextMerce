import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // 📝 BLOG SECTION
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog Content')
            .items([
              S.documentTypeListItem('post').title('Posts'),
              S.documentTypeListItem('postCategory').title('Post Categories'),
              S.documentTypeListItem('author').title('Authors'),
            ])
        ),

      S.divider(),

      // 🛒 STORE SECTION
      S.listItem()
        .title('Store')
        .child(
          S.list()
            .title('Store Management')
            .items([
              S.documentTypeListItem('product').title('Products'),
              S.documentTypeListItem('productCategory').title('Product Categories'),
              S.documentTypeListItem('brand').title('Brands'),
              S.divider(),
              S.documentTypeListItem('customer').title('Customers'),
              S.documentTypeListItem('order').title('Orders'),
              S.documentTypeListItem('review').title('Reviews'),
            ])
        ),
    ])
