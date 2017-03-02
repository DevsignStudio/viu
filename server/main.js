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

// var os = require('os-utils');


// console.log(os.platform());
// console.log(os.cpuCount());
// console.log(os.totalmem());
// setInterval(function() {
//     os.cpuUsage(function(v) {
//         console.log('CPU Usage (%): ' + v.toFixed(2));
//     });
//     // console.log((os.totalmem() - os.freemem()).toFixed(2));
//     // console.log(os.freememPercentage().toFixed(2) + "%");
// }, 2000);

// var _ = require("underscore");
// var os = require("os");
// var interval = 1;
// var old = _.map(os.cpus(), function(cpu) { return cpu.times; })

// setInterval(function() {
//     var result = [];
//     var current = _.map(os.cpus(), function(cpu) { return cpu.times; })
//     _.each(current, function(item, cpuKey) {
//         result[cpuKey] = {}

//         var oldVal = old[cpuKey];
//         _.each(_.keys(item), function(timeKey) {
//             var diff = (parseFloat((item[timeKey]) - parseFloat(oldVal[timeKey])) / parseFloat((interval * 100)));
//             var name = timeKey;
//             if (timeKey == "idle") {
//                 name = "CPU"
//                 diff = 100 - diff;
//             }
//             //console.log(timeKey + ":\t" + oldVal[timeKey] + "\t\t" + item[timeKey] + "\t\t" + diff);  
//             result[cpuKey][name] = diff.toFixed(0);
//         });
//     });
//     console.log(result);
//     old = current;
// }, (interval * 1000));


// var usage = require('os-usage');

// // create an instance of CpuMonitor
// var cpuMonitor = new usage.CpuMonitor();

// // watch cpu usage overview
// cpuMonitor.on('cpuUsage', function(data) {
//     console.log(data);

//     // { user: '9.33', sys: '56.0', idle: '34.66' }
// });

// const
//     spawn = require('child_process').spawn,
//     ls = spawn('ls', ['-lh', '/usr']);

// ls.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//     console.log(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//     console.log(`child process exited with code ${code}`);
// });