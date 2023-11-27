import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {GamestoreDbDataSource} from '../datasources';
import {Panier, PanierRelations} from '../models';

export class PanierRepository extends DefaultCrudRepository<
  Panier,
  typeof Panier.prototype.id,
  PanierRelations
> {
  constructor(
    @inject('datasources.gamestore_db') dataSource: GamestoreDbDataSource,
  ) {
    super(Panier, dataSource);
  }
}
