import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CavaleteFormComponent } from './features/Cavaletes/presentation/screens/cavalete-form/cavalete-form.component';
import { CavaleteListComponent } from './features/Cavaletes/presentation/screens/cavalete-list/cavalete-list.component';

const routes: Routes = [{ path: 'cavaletes', component: CavaleteListComponent },
{ path: 'cavalete', component: CavaleteFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
