export class Celular {
    id?: number;
    marca: string;
    serial: string;
    fechaCompra: Date;
    anoLanzamiento: number;
    precio: number;
    sistemaOperativo: string;
    gama: string;

    constructor(
        marca: string,
        serial: string,
        fechaCompra: Date,
        anoLanzamiento: number,
        precio: number,
        sistemaOperativo: string,
        gama: string,
        id?: number
    ) {
        this.id = id;
        this.marca = marca;
        this.serial = serial;
        this.fechaCompra = fechaCompra;
        this.anoLanzamiento = anoLanzamiento;
        this.precio = precio;
        this.sistemaOperativo = sistemaOperativo;
        this.gama = gama;
    }
}
