import { SetCavalete, FetchCavaletes, FetchCavaletesSuccess, FetchCavaletesFail } from './cavalete.actions';
import { CavaleteService } from './../../cavalete.service';
import { Injectable } from '@angular/core';
import { ICavaleteEntity } from './../../domain/entities/cavalete.entity';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { catchError } from 'rxjs/internal/operators/catchError';

export interface CavaletesStateModel {
    cavaletes: ICavaleteEntity[];
    selectedCavaletes: ICavaleteEntity;
    error: any,
    loading: boolean
}

@State<CavaletesStateModel>({
    name: 'cavaletes',
    defaults: {
        cavaletes: [],
        selectedCavaletes: null,
        error: null,
        loading: false,
    }
})

@Injectable()
export class CavaletesState {
    constructor(
        private _cavaletesService: CavaleteService,
    ) { }

    @Selector()
    public static getState(state: CavaletesStateModel) {
        return state;
    }

    @Selector()
    public static getCavaleteSelected(state: CavaletesStateModel) {
        return state.selectedCavaletes;
    }

    @Action(SetCavalete)
    public SetCavalete(ctx: StateContext<CavaletesStateModel>, { payload }: SetCavalete) {
        ctx.setState({ ...ctx.getState(), selectedCavaletes: payload });
    }

    @Action(FetchCavaletes)
    public fetchCavaletes(ctx: StateContext<CavaletesStateModel>, { search_query }: any) {
        ctx.patchState({
            loading: true
        });

        return this._cavaletesService.getCavaletes(search_query).subscribe((data: any) => {
            return ctx.dispatch(new FetchCavaletesSuccess(data));
        }),
            catchError(error => {
                return ctx.dispatch(new FetchCavaletesFail(error));
            });
    }

    @Action(FetchCavaletesSuccess)
    fetchCavaletesSuccess(
        ctx: StateContext<CavaletesStateModel>,
        { payload }: FetchCavaletesSuccess) {
        console.log("payload: ", payload);

        ctx.setState({
            cavaletes: payload.cavaletes,
            selectedCavaletes: null,
            loading: false,
            error: null
        });
    }

    @Action(FetchCavaletesFail)
    fetchCavaletesFail(
        ctx: StateContext<CavaletesStateModel>,
        { error }: FetchCavaletesFail) {
        ctx.setState({
            cavaletes: null,
            selectedCavaletes: null,
            loading: false,
            error
        });
    }

}