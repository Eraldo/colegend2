import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.methods({
    updateUsername: function (username:string) {
        this.unblock();

        check(username, String);
        Accounts.setUsername(Meteor.userId(), username);
    }
});