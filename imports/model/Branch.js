import { Class } from 'meteor/jagi:astronomy';
import { State } from '/imports/model/State';

export const Branch = Class.create({
    name: "Branch",
    collection: new Mongo.Collection("branches"),
    fields: {
        name: String,
        address1: String,
        address2: {
            type: String,
            optional: true,
        },
        city: String,
        zip: String,
        stateId: String,
    },
    helpers: {
        state() {
            return State.findOne(this.stateId);
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