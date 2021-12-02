import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Administrador} from './administrador.model';
import {Solicitud} from './solicitud.model';
import {Inmueble} from './inmueble.model';

@model()
export class Asesor extends Entity {
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
  NombreAsesor: string;

  @property({
    type: 'string',
    required: true,
  })
  ApellidosAsesor: string;

  @property({
    type: 'string',
    required: true,
  })
  DirAsesor: string;

  @property({
    type: 'string',
    required: true,
  })
  TelAsesor: string;

  @property({
    type: 'string',
    required: true,
  })
  CelularAsesor: string;

  @property({
    type: 'string',
    required: true,
  })
  EmailAsesor: string;

  @property({
    type: 'string',
    required: true,
  })
  EstadoAsesor: string;

  @property({
    type: 'string',
    default: 'asesor',
  })
  Rol?: string;

  @property({
    type: 'string',
    required: false,
  })
  clave: string;

  @belongsTo(() => Administrador)
  administradorId: string;

  @hasMany(() => Solicitud)
  solicitudes: Solicitud[];

  @hasMany(() => Inmueble)
  inmuebles: Inmueble[];

  constructor(data?: Partial<Asesor>) {
    super(data);
  }
}

export interface AsesorRelations {
  // describe navigational properties here
}

export type AsesorWithRelations = Asesor & AsesorRelations;
