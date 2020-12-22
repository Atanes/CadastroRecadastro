import { CavaletesRepositoryImpl } from './features/Cavaletes/data/repositories/cavaletes.repository.impl';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CavaleteListComponent } from './features/Cavaletes/presentation/screens/cavalete-list/cavalete-list.component';
import { CavaleteFormComponent } from './features/Cavaletes/presentation/screens/cavalete-form/cavalete-form.component';
import { CavaletesState } from './features/Cavaletes/presentation/store/cavalete.states';
import { environment } from 'src/environments/environment';
import { CavaletesRepository } from './features/Cavaletes/domain/repositories/cavaletes.repository';
import { CavaleteDataSource, CavaletesDataSourceImpl } from './features/Cavaletes/data/datasources/cavaletes.data-sources';
import { CavaleteService } from './features/Cavaletes/cavalete.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { PaginatorBR } from './utils/paginatorBR';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CavaleteListComponent,
    CavaleteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([CavaletesState], {
      developmentMode: !environment.production
    }),

  ],
  providers: [
    CavaleteService,
    { provide: CavaletesRepository, useClass: CavaletesRepositoryImpl},
    { provide: CavaleteDataSource, useClass: CavaletesDataSourceImpl},
    MaterialModule, { provide: MatPaginatorIntl, useClass: PaginatorBR}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
