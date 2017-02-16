import { Class } from 'meteor/jagi:astronomy';
import { Country } from '/imports/model/Country';
Country.extend({
    meteorMethods: {
        create(obj) {
            this.name = obj.name;
            this.code = obj.code;
            return this.save();
        },
        update(obj) {
            this.name = obj.name;
            this.code = obj.code;
            return this.save();
        },
        delete() {
            this.softRemove();
        }
    }
});

Meteor.publishComposite('countries', {
    find: function() {
        return Country.find({});
    },
    // children: [
    //     {
    //         find: function(post) {
    //             // Find post author. Even though we only want to return
    //             // one record here, we use "find" instead of "findOne"
    //             // since this function should return a cursor.
    //             return Meteor.users.find(
    //                 { _id: post.authorId },
    //                 { limit: 1, fields: { profile: 1 } });
    //         }
    //     },
    // ]
});