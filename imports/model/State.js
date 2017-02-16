import { Class } from 'meteor/jagi:astronomy';
import { Region } from '/imports/model/Region';

export const State = Class.create({
    name: "State",
    collection: new Mongo.Collection("states"),
    fields: {
        name: String,
        regionId: String,
    },
    helpers: {
        region() {
            return Region.findOne(this.regionId);
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