import { typeDocument } from '../data/data';

const documents: typeDocument[] = [];

export function searchDocument(nome: string): typeDocument | undefined {

    return documents.find((document) => document.nome === nome);

}
