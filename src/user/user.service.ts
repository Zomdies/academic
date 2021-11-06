import { Injectable, Logger, OnApplicationBootstrap } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { UserEntity } from "src/database/entities"

@Injectable()
export class UserService {

    private readonly _logger = new Logger(UserService.name)

    constructor(
        @InjectRepository(UserEntity)
        private readonly _userRepository: Repository<UserEntity>
    ) { }
}