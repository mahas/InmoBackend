import {Entity, model, property} from '@loopback/repository';

@model()
export class Codeudor extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'date',
    required: true,
  })
  FechaCodeudor: string;

  @property({
    type: 'string',
    required: true,
  })
  NombresCodeudor: string;

  @property({
    type: 'string',
    required: true,
  })
  ApellidosCodeudor: string;

  @property({
    type: 'string',
    required: true,
  })
  DirCodeudor: string;

  @property({
    type: 'string',
    required: true,
  })
  TelCodeudor: string;

  @property({
    type: 'string',
    required: true,
  })
  CelularCodeudor: string;

  @property({
    type: 'string',
    required: true,
  })
  EmailCodeudor: string;

  @property({
    type: 'string',
    required: true,
  })
  EstadoCodeudor: string;

  @property({
    type: 'string',
    required: true,
  })
  CartaLaboral: string;


  constructor(data?: Partial<Codeudor>) {
    super(data);
  }
}

export interface CodeudorRelations {
  // describe navigational properties here
}

export type CodeudorWithRelations = Codeudor & CodeudorRelations;
