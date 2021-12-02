import {Entity, model, property, belongsTo, hasOne} from '@loopback/repository';
import {Asesor} from './asesor.model';
import {Inmueble} from './inmueble.model';
import {Contrato} from './contrato.model';

@model()
export class Solicitud extends Entity {
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
  FechaSolicitud: string;

  @property({
    type: 'string',
    required: true,
  })
  Estado: string;

  @property({
    type: 'string',
  })
  ComentariosAsesor?: string;

  @belongsTo(() => Asesor)
  asesorId: string;

  @belongsTo(() => Inmueble)
  inmuebleId: string;

  @property({
    type: 'string',
  })
  clienteId?: string;

  @property({
    type: 'string',
  })
  contratoId?: string;

  @hasOne(() => Contrato)
  contrato: Contrato;

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
