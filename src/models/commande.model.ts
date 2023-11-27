import {Entity, model, property} from '@loopback/repository';

@model()
export class Commande extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_commande?: number;

  @property({
    type: 'number',
    required: true,
  })
  prix_totale: number;

  @property({
    type: 'string',
    required: true,
  })
  num_tel: string;

  @property({
    type: 'string',
    required: true,
  })
  addresse: string;


  constructor(data?: Partial<Commande>) {
    super(data);
  }
}

export interface CommandeRelations {
  // describe navigational properties here
}

export type CommandeWithRelations = Commande & CommandeRelations;
