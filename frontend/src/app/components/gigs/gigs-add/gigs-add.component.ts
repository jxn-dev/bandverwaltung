import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gigs-add',
  templateUrl: './gigs-add.component.html',
  styleUrls: ['./gigs-add.component.scss'],
})
export class GigsAddComponent implements OnInit {
  id: number;
  date: string;
  name: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  writeId(id: number){
    this.id = id;
  }
  writeDate(date: string){
    this.date = date;
  }
  writeGig(name: string){
    this.name = name;
    this.dataService.addToGigs(this.id, this.date, this.name);
  }
}
