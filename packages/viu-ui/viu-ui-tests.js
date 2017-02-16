// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by viu-ui.js.
import { name as packageName } from "meteor/viu-ui";

// Write your tests here!
// Here is an example.
Tinytest.add('viu-ui - example', function (test) {
  test.equal(packageName, "viu-ui");
});
