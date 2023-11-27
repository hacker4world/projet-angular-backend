import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {GamestoreDbDataSource} from '../datasources';
import {Commande, CommandeRelations} from '../models';

export class CommandeRepository extends DefaultCrudRepository<
  Commande,
  typeof Commande.prototype.id_commande,
  CommandeRelations
> {
  constructor(
    @inject('datasources.gamestore_db') dataSource: GamestoreDbDataSource,
  ) {
    super(Commande, dataSource);
  }
}
