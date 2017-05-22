export class Estabelecimento {
	constructor(
		public estabelecimento_id?: number,
    public estabelecimento_cnpj?: string,
    public estabelecimento_razao_social?: string,
    public endereco_id?: number,
    public estabelecimento_nome_fantasia?: string,
    public estabelecimento_inscricao_estadual?: string,
    public estabelecimento_inscricao_municipal?: string,
    public tipo_estabelecimento_id?: number
  ){}
}
