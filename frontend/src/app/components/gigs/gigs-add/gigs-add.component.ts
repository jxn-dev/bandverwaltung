import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { GigsTableDataSource } from '../gigs-table/gigs-table-datasource';

@Component({
  selector: 'app-gigs-add',
  templateUrl: './gigs-add.component.html',
  styleUrls: ['./gigs-add.component.scss']
})
export class GigsAddComponent implements OnInit {
  data: DataService = new DataService();
  date: string;
  name: string;

  constructor() { }

  ngOnInit(): void {
  }
  writeDate(date: string){
    this.date = date;
  }
  writeGig(name: string){
    this.name = name;
    this.data.addToGigs(this.date, this.name)
    
  }
}
