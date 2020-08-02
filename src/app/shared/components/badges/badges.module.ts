import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesComponent } from './badges.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [BadgesComponent],
  exports: [BadgesComponent],
  imports: [CommonModule, MatChipsModule],
})
export class BadgesModule {}
