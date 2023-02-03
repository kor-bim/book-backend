import { Logger, Module } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) =>
        ({
          type: 'postgres',
          host: config.get<string>('POSTGRESQL_HOST'),
          port: config.get<number>('POSTGRESQL_PORT_MASTER'),
          username: config.get<string>('POSTGRESQL_USERNAME'),
          password: config.get<string>('POSTGRESQL_PASSWORD'),
          database: config.get<string>('POSTGRESQL_DATABASE_1'),
          synchronize: config.get<string>('POSTGRESQL_SYNCHRONIZE'),
          entities: [__dirname + '/../../**/*.entity.{js,ts}'],
          logging: true
        } as TypeOrmModuleAsyncOptions),
      inject: [ConfigService]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) =>
        ({
          type: 'postgres',
          host: config.get<string>('POSTGRESQL_HOST'),
          port: config.get<number>('POSTGRESQL_PORT_SLAVE'),
          username: config.get<string>('POSTGRESQL_USERNAME'),
          password: config.get<string>('POSTGRESQL_PASSWORD'),
          database: config.get<string>('POSTGRESQL_DATABASE_1'),
          synchronize: config.get<string>('POSTGRESQL_SYNCHRONIZE'),
          entities: [__dirname + '/../../**/*.entity.{js,ts}'],
          logging: true
        } as TypeOrmModuleAsyncOptions),
      inject: [ConfigService]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) =>
        ({
          type: 'postgres',
          host: config.get<string>('POSTGRESQL_HOST'),
          port: config.get<string>('POSTGRESQL_PORT_MASTER'),
          username: config.get<string>('POSTGRESQL_USERNAME'),
          password: config.get<string>('POSTGRESQL_PASSWORD'),
          database: config.get<string>('POSTGRESQL_DATABASE_2'),
          synchronize: config.get<string>('POSTGRESQL_SYNCHRONIZE'),
          entities: [__dirname + '/../../**/*.entity.{js,ts}'],
          logging: true
        } as TypeOrmModuleAsyncOptions),
      inject: [ConfigService]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) =>
        ({
          type: 'postgres',
          host: config.get<string>('POSTGRESQL_HOST'),
          port: config.get<string>('POSTGRESQL_PORT_SLAVE'),
          username: config.get<string>('POSTGRESQL_USERNAME'),
          password: config.get<string>('POSTGRESQL_PASSWORD'),
          database: config.get<string>('POSTGRESQL_DATABASE_2'),
          synchronize: config.get<string>('POSTGRESQL_SYNCHRONIZE'),
          entities: [__dirname + '/../../**/*.entity.{js,ts}'],
          logging: true
        } as TypeOrmModuleAsyncOptions),
      inject: [ConfigService]
    })
  ]
})
export class PostgresqlModule {}
