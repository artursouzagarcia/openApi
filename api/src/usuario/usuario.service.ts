import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from '../prisma.service';
import { Usuario, Prisma } from '@prisma/client';
import { FindAllUsuarioDto } from './dto/findAll-usuario.dto';

@Injectable()
export class UsuarioService {
    constructor(private prisma: PrismaService) {}

    create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
        return this.prisma.usuario.create({
            data: createUsuarioDto,
        });
    }

    findAll(params: FindAllUsuarioDto) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.usuario.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    findOne(id: number) {
        return `This action returns a #${id} usuario`;
    }

    update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
        return `This action updates a #${id} usuario`;
    }

    remove(id: number) {
        return `This action removes a #${id} usuario`;
    }
}
