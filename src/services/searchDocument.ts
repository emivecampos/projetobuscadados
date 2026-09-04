import { documents } from "../data/data.js"
import { typeDocument } from "../modules/typeDocument";

export function searchDocument(numeroDocumento: string): typeDocument | undefined {

    return documents.find((document) => document.numeroDocumento === numeroDocumento);

}

