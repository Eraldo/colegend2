import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {MeteorObservable} from "meteor-rxjs";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";

import {Visions} from "../../../../both/collections/visions.collection";
import {Vision} from "../../../../both/models/vision.model";

import template from './vision.component.html';
import style from './vision.component.scss';

@Component({
  selector: 'vision',
  template,
  styles: [style]
})
export class VisionComponent implements OnInit {
  visionSub: Subscription;
  vision: Vision;
  visionForm: FormGroup;
  editing: boolean = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    if (this.visionSub) {
      this.visionSub.unsubscribe();
    }

    this.visionSub = MeteorObservable.subscribe('visions').subscribe(() => {
      MeteorObservable.autorun().subscribe(() => {
        this.vision = Visions.findOne() || {content: '', owner: ''};
        this.createVisionForm()
      });
    });
  }

  createVisionForm() {
    this.visionForm = this.formBuilder.group({
      content: [this.vision!.content || '', Validators.required],
    });
  }

  updateVision() {
    if (!Meteor.userId()) {
      alert('Please log in to change this vision');
      return;
    }
    if (this.visionForm.dirty && this.visionForm.valid) {
      Visions.update(this.vision._id, {
        $set: {
          content: this.visionForm.value.content,
        }
      });
    }
    this.editing = false
  }

  ngOnDestroy() {
    this.visionSub.unsubscribe();
  }

}
