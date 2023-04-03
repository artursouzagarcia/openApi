import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from '../prisma.service';
import { Usuario, Prisma } from '@prisma/client';

@Injectable()
export class UsuarioService {
    create(createUsuarioDto: CreateUsuarioDto) {
        return 'This action adds a new usuario';
    }

    findAll() {
        return `This action returns all usuario`;
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
