import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {postCategoryType} from './postCategoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import { productCategoryType } from './productCategoryType'
import { productType } from './productType'
import { brandType } from './brandType'
import { reviewType } from './reviewType'
import { addressType } from './addressType'
import { customerType } from './customerType'
import { orderType } from './orderType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType, 
    postCategoryType, 
    postType, 
    authorType, 
    productCategoryType, 
    productType,
    brandType, 
    reviewType,
    addressType,
    customerType,
    orderType],
}
