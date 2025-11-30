import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    login() {}

    signup() {return "I'm signed up from auth service"}
}