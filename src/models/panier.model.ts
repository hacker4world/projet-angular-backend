import {Entity, model, property} from '@loopback/repository';

@model()
export class Panier extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  id_jeu: number;

  @property({
    type: 'number',
    required: true,
  })
  prix: number;

  @property({
    type: 'number',
    required: true,
  })
  quantite: number;

  @property({
    type: 'string',
    required: true,
  })
  nom_jeu: string;


  constructor(data?: Partial<Panier>) {
    super(data);
  }
}

export interface PanierRelations {
  // describe navigational properties here
}

export type PanierWithRelations = Panier & PanierRelations;
