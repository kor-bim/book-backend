import { Logger, Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { ConfigModule } from '@nestjs/config'
import { PostgresqlModule } from '@app/database'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/auth/.env.dev'
    }),
    PostgresqlModule
  ],
  controllers: [AuthController],
  providers: [Logger, AuthService]
})
export class AuthModule {}
