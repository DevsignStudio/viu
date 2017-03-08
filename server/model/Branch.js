// import { Class } from 'meteor/jagi:astronomy';
// import { Country } from '/imports/model/Country';
// import { Region } from '/imports/model/Region';
// import { State } from '/imports/model/State';
// import { Branch } from '/imports/model/Branch';
// import { User } from '/imports/model/User';

// Branch.extend({
//     meteorMethods: {
//         create(obj) {
//             if (obj.name.toUpperCase() === "HQ") {
//                 throw new Meteor.Error('invalidName', 'Invalid Branch Name');
//             }
//             if (!State.findOne(obj.stateId)) {
//                 throw new Meteor.Error('notFound', 'Cannot find State');
//             }
//             this.name = obj.name;
//             this.address1 = obj.address1;
//             this.address2 = obj.address2;
//             this.city = obj.city;
//             this.zip = obj.zip;
//             this.stateId = obj.stateId;
//             this.save();
//             return this._id;
//         },
//         update(obj) {
//             this.name = obj.name;
//             this.stateId = obj.stateId;
//             this.address1 = obj.address1;
//             this.address2 = obj.address2;
//             this.city = obj.city;
//             this.zip = obj.zip;
//             return this.save();
//         },
//         delete() {
//             this.softRemove();
//         },
//         addUser(obj) {
//             let userObj = {
//                 username: obj.username,
//                 password: obj.password,
//                 profile: {
//                     firstname: obj.firstname,
//                     nickname: obj.firstname,
//                     lastname: obj.lastname,
//                     address: [{
//                         address1: this.address1,
//                         address2: this.address2,
//                         city: this.city,
//                         zip: this.zip,
//                         stateId: this.stateId,
//                     }],
//                     branchId: this._id,
//                     userType: obj.userType,
//                     emails: [obj.email],
//                 }
//             };
//             Accounts.createUser(userObj);
//         }
//     }
// });

// Meteor.publishComposite('branches', {
//     find: function() {
//         return Branch.find();
//     },
//     children: [{
//         find: function(branch) {
//             return State.find();
//         },
//         children: [{
//             find: function(state) {
//                 return Region.find(state.regionId);
//             },
//             children: [{
//                 find: function(region) {
//                     return Country.find(region.countryId);
//                 }
//             }, ]
//         }, ]
//     }, {
//         find: function(branch) {
//             return User.find({ "profile.branchId": branch._id });
//         },
//     }],
// });