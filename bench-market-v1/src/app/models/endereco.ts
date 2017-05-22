export class Endereco {
	constructor(
		public endereco_id?: number,
    public endereco_rua?: string,
    public endereco_numero?: number,
    public endereco_complemento?: string,
    public endereco_bairro?: string,
    public endereco_cep?: string,
    public estado_id?: number,
    public cidade_id?: number
  ){}
}
