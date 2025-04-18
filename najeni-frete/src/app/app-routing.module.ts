import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NajeniFreteComponent } from './main-page/najeni-frete/najeni-frete.component';

const routes: Routes = [
  { path: '**', redirectTo: 'app' },
  { path: 'app', component: NajeniFreteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
