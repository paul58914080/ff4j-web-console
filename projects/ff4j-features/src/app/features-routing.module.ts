import { NgModule } from '@angular/core';
import { FeaturesComponent } from './features.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: '', component: FeaturesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
