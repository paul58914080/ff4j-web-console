import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent, PaginatorService } from './index';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [CommonModule, MatPaginatorModule],
  declarations: [PaginatorComponent],
  exports: [PaginatorComponent],
  providers: [PaginatorService],
})
export class PaginatorModule {}
