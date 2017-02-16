import { Class } from 'meteor/jagi:astronomy';
import { State } from '/imports/model/State';
import { Branch } from '/imports/model/Branch';
export const Address = Class.create({
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
    }
});

export const UserProfile = Class.create({
    name: 'UserProfile',
    fields: {
        nickname: String,
        firstname: String,
        lastname: String,
        address: [Address],
        branchId: String,
        userType: String,
        emails: [String],

    }
});

export const User = Class.create({
    name: "User",
    collection: Meteor.users,
    fields: {
        username: String,
        profile: UserProfile,
        fullname: {
            transient: true,
            type: String,
            resolve(doc) {
                String.prototype.capitalizeFirstLetter = function() {
                    return this.charAt(0).toUpperCase() + this.slice(1);
                };
                return doc.profile.firstname.capitalizeFirstLetter() + " " + doc.profile.lastname.capitalizeFirstLetter();
            }
        }
    },
    helpers: {
        state() {
            return State.findOne(this.profile.address.stateId);
        },
        branch() {
            return Branch.findOne(this.profile.branchId);
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