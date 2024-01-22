import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmallCardComponent } from './components/small-card/small-card.component';

const routes: Routes = [
  { component: SmallCardComponent, path: 'smallCard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
