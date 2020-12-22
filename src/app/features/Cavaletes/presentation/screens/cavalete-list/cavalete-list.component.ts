import { FetchCavaletes, SetCavalete } from './../../store/cavalete.actions';
import { ICavaleteEntity } from './../../../domain/entities/cavalete.entity';
import { Component, OnInit } from '@angular/core';

import { Store } from '@ngxs/store';
import { CavaletesState } from '../../store/cavalete.states';

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


  constructor(
    //private service: CavaleteService,
    private _store: Store,
  ) { }

  ngOnInit() {
    /*
    this.service.getCavaletes().subscribe( result => {
      console.log(result);
      this.cavaletes = result.cavaletes;
    });
    */

    // *** Subscribe to LOAD PARTNERS LIST

    this.cavaleteStoreSelector.subscribe( (data:any) => {

      console.log("data.loading: ", data.loading);

      this.cavaletesLoading = data.loading;

      this.cavaletes = data.cavaletes;

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
  onCavaleteSelected(cavalete: ICavaleteEntity): void
  {
      this._store.dispatch(new SetCavalete(cavalete));
  }

}
