import { documents } from "../data/data";
import { typeDocument } from "../modules/typeDocument";

export function searchDocument(numeroDocumento: number): typeDocument | undefined {
    
    return documents.find((document) => document.numeroDocumento === numeroDocumento);

}