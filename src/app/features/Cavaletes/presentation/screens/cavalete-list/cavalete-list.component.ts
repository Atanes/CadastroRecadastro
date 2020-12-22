import { FetchCavaletes, SetCavalete } from './../../store/cavalete.actions';
import { ICavaleteEntity } from './../../../domain/entities/cavalete.entity';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Store } from '@ngxs/store';
import { CavaletesState } from '../../store/cavalete.states';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CavaleteFormComponent } from '../cavalete-form/cavalete-form.component';

@Component({
  selector: 'cad-rec-app-cavalete-list',
  templateUrl: './cavalete-list.component.html',
  styleUrls: ['./cavalete-list.component.scss']
})
export class CavaleteListComponent implements OnInit {

  cavaletes: ICavaleteEntity[];
  selectedCavalete: ICavaleteEntity;

  // *** CALL ACTION FetchCavaletes with Dispatch
  cavaletesStore = this._store.dispatch(FetchCavaletes);

  // *** Create a Store Selector to later subscribe to the Store State
  cavaleteStoreSelector = this._store.select(CavaletesState.getState);


  // Public Variables
  cavaletesLoading: boolean = false;

  displayedColumns: string[] = ['id', 'tipocavalete', 'datacadastro', 'dataatualizacao', 'acoes'];
  dataSource = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('input') input!: ElementRef;


  constructor(
    //private service: CavaleteService,
    public matDialog: MatDialog,
    private _store: Store,
  ) { }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "600px";
    dialogConfig.width = "800px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(CavaleteFormComponent, dialogConfig);
  }

  ngOnInit() {
    /*
    this.service.getCavaletes().subscribe( result => {
      console.log(result);
      this.cavaletes = result.cavaletes;
    });
    */

    // *** Subscribe to LOAD CAVALETES LIST

    this.cavaleteStoreSelector.subscribe((data: any) => {

      console.log("data.loading: ", data.loading);

      this.cavaletesLoading = data.loading;

      this.cavaletes = data.cavaletes;

      this.dataSource = new MatTableDataSource<ICavaleteEntity>(this.cavaletes);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });

  }

  selectCavalete(cavalete: ICavaleteEntity): void {
    this.selectedCavalete = cavalete;
  }

  /**
   * On cavalete selected
   *
   * @param cavalete
   */
  onCavaleteSelected(cavalete: ICavaleteEntity): void {
    this._store.dispatch(new SetCavalete(cavalete));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public doFilter = (event: KeyboardEvent) => {
    const target = event.target as HTMLInputElement;
    this.dataSource.filter = target!.value.trim().toLocaleLowerCase();
  }

}
