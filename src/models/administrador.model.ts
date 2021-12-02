import {Entity, model, property, hasMany} from '@loopback/repository';
import {Asesor} from './asesor.model';

@model()
export class Administrador extends Entity {
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
  FechaAdmin: string;

  @property({
    type: 'string',
    required: true,
  })
  NombresAdmin: string;

  @property({
    type: 'string',
    required: true,
  })
  ApellidosAdmin: string;

  @property({
    type: 'string',
    required: true,
  })
  DirAdmin: string;

  @property({
    type: 'string',
    required: true,
  })
  TelAdmin: string;

  @property({
    type: 'string',
    required: true,
  })
  CelularAdmin: string;

  @property({
    type: 'string',
    required: true,
  })
  EmailAdmin: string;
  @property({
    type: 'string',
    default: 'admin',
  })
  Rol?: string;

  @property({
    type: 'string',
    required: false,
  })
  clave: string;

  @hasMany(() => Asesor)
  asesores: Asesor[];

  constructor(data?: Partial<Administrador>) {
    super(data);
  }
}

export interface AdministradorRelations {
  // describe navigational properties here
}

export type AdministradorWithRelations = Administrador & AdministradorRelations;
