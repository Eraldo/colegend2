import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InjectUser } from "angular2-meteor-accounts-ui";

import template from './settings.component.html';
import style from './settings.component.scss';

@Component({
  selector: 'settings',
  template,
  styles: [ style ]
})
@InjectUser("user")
export class SettingsComponent implements OnInit {
  settingsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}


  ngOnInit() {
    // get the current username
    let user = Meteor.user()
    let current_username = ''
    if (user && user.username) {
      current_username = user.username
    }
    // set the current username as the initial value for the settigns form
    this.settingsForm = this.formBuilder.group({
      username: [current_username, Validators.required],
    });
  }

  updateSettings(): void {
    if (!Meteor.userId()) {
      alert('Please log in to update your settings!');
      return;
    }

    if (this.settingsForm.dirty && this.settingsForm.valid) {
      Meteor.call('updateUsername', this.settingsForm.value.username);
    }
  }
}
