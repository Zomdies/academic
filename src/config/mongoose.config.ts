import {
    MongooseModuleAsyncOptions,
    MongooseModuleOptions,
} from '@nestjs/mongoose'
import { ConfigModule, ConfigService } from '@nestjs/config'

export const mongooseConfig: MongooseModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: (configService: ConfigService): MongooseModuleOptions => {
        const uri = configService.get<string>('MONGO_URI')
        if (uri == undefined) {
            throw new Error(
                "Environment variable 'MONGO_URI' cannot be undefined",
            )
        }

        return {
            uri,
        }
    },
    inject: [ConfigService],
}
