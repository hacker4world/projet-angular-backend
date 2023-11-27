import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Avis} from '../models';
import {AvisRepository} from '../repositories';

export class AvisController {
  constructor(
    @repository(AvisRepository)
    public avisRepository : AvisRepository,
  ) {}

  @post('/avis')
  @response(200, {
    description: 'Avis model instance',
    content: {'application/json': {schema: getModelSchemaRef(Avis)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Avis, {
            title: 'NewAvis',
            exclude: ['id_avis'],
          }),
        },
      },
    })
    avis: Omit<Avis, 'id_avis'>,
  ): Promise<Avis> {
    return this.avisRepository.create(avis);
  }

  @get('/avis/count')
  @response(200, {
    description: 'Avis model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Avis) where?: Where<Avis>,
  ): Promise<Count> {
    return this.avisRepository.count(where);
  }

  @get('/avis')
  @response(200, {
    description: 'Array of Avis model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Avis, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Avis) filter?: Filter<Avis>,
  ): Promise<Avis[]> {
    return this.avisRepository.find(filter);
  }

  @patch('/avis')
  @response(200, {
    description: 'Avis PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Avis, {partial: true}),
        },
      },
    })
    avis: Avis,
    @param.where(Avis) where?: Where<Avis>,
  ): Promise<Count> {
    return this.avisRepository.updateAll(avis, where);
  }

  @get('/avis/{id}')
  @response(200, {
    description: 'Avis model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Avis, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Avis, {exclude: 'where'}) filter?: FilterExcludingWhere<Avis>
  ): Promise<Avis> {
    return this.avisRepository.findById(id, filter);
  }

  @patch('/avis/{id}')
  @response(204, {
    description: 'Avis PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Avis, {partial: true}),
        },
      },
    })
    avis: Avis,
  ): Promise<void> {
    await this.avisRepository.updateById(id, avis);
  }

  @put('/avis/{id}')
  @response(204, {
    description: 'Avis PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() avis: Avis,
  ): Promise<void> {
    await this.avisRepository.replaceById(id, avis);
  }

  @del('/avis/{id}')
  @response(204, {
    description: 'Avis DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.avisRepository.deleteById(id);
  }
}
