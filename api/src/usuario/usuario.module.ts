import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioService, PrismaService],
    imports: [],
})
export class UsuarioModule {}
