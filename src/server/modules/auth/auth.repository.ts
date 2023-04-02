import { Injectable, Logger } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { AuthDto } from "./dto/user.dto";
import { User } from "./user.entity";

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
    private readonly logger = new Logger(UsersRepository.name);

   async createUser(authCredentialsDto:AuthDto): Promise<User>{
        
        const {username, password} = authCredentialsDto;

        const user:User = this.create({
            username : username,
            password : password
        });

        await this.save(user);
        return user;
    }    
}