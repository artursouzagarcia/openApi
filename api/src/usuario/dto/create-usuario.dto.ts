import { Prisma } from '@prisma/client';

export class CreateUsuarioDto {
    email: string;
    nome?: string | null;
    agendamentos?: Prisma.AgendamentoCreateNestedManyWithoutAutorInput;
}
