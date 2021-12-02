import {Entity, model, property, hasOne} from '@loopback/repository';
import {Solicitud} from './solicitud.model';
import {Codeudor} from './codeudor.model';

@model()
export class Contrato extends Entity {
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
  FechaContrato: string;

  @property({
    type: 'boolean',
    required: true,
  })
  Estado: boolean;

  @property({
    type: 'date',
    required: true,
  })
  FechaEntrega: string;

  @property({
    type: 'number',
    required: true,
  })
  Canon: number;

  @hasOne(() => Solicitud)
  solicitud: Solicitud;

  @property({
    type: 'string',
  })
  solicitudId?: string;

  @hasOne(() => Codeudor)
  codeudor: Codeudor;

  constructor(data?: Partial<Contrato>) {
    super(data);
  }
}

export interface ContratoRelations {
  // describe navigational properties here
}

export type ContratoWithRelations = Contrato & ContratoRelations;
