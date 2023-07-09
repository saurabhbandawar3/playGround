import { Component, ViewEncapsulation } from '@angular/core';
import { IOlympicData } from './interfaces';
import { HttpClient } from '@angular/common/http';
import { ColDef, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-gid',
  templateUrl: './gid.component.html',
  styleUrls: ['./gid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GidComponent {
  public columnDefs: ColDef[] = [
    { field: 'country', rowGroup: true, hide: true },
    { field: 'year', rowGroup: true, hide: true },
    { field: 'athlete' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    sortable: true,
    resizable: true,
  };
  public autoGroupColumnDef: ColDef = {
    minWidth: 200,
  };
  public rowData!: IOlympicData[];

  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent<IOlympicData>) {
    this.http
      .get<IOlympicData[]>(
        'https://www.ag-grid.com/example-assets/olympic-winners.json'
      )
      .subscribe((data) => (this.rowData = data));
  }
}
