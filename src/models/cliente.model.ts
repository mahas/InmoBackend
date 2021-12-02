import {Entity, model, property, hasMany} from '@loopback/repository';
import {Solicitud} from './solicitud.model';

@model()
export class Cliente extends Entity {
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
  Fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  NombreCliente: string;

  @property({
    type: 'string',
    required: true,
  })
  ApellidosCliente: string;

  @property({
    type: 'string',
    required: true,
  })
  DirCliente: string;

  @property({
    type: 'string',
    required: true,
  })
  TelCliente: string;

  @property({
    type: 'string',
    required: true,
  })
  CelularCliente: string;

  @property({
    type: 'string',
    required: true,
  })
  EmailCliente: string;

  @property({
    type: 'string',
    required: true,
  })
  EstadoCliente: string;

  @property({
    type: 'string',
    default: 'cliente',
  })
  Rol?: string;

  @property({
    type: 'string',
  })
  Clave?: string;

  @hasMany(() => Solicitud)
  solicitudes: Solicitud[];

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
