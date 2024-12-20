import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shipment_update')
export class ShipmentUpdateEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    idSistema: number;

    @Column('varchar')
    masterVuelo: string;

    @Column('varchar')
    masterTransportista: string;

    @Column('varchar')
    masterNro: "369-92767496";

    @Column('int')
    masterFecha: number;

    @Column('int')
    nroManifiesto: number;

    @Column('int')
    viaTransporte: number;

    @Column('int')
    fechaArribo: number;

    @Column('float')
    pesoDeclarado: number;

    @Column('varchar')
    locacionEmbarque: string;

    @Column('varchar')
    locacionDesembarque: string;

    @Column('varchar')
    locacionEntrega: string;

    @Column('varchar')
    locacionRecepcion: string;

    @Column('int')
    hawb: number;

    @Column('int')
    fechaIngreso: number;

    @Column('varchar')
    codigoBarra: string;

    @Column('varchar')
    destinatarioNombre: string;

    @Column('varchar')
    destinatarioDireccion: string;

    @Column('varchar')
    destinatarioCiudad: string;

    @Column('varchar')
    destinatarioPais: string;

    @Column('varchar')
    destinatarioTelefono: string;

    @Column('varchar')
    destinatarioEmail: string;

    @Column('varchar')
    destinatarioRut: string;

    @Column('varchar')
    contenido: string;

    @Column('float')
    valorUsd: number;

    @Column('float')
    pesoBruto: number;

    @Column('int')
    cantidad: number;

    @Column('varchar')
    estado: string;

    @Column('varchar')
    estadoCorto: string;

    @Column('float')
    flete: number;

    @Column('varchar')
    idExterno: string;

    @Column('varchar')
    bAGID: string;


}