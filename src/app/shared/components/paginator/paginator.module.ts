import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginatorComponent} from './paginator.component';
import {MatPaginatorModule} from '@angular/material';
import {PaginatorService} from '../../services/paginator.service';

@NgModule({
    imports: [
        CommonModule,
        MatPaginatorModule
    ],
    declarations: [PaginatorComponent],
    exports: [PaginatorComponent],
    providers: [PaginatorService]
})
export class PaginatorModule {
}
