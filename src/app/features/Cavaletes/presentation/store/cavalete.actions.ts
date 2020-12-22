import { ICavaleteEntity } from './../../domain/entities/cavalete.entity';
import { CavaletesStateModel } from './cavalete.states';

export class SetCavalete{
    public static readonly type = '[Cavalete] Set selected cavalete';
    constructor(public payload: ICavaleteEntity){}
}

export class GetCavalete{
    public static readonly type = '[Cavalete] Get One cavalete';
    constructor(public payload: string){}
}

export class FetchCavaletes{
    public static readonly type = '[Cavalete] Fetch cavaletes list';
    constructor(public search_query: any){}
}

export class FetchCavaletesSuccess{
    static readonly type = '[Cavalete] Fetch cavaletes Success';
    constructor(public payload: CavaletesStateModel){}
}

export class FetchCavaletesFail{
    static readonly type = '[Cavalete] Fetch cavaletes Fail';
    constructor(public error: any){}
}