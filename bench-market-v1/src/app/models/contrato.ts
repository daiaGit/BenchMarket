export class Contrato {
	constructor(
		public contrato_id?: number,
    public estabelecimento_id?: number,
    public estabelecimento_cnpj?: string,
    public status_id?: number,
    public contrato_data_cadastro?: Date,
    public contrato_data_cancelamento?: Date,
    public contratante_id?: number
){}
}
