import { Body, Controller, Logger, Post, Req, Res, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/user.dto";
import { User } from "./user.entity";
import { Response } from 'express';

@Controller()
export class AuthController {
    private readonly logger = new Logger(AuthController.name);
    constructor(private authService: AuthService){}

    @Post('/signup')
    signup(@Body() authCredentialsDto:AuthDto, @Req() req:Request, @Body('password') pass:string):Promise<User>{
        const user = this.authService.signup(authCredentialsDto);
        return user;      
    }

    @Post('/login')
    async signIn(@Body() authCredentialsDto: AuthDto, @Res() res: Response) {
      this.logger.log(`${authCredentialsDto.username} + ${authCredentialsDto.password}`);
      const user = await this.authService.signIn(authCredentialsDto);
  
      if (!user) {
        throw new UnauthorizedException();
      }
      
      res.status(200).json(user);
    }
}