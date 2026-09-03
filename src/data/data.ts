import { typeDocument } from "../modules/typeDocument";
import { typeCpf } from "../modules/typeCpf";
import { typeJuridic } from "../modules/typeJuridic";

export const documents: typeDocument[] = [

    new typeCpf(
        "João da Silva",
        3000,
        false,
        0,
        false,
        0,
        11987654321,
        "joao.silva@email.com",
        "Rua das Flores, 123",
        13456789012
    ),
    new typeJuridic(
        "Empresa Tecnologia X",
        5000,
        true,
        2,
        true,
        1,
        11987654321,
        "contato@empresaxyz.com",
        "Avenida Centro, 456",
        12345678901234,
        10,
        "Quadro Societário"
    ),
    new typeCpf(
        "Maria Oliveira",
        4000,
        true,
        1,
        false,
        0,
        11987654321,
        "maria.oliveira@email.com",
        "Rua das Orquideas, 456",
        12345678901
    )
    new typeJuridic(
        "Empresa Construções Modernas LTDA",
        8000,
        true,
        3,
        true,
        2,
        11987654321,
        "contato@empresaconstrucoes.com",
        "Avenida Centro, 456",
        12345678901234,
        10,
        "Quadro Societário"
    ),
    new typeCpf(
        "Ana Souza",
        3500,
        false,
        0,
        false,
        0,
        11987654321,
        "ana.souza@email.com",
        "Rua das Palmeiras, 789",
        12345678901
    ),
    new typeJuridic(
        "ABC Comércio e Serviços LTDA",
        6000,
        true,
        1,
        false,
        0,
        11987654321,
        "contato@abccomercio.com",
        "Avenida Centro, 456",
        12345678901234,
        10,
        "Quadro Societário"
    )


]