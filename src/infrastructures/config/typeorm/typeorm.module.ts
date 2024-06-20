import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { EnvironmentConfigService } from "../environment-config/environment-config.service";
import { Module } from "@nestjs/common";
import { EnvironmentConfigModule } from "../environment-config/environment-config.module";

export const getTypeOrmModuleOptions = ( config: EnvironmentConfigService ): TypeOrmModuleOptions =>
    ({
        type: config.getDatabaseType(),
        host: config.getDatabaseHost(),
        port: config.getDatabasePort(),
        username: config.getDatabaseUser(),
        password: config.getDatabasePassword(),
        database: config.getDatabaseName(),
        entities: [__dirname + './../../**/*.entity{.ts,.js}'],
        autoLoadEntities: true,
        synchronize: false,
        migrationsRun: true,
        migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
        cli: {
            migrationsDir: 'src/migrations',
        },
    } as TypeOrmModuleOptions);
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [EnvironmentConfigModule],
            inject: [EnvironmentConfigService],
            useFactory: getTypeOrmModuleOptions,
        }),
    ],
})
export class TypeOrmConfigModule {}