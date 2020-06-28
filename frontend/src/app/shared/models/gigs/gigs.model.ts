import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gigs',
  templateUrl: './gigs.model.html',
  styleUrls: ['./gigs.model.scss']
})
export class GigsModel {

  GigId: number;
  GigDate: string;
  GigName: string;

}
