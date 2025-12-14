import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService) {}

    login() {
        return "I'm signed in from auth service";
    }

    signup() {
        return "I'm signed up from auth service";
    }
}
