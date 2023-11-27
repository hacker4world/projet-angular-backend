import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {GamestoreDbDataSource} from '../datasources';
import {Jeu, JeuRelations} from '../models';

export class JeuRepository extends DefaultCrudRepository<
  Jeu,
  typeof Jeu.prototype.id_jeu,
  JeuRelations
> {
  constructor(
    @inject('datasources.gamestore_db') dataSource: GamestoreDbDataSource,
  ) {
    super(Jeu, dataSource);
  }
}
