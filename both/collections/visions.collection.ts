import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

import { Vision } from '../models/vision.model';

export const Visions = new MongoObservable.Collection<Vision>('visions');

function loggedIn() {
  return !!Meteor.user();
}

Visions.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});
