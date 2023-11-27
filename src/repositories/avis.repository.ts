import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {GamestoreDbDataSource} from '../datasources';
import {Avis, AvisRelations} from '../models';

export class AvisRepository extends DefaultCrudRepository<
  Avis,
  typeof Avis.prototype.id_avis,
  AvisRelations
> {
  constructor(
    @inject('datasources.gamestore_db') dataSource: GamestoreDbDataSource,
  ) {
    super(Avis, dataSource);
  }
}
