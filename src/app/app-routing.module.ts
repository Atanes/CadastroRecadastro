import { NgModule } from '@angular/core';
import { MsalGuard } from '@azure/msal-angular';
import { Routes, RouterModule } from '@angular/router';
import { CavaleteFormComponent } from './features/Cavaletes/presentation/screens/cavalete-form/cavalete-form.component';
import { CavaleteListComponent } from './features/Cavaletes/presentation/screens/cavalete-list/cavalete-list.component';

const routes: Routes = [
  { path: '', canActivate: [MsalGuard], redirectTo: 'cavaletes', pathMatch: 'full' },
  { path: 'cavaletes', canActivate: [MsalGuard], component: CavaleteListComponent },
  { path: 'cavalete', canActivate: [MsalGuard], component: CavaleteFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
