import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Asesor} from './asesor.model';
import {Solicitud} from './solicitud.model';
import {Ciudad} from './ciudad.model';

@model()
export class Inmueble extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  FechaRegistro: string;

  @property({
    type: 'string',
    required: true,
  })
  TipoInmueble: string;

  @property({
    type: 'string',
    required: true,
  })
  TipoOferta: string;

  @property({
    type: 'string',
  })
  NombreInmueble?: string;

  @property({
    type: 'string',
    required: true,
  })
  Descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  DirInmueble: string;

  @property({
    type: 'number',
    required: true,
  })
  ValorInmueble: number;

  @property({
    type: 'number',
  })
  ComisionVenta?: number;

  @property({
    type: 'number',
  })
  ComisionArriendo?: number;

  @property({
    type: 'string',
    required: true,
  })
  Propietario: string;

  @property({
    type: 'string',
    required: true,
  })
  DirPropietario: string;

  @property({
    type: 'string',
    required: true,
  })
  TelPropietario: string;

  @property({
    type: 'string',
    required: true,
  })
  EmailPropietario: string;

  @property({
    type: 'string',
    required: true,
  })
  FotoInmueble: string;

  @property({
    type: 'string',
  })
  EnlaceYoutubeInmueble?: string;

  @property({
    type: 'string',
    required: true,
  })
  EstadoInmueble: string;

  @belongsTo(() => Asesor)
  asesorId: string;

  @hasMany(() => Solicitud)
  solicitudes: Solicitud[];

  @belongsTo(() => Ciudad)
  ciudadId: string;

  constructor(data?: Partial<Inmueble>) {
    super(data);
  }
}

export interface InmuebleRelations {
  // describe navigational properties here
}

export type InmuebleWithRelations = Inmueble & InmuebleRelations;
