export class EstabelecimentoTelefone {
	constructor(
		public telefone_id?: number,
    public estabelecimento_id?: number,
    public estabelecimento_cnpj?: string,
    public estabelecimento_telefone_setor?: string
  ){}
}
