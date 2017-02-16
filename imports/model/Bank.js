import { Class } from 'meteor/jagi:astronomy';
import { State } from '/imports/model/State';

export const Bank = Class.create({
    name: "Bank",
    collection: new Mongo.Collection("banks"),
    fields: {
        name: String,
        holderName: String,
        holderNumber: String,
        branchId: String,
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