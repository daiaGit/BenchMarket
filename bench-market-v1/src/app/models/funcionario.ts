export class Funcionario {
	constructor(
		public usuario_id?: number,
		public tipo_usuario_id?: number,
    public estabelecimento_id?: number,
    public funcionario_nome?: string,
		public funcionario_sobrenome?: string,
    public funcionario_cpf?: string,
    public funcionario_cargo?: string){}
}
