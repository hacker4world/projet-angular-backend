import {Entity, model, property} from '@loopback/repository';

@model()
export class Jeu extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_jeu?: number;

  @property({
    type: 'string',
    required: true,
  })
  nom: string;

  @property({
    type: 'number',
    required: true,
  })
  prix: number;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  image_carte: string;

  @property({
    type: 'string',
    required: true,
  })
  image_une: string;

  @property({
    type: 'string',
    required: true,
  })
  image_deux: string;

  @property({
    type: 'string',
    required: true,
  })
  image_trois: string;


  constructor(data?: Partial<Jeu>) {
    super(data);
  }
}

export interface JeuRelations {
  // describe navigational properties here
}

export type JeuWithRelations = Jeu & JeuRelations;
