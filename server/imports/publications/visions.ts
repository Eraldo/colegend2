import { Meteor } from 'meteor/meteor';

import { Visions } from '../../../both/collections/visions.collection';

Meteor.publish('vision', function() {
  return Visions.find({
    // owner: this.userId
  });
});
// Meteor.publish('vision', function(visionId: string) {
//   return Visions.find({
//     _id: visionId
//   });
// });

Meteor.publish('visions', function() {
  return Visions.find({
    owner: this.userId
  });
});
