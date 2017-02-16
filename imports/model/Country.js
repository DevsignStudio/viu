import { Class } from 'meteor/jagi:astronomy';

export const Country = Class.create({
    name: "Country",
    collection: new Mongo.Collection("countries"),
    fields: {
        name: String,
        code: String,
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