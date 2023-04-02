import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersRepository } from "./auth.repository";
import { AuthDto } from "./dto/user.dto";
import { User } from "./user.entity";
import { DriverPackageNotInstalledError } from "typeorm";

@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name);

    constructor(
       @InjectRepository(User)
        private readonly usersRepository: UsersRepository
    ){}

    async signup(authCredentialDto:AuthDto): Promise<User>
    {
        const {username, password} = authCredentialDto;
        const user:User = this.usersRepository.create({
            username : username,
            password : password
        });

        await this.usersRepository.save(user);
        return user;
    }

    async signIn(authCredentialDto: AuthDto): Promise<User>{
       // this.logger.log(`${authCredentialDto.username} `+ `${authCredentialDto.password}`);
        const {username, password } = authCredentialDto;
        const user = await this.usersRepository.findOne({
            where: {
              username,
            },
        });
        if(user.password==(password)){
            return user;
        }else{
            return null;
        }      
    }
}