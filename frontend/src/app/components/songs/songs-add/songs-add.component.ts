import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-songs-add',
  templateUrl: './songs-add.component.html',
  styleUrls: ['./songs-add.component.scss']
})
export class SongsAddComponent implements OnInit {

 /* isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuiler: FormBuilder) { }*/

  ngOnInit(): void {
    /*this.firstFormGroup = this._formBuiler.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuiler.group({
      secondCtrl: ['', Validators.required]
    });*/
  }

  // TODO: Write to JSON
}
