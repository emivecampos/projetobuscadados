import { typeDocument } from "../modules/typeDocument";
import { typeCpf } from "../modules/typeCpf";
import { typeJuridic } from "../modules/typeJuridic";

export const documents: typeDocument[] = [

    new typeCpf(
        "Maria Lourdes",
        2500,
        true,
        4,
        false,
        0,
        "(48) 98643-2552",
        "maria.lourdes@email.com",
        "Vila Velha, Rua Horto - 118",
        "457.779.145-80"
    ),

    new typeJuridic(
        "Loja dois Irmãos",
        15000,
        true,
        2,
        true,
        1,
        "(48) 98888-8888",
        "loja.dois.irmaos@email.com",
        "Centro, Rua Principal - 100",
        "12.345.678/0001-90",
        8,
        "Sócios: João Silva, Maria Silva e Pedro Neto"
    ),

    new typeCpf(
        "Lucas Santana",
        3500,
        false,
        0,
        false,
        0,
        "(48) 98765-4321",
        "lucas.santana@email.com",
        "Jardim Botânico, Rua das Flores - 50",
        "123.456.789-00"
    ),

    new typeJuridic(
        "Artefatos Ltda",
        85000,
        true,
        3,
        false,
        0,
        "(48) 99999-9999",
        "artefatos.ltda@email.com",
        "Bairro Novo, Rua Comercial - 200",
        "98.765.432/0001-00",
        15,
        "Sócios: Ana Paula, Carlos Roberto e Daniela Mendes"
    ),

    new typeCpf(
        "Fernanda Oliveira",
        4200,
        true,
        1,
        false,
        0,
        "(48) 98765-1234",
        "fernanda.oliveira@email.com",
        "Centro, Rua Principal - 100",
        "987.654.321-00"
    ),
    new typeJuridic(
        "Tech Solutions Inc",
        1200000,
        false,
        0,
        false,
        0,
        "(48) 98765-4321",
        "tech.solutions@email.com",
        "Centro, Rua Comercial - 300",
        "12.345.678/0001-90",
        20,
        "Sócios: Ana Paula, Carlos Roberto e Daniela Mendes"
    ),
    new typeCpf(
        "Carlos Mendes",
        3000,
        true,
        2,
        true,
        1,
        "(48) 98765-4321",
        "carlos.mendes@email.com",
        "Vila Nova, Rua das Palmeiras - 150",
        "334.564.789-67"
    ),
    new typeJuridic(
        "Restaurante Sabor & Cia",
        50000,
        true,
        1,
        false,
        0,
        "(48) 98765-4321",
        "restaurante.sabor.cia@email.com",
        "Centro, Rua Comercial - 200",
        "12.345.678/0001-90",
        15,
        "Sócios: Ana Paula, Carlos Roberto e Daniela Mendes"
    ),
    new typeCpf(
        "Ana Paula",
        4000,
        true,
        1,
        false,
        0,
        "(48) 98765-4321",
        "ana.paula@email.com",
        "Mendes Costa, Rua Principal - 100",
        "334.787.789-10"
    ),
    new typeJuridic(
        "MM Engenharia Ltda",
        200000,
        false,
        0,
        false,
        0,
        "(48) 98765-4321",
        "mm.engenharia@email.com",
        "Centro, Rua Comercial - 300",
        "12.345.678/0001-90",
        20,
        "Sócios: Maria Paula, Carlos Ruiz e Daniela Mendes"
    )

]