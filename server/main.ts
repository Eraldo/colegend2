import { Meteor } from 'meteor/meteor';

import { loadParties } from './imports/fixtures/parties';

import './imports/publications/parties';
import './imports/publications/users';
import '../both/methods/parties.methods';
import './imports/publications/images';
import './imports/publications/visions';

Meteor.startup(() => {
  loadParties();
});
