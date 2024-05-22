export class Celular {
  constructor(
    public id?: number | null,
    public marca?: string | null,
    public serial?: string | null,
    public fechaCompra?: Date | null,
    public anoLanzamiento?: number | null,
    public precio?: number | null,
    public sistemaOperativo?: string | null,
    public gama?: string | null
  ) {}
}
