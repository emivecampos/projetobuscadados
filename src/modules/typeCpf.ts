import { typeDocument } from './typeDocument';

export class typeCpf extends typeDocument {

    constructor(

        public nome: string,
        public renda: number,
        public dividasAtivas: boolean,
        public quantidadeDividasAtivas: number,
        public protestosAtivos: boolean,
        public quantidadeProtestosAtivos: number,
        public telefone: number,
        public email: string,
        public endereco: string,
        public numeroDocumento: number,

    ) 
    {
        super(nome, renda, dividasAtivas, quantidadeDividasAtivas, protestosAtivos, quantidadeProtestosAtivos, telefone, email, endereco, numeroDocumento);
    }












}
