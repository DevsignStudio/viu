import { Class } from 'meteor/jagi:astronomy';
import { Country } from '/imports/model/Country';

export const Region = Class.create({
    name: "Region",
    collection: new Mongo.Collection("regions"),
    fields: {
        name: String,
        countryId: String,
    },
    helpers: {
        country() {
            return Country.findOne(this.countryId);
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