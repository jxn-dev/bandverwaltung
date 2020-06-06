import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-gigs-add',
  templateUrl: './gigs-add.component.html',
  styleUrls: ['./gigs-add.component.scss'],
})
export class GigsAddComponent implements OnInit {
  date: string;
  name: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  writeDate(date: string){
    this.date = date;
  }
  writeGig(name: string){
    this.name = name;
    this.dataService.addToGigs(this.date, this.name)
  }
}
