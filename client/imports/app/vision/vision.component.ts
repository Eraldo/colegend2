import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {MeteorObservable} from "meteor-rxjs";

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
  editing: boolean = false;

  ngOnInit() {
    if (this.visionSub) {
      this.visionSub.unsubscribe();
    }

    this.visionSub = MeteorObservable.subscribe('visions').subscribe(() => {
      MeteorObservable.autorun().subscribe(() => {
        this.vision = Visions.findOne() || {content: '', owner: ''};
      });
    });
  }

  updateVision() {
    if (!Meteor.userId()) {
      alert('Please log in to change this vision');
      return;
    }
    if (this.vision && this.vision.content) {
      Visions.update(this.vision._id, {
        $set: {
          content: this.vision.content,
        }
      });
    }
    this.editing = false
  }

  ngOnDestroy() {
    this.visionSub.unsubscribe();
  }

}
