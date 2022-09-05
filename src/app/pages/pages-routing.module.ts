import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LayoutComponent } from './layout/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'a',
        loadChildren: () => import('../features/feature-a/feature-a.module').then((m) => m.FeatureAModule)
      },
      {
        path: 'b',
        loadChildren: () => import('../features/feature-b/feature-b.module').then((m) => m.FeatureBModule)
      }
    ],
  },
  {
    path: '**',
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
