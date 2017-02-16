import { Class } from 'meteor/jagi:astronomy';
import { State } from '/imports/model/State';

const Address = Class.create({
    name: "Address",
    fields: {
        address1: String,
        address2: {
            type: String,
            optional: true,
        },
        city: String,
        zip: String,
        stateId: String,
        orderNumber: {
            type: String,
            index: 1,
        }
    }
});

export const StockOrder = Class.create({
    name: "StockOrder",
    collection: new Mongo.Collection("stocksOrder"),
    fields: {
        status: String,
        address: Address,
        totalPayment: Number,
        bankId: String,
        shipmentNumber: String,

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