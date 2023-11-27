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
import {Jeu} from '../models';
import {JeuRepository} from '../repositories';

export class JeuController {
  constructor(
    @repository(JeuRepository)
    public jeuRepository : JeuRepository,
  ) {}

  @post('/jeux')
  @response(200, {
    description: 'Jeu model instance',
    content: {'application/json': {schema: getModelSchemaRef(Jeu)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Jeu, {
            title: 'NewJeu',
            exclude: ['id_jeu'],
          }),
        },
      },
    })
    jeu: Omit<Jeu, 'id_jeu'>,
  ): Promise<Jeu> {
    return this.jeuRepository.create(jeu);
  }

  @get('/jeux/count')
  @response(200, {
    description: 'Jeu model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Jeu) where?: Where<Jeu>,
  ): Promise<Count> {
    return this.jeuRepository.count(where);
  }

  @get('/jeux')
  @response(200, {
    description: 'Array of Jeu model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Jeu, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Jeu) filter?: Filter<Jeu>,
  ): Promise<Jeu[]> {
    return this.jeuRepository.find(filter);
  }

  @patch('/jeux')
  @response(200, {
    description: 'Jeu PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Jeu, {partial: true}),
        },
      },
    })
    jeu: Jeu,
    @param.where(Jeu) where?: Where<Jeu>,
  ): Promise<Count> {
    return this.jeuRepository.updateAll(jeu, where);
  }

  @get('/jeux/{id}')
  @response(200, {
    description: 'Jeu model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Jeu, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Jeu, {exclude: 'where'}) filter?: FilterExcludingWhere<Jeu>
  ): Promise<Jeu> {
    return this.jeuRepository.findById(id, filter);
  }

  @patch('/jeux/{id}')
  @response(204, {
    description: 'Jeu PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Jeu, {partial: true}),
        },
      },
    })
    jeu: Jeu,
  ): Promise<void> {
    await this.jeuRepository.updateById(id, jeu);
  }

  @put('/jeux/{id}')
  @response(204, {
    description: 'Jeu PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() jeu: Jeu,
  ): Promise<void> {
    await this.jeuRepository.replaceById(id, jeu);
  }

  @del('/jeux/{id}')
  @response(204, {
    description: 'Jeu DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.jeuRepository.deleteById(id);
  }
}
