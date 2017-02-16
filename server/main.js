import { Meteor } from 'meteor/meteor';
import { Country } from '/imports/model/Country';
import { Region } from '/imports/model/Region';
import { State } from '/imports/model/State';
import { Branch } from '/imports/model/Branch';
import { User } from '/imports/model/User';

Meteor.startup(() => {
    if (!Accounts.findUserByUsername("superadmin")) {
        console.log("Not find It");
        let country = new Country();
        country.name = "Malaysia";
        country.code = "MY";
        country.save();

        let region = new Region();
        region.name = "Semenanjung";
        region.countryId = country._id;
        region.save();

        let state = new State();
        state.name = "KL";
        state.regionId = region._id;
        state.save();

        let branch = new Branch();
        branch.name = "HQ";
        branch.stateId = state._id;
        branch.address1 = "8033, Alor Merah, Sungai Dua";
        branch.city = "Butterworth";
        branch.zip = "13800";
        branch.save();

        let userObj = {
            username: "superadmin",
            password: "n",
        };

        let profileObj = {
            nickname: "nizul",
            firstname: "nizul",
            lastname: "zaim",
            userType: "Super Admin",
            branchId: branch._id,
            address: [{
                address1: "8033, Alor Merah, Sungai Dua",
                address2: "",
                city: "Butterworth",
                state: state._id,
                zip: "13800",
            }],
            emails: ["skynightz93@gmail.com"],
        };

        let user = new User().create(userObj, profileObj);
    }
});