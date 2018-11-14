import {Component, OnInit} from '@angular/core';
import {IPaginationInfo, PaginatorService} from '../../services/paginator.service';
import {GridApi} from 'ag-grid-community';

@Component({
    selector: 'ff4j-paginator',
    templateUrl: './paginator.component.html'
})
export class PaginatorComponent implements OnInit {

    pageSize: number;
    totalItems: number;
    gridApi: GridApi;

    constructor(private paginatorService: PaginatorService) {
    }

    ngOnInit() {
        this.paginatorService.changes.subscribe((paginationInfo: IPaginationInfo) => {
            this.gridApi = paginationInfo.gridApi;
            this.pageSize = paginationInfo.pageSize;
            this.totalItems = paginationInfo.totalItems;
        });
    }

    onPageChange(event) {
        this.gridApi.paginationGoToPage(event.pageIndex);
    }
}
