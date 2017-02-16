import { Class } from 'meteor/jagi:astronomy';
import { Bank } from '/imports/model/Bank';
import { User } from '/imports/model/User';

Bank.extend({
    meteorMethods: {
        create(obj) {
            this.name = obj.name;
            this.holderName = obj.holderName;
            this.holderNumber = obj.holderNumber;
            this.branchId = User.findOne(Meteor.userId()).profile.branchId;
            return this.save();
        },
        update(obj) {
            this.name = obj.name;
            this.holderName = obj.holderName;
            this.holderNumber = obj.holderNumber;
            return this.save();
        },
        delete() {
            this.softRemove();
        }
    }
});

Meteor.publishComposite('banks', {
    find: function() {
        return Bank.find();
    },
});