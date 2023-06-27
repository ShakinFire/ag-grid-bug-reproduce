import {Component, OnInit} from '@angular/core';
import {ColDef, ColumnApi, ColumnState, GridApi, GridReadyEvent} from "ag-grid-community";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public rowData: any[] = [];
  public columnDefs: ColDef[] = [
    { field: 'name' },
    { field: 'age' },
    { field: 'location' },
    { field: 'telephone', filter: 'agTextColumnFilter' }
  ];
  public defaultColDef = {
    enableValue: true,
    filter: true,
    flex: 1
  }
  private readonly dataLength = 500;
  private characters ='abcdefghijklmnopqrstuvwxyz';
  private locations = ['Varna', 'Sofiq', 'Vidin', 'Ruse', 'Plovdiv', 'Burgas', 'Stara Zagora', 'Selo'];
  private telephones = ['Xiomi', 'Iphone', 'Samsung', 'Motorola', 'Pixel', 'Huawei'];
  private gridApi: GridApi | undefined;
  private columnApi: ColumnApi | undefined;
  private columnState: ColumnState[] = [
    {
      'colId': 'name',
      'width': 220,
      'hide': false,
      'pinned': null,
      'sort': null,
      'sortIndex': null,
      'aggFunc': null,
      'rowGroup': false,
      'rowGroupIndex': null,
      'pivot': false,
      'pivotIndex': null,
      'flex': 1
    },
    {
      'colId': 'age',
      'width': 220,
      'hide': false,
      'pinned': 'left',
      'sort': null,
      'sortIndex': null,
      'aggFunc': null,
      'rowGroup': false,
      'rowGroupIndex': null,
      'pivot': false,
      'pivotIndex': null,
      'flex': 1
    },
    {
      'colId': 'telephone',
      'width': 220,
      'hide': false,
      'pinned': null,
      'sort': null,
      'sortIndex': null,
      'aggFunc': null,
      'rowGroup': false,
      'rowGroupIndex': null,
      'pivot': false,
      'pivotIndex': null,
      'flex': 1
    },
    {
      'colId': 'location',
      'width': 219.46000000000004,
      'hide': false,
      'pinned': null,
      'sort': null,
      'sortIndex': null,
      'aggFunc': null,
      'rowGroup': false,
      'rowGroupIndex': null,
      'pivot': false,
      'pivotIndex': null,
      'flex': 1
    }
  ];
  private filterState: any = {
    'location': {
      'values': [
        'Plovdiv'
      ],
      'filterType': 'set'
    }
  };

  public ngOnInit() {
    // Trying to imitate an api call so that we apply rowData after the response
    setTimeout(() => {
      this.generateData();
    }, 500);
  }

  public onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
  }

  public generateData(): void {
    for (let i = 0; i < this.dataLength; i += 1) {
      let name = '';
      for (let j = 0; j < 5; j += 1) {
        const letter = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
        name += j === 0 ? letter.toUpperCase() : letter;
      }
      const locationIndex = Math.floor(Math.random() * this.locations.length);
      const telephoneIndex = Math.floor(Math.random() * this.telephones.length);
      const age = Math.floor(Math.random() * 80);
      this.rowData = [
        ...this.rowData,
        {
          name,
          location: this.locations[locationIndex],
          age,
          telephone: this.telephones[telephoneIndex]
        }
      ]
    }
  }

  public applyGridState(): void {
    this.gridApi?.setFilterModel(this.filterState);
    this.columnApi?.applyColumnState({ state: this.columnState, applyOrder: true });

    this.gridApi?.onFilterChanged();
  }
}
