import {Entity, model, property} from '@loopback/repository';

@model()
export class Avis extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_avis?: number;

  @property({
    type: 'number',
    required: true,
  })
  id_jeu: number;

  @property({
    type: 'string',
    required: true,
  })
  contenu: string;

  @property({
    type: 'string',
    required: true,
  })
  nom_utilisateur: string;


  constructor(data?: Partial<Avis>) {
    super(data);
  }
}

export interface AvisRelations {
  // describe navigational properties here
}

export type AvisWithRelations = Avis & AvisRelations;
