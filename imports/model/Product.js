import { Class } from 'meteor/jagi:astronomy';
import { ProductPrice } from '/imports/model/ProductPrice';
import { ProductType } from '/imports/model/ProductType';

export const Product = Class.create({
    name: "Product",
    collection: new Mongo.Collection("products"),
    fields: {
        name: String,
        description: String,
        weight: {
            type: String,
        },
    },
    helpers: {
        price() {
            return ProductPrice.findOne({ productId: this._id });
        },
        types() {
            return ProductType.find({ productId: this._id });
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