export type Usuario = {
    id: number;
    email: string;
    nome: string | null;
};

/**
 * Model Paciente
 *
 */
export type Paciente = {
    id: number;
    email: string;
    cpf: string;
    nome: string;
    idade: Date;
    celular: string;
};

/**
 * Model Agendamento
 *
 */
export type Agendamento = {
    id: number;
    descricao: string | null;
    vinculadoAId: number;
    autorId: number;
    inicio: Date;
    final: Date;
    criadoEm: Date;
    statusId: number;
    chegada: Date | null;
    saiu: Date | null;
    procedimentoId: number | null;
};

/**
 * Model Status
 *
 */
export type Status = {
    id: number;
    nome: string;
};

/**
 * Model Procedimento
 *
 */
export type Procedimento = {
    id: number;
    nome: string;
    valor: number;
};
