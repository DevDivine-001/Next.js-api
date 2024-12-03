import { ConfigService } from '@nestjs/config';
import { SocialInterface } from '../social/interfaces/social.interface';
import { AuthFacebookLoginDto } from './dto/auth-facebook-login.dto';
import { AllConfigType } from '../config/config.type';
export declare class AuthFacebookService {
    private configService;
    constructor(configService: ConfigService<AllConfigType>);
    getProfileByToken(loginDto: AuthFacebookLoginDto): Promise<SocialInterface>;
}
