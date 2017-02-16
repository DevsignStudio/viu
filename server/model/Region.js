import { Class } from 'meteor/jagi:astronomy';
import { Country } from '/imports/model/Country';
import { Region } from '/imports/model/Region';

Region.extend({
    meteorMethods: {
        create(obj) {
            if (!Country.findOne(obj.countryId)) {
                throw new Meteor.Error('notFound', 'Cannot find Country');
            }
            this.name = obj.name;
            this.countryId = obj.countryId;
            this.save();
            return this._id;
        },
        update(obj) {
            this.name = obj.name;
            this.countryId = obj.countryId;
            return this.save();
        },
        delete() {
            this.softRemove();
        }
    }
});

Meteor.publishComposite('regions', {
    find: function() {
        return Region.find();
    },
    children: [{
        find: function(region) {
            return Country.find(region.countryId);
        }
    }, ]
});