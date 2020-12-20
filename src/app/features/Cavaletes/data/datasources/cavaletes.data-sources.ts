import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cavalete } from "../models/cavalete";

const CAVALETES = [
    new Cavalete({
        id: 1,
        tipocavalete: 'Galvanizado',
        datacadastro: new Date(),
        dataatualizacao: new Date()
    }),

    new Cavalete({
        id: 2,
        tipocavalete: 'Metalico',
        datacadastro: new Date(),
        dataatualizacao: new Date()
    }),

    new Cavalete({
        id: 3,
        tipocavalete: 'Aluminio',
        datacadastro: new Date(),
        dataatualizacao: new Date()
    }),

    new Cavalete({
        id: 4,
        tipocavalete: 'PVC',
        datacadastro: new Date(),
        dataatualizacao: new Date()
    }),
];

export abstract class CavaleteDataSource {
    abstract getAllCavaletes(search_query: string): Observable<{ cavaletes: Cavalete[] }>;
}

@Injectable()
export class CavaletesDataSourceImpl extends CavaleteDataSource {
    private readonly PARTNER_URL = 'partner';

    constructor(
        //private _connectorService: HttpConnectorService,
    ) {
        super();
    }

    getAllCavaletes(search_query: string): Observable<{ cavaletes: Cavalete[] }> {

        return new Observable((subscriber) => {
            setTimeout(() => {
                subscriber.next({ cavaletes: CAVALETES });
                subscriber.complete();
            }, 3000);
        });
    }
}
