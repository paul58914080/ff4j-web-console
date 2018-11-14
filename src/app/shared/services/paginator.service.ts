import {Injectable} from '@angular/core';
import {GridApi} from 'ag-grid-community';
import {BehaviorSubject} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';

export interface IPaginationInfo {
    pageSize: number;
    totalItems: number;
    gridApi: GridApi;
}

@Injectable({
    providedIn: 'root'
})
export class PaginatorService {

    paginationReady: BehaviorSubject<IPaginationInfo> = new BehaviorSubject({
        pageSize: 0,
        totalItems: 0,
        gridApi: null
    });
    changes = this.paginationReady.asObservable().pipe(distinctUntilChanged());

    constructor() {
    }
    setPaginationInfo(paginationInfo) {
        this.paginationReady.next(paginationInfo);
    }
}
