export interface Funcionario{
    id?: number;
    nome: string;
    apelido: string;
    departamento: string;
    ativo: boolean;
    turno: string
    dataCriacao?: string;
    dataAlteracao?: string;
}