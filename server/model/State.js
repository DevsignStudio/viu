import { Class } from 'meteor/jagi:astronomy';
import { Country } from '/imports/model/Country';
import { Region } from '/imports/model/Region';
import { State } from '/imports/model/State';

State.extend({
    meteorMethods: {
        create(obj) {
            if (!Region.findOne(obj.regionId)) {
                throw new Meteor.Error('notFound', 'Cannot find Country');
            }
            this.name = obj.name;
            this.regionId = obj.regionId;
            this.save();
            return this._id;
        },
        update(obj) {
            this.name = obj.name;
            this.regionId = obj.regionId;
            return this.save();
        },
        delete() {
            this.softRemove();
        }
    }
});

Meteor.publishComposite('states', {
    find: function() {
        return State.find();
    },
    children: [{
        find: function(state) {
            return Region.find(state.regionId);
        },
        children: [{
            find: function(region) {
                return Country.find(region.countryId);
            }
        }, ]
    }, ]
});