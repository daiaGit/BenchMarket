import { Usuario } from './usuario';

export class Consumidor {
	constructor(
		public usuario?: Usuario,
		public tipo_usuario_id?: number,
		public consumidor_nome?: string,
		public cosumidor_sobrenome?: string){}
}
