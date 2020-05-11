import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { SongTableDataSource, SongTableItem } from './song-table-datasource';

@Component({
  selector: 'app-song-table',
  templateUrl: './song-table.component.html',
  styleUrls: ['./song-table.component.scss']
})
export class SongTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<SongTableItem>;
  dataSource: SongTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'album'];

  ngOnInit() {
    this.dataSource = new SongTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
