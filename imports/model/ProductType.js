import { Class } from 'meteor/jagi:astronomy';
import { Product } from '/imports/model/Product';

export const ProductType = Class.create({
    name: "ProductType",
    collection: new Mongo.Collection("productTypes"),
    fields: {
        name: String,
        productId: String,
        stock: {
            type: Number,
            transient: true
        },
    },
    helpers: {
        product() {
            return Product.findOne(this.productId);
        }
    },
    behaviors: {
        timestamp: {
            hasCreatedField: true,
            createdFieldName: 'createdAt',
            hasUpdatedField: true,
            updatedFieldName: 'updatedAt'
        },
        softremove: {
            removedFieldName: 'removed',
            hasRemovedAtField: true,
            removedAtFieldName: 'removedAt'
        }
    }
});