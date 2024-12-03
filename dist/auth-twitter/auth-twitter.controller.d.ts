import { AuthService } from '../auth/auth.service';
import { AuthTwitterService } from './auth-twitter.service';
import { AuthTwitterLoginDto } from './dto/auth-twitter-login.dto';
import { LoginResponseDto } from '../auth/dto/login-response.dto';
export declare class AuthTwitterController {
    private readonly authService;
    private readonly authTwitterService;
    constructor(authService: AuthService, authTwitterService: AuthTwitterService);
    login(loginDto: AuthTwitterLoginDto): Promise<LoginResponseDto>;
}
