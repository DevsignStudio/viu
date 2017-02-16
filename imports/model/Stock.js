import { Class, Enum } from 'meteor/jagi:astronomy';
import { ProductType } from '/imports/model/ProductType';

export const StockFlow = Enum.create({
    name: 'StockFlow',
    identifiers: ['IN', 'OUT']
});

export const Stock = Class.create({
    name: "Stock",
    collection: new Mongo.Collection("stocks"),
    fields: {
        productTypeId: String,
        branchId: String,
        numOfStock: Number,
        type: StockFlow,
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