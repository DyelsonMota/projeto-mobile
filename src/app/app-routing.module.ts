import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'sobre', loadChildren: () => import('./sobre/sobre.module').then(m => m.SobrePageModule) },
  { path: 'alerta', loadChildren: () => import('./alerta/alerta.module').then(m => m.AlertaPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
