import { ICavaleteEntity } from "../../domain/entities/cavalete.entity";

  
  let nextId = 1;
  
  export class Cavalete implements ICavaleteEntity {
  
    id: number;
    tipocavalete: string;
    datacadastro: Date;
    dataatualizacao: Date;
  
    constructor(cavalete: any
      ) {
        this.id = nextId++;
        this.tipocavalete = (cavalete && cavalete.tipocavalete) || null;
        this.datacadastro = new Date() || null;
        this.dataatualizacao = new Date() || null;
      }
  }