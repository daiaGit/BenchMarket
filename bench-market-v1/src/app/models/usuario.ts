export class Usuario {
	constructor(
		public usuario_id?: number,
		public tipo_usuario_id?: number,
		public status_id?: string,
		public usuario_senha?:string,
    public usuario_login?: string,
    public usuario_data_cadastro?: Date,
    public email_id?: number,
    public usuario_data_cancelamento?: Date){}
}
