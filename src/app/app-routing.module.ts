import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'features',
    loadChildren: () => import('../../projects/ff4j-features/src/app/features.module').then((m) => m.FeaturesModule),
  },
  {
    path: 'properties',
    loadChildren: () => import('../../projects/ff4j-properties/src/app/properties.module').then((m) => m.PropertiesModule),
  },
  {
    path: 'dashboards',
    loadChildren: () => import('../../projects/ff4j-dashboards/src/app/dashboard.module').then((m) => m.DashboardModule),
  },
  { path: '', redirectTo: '/features', pathMatch: 'full' },
  { path: '**', redirectTo: 'features' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
