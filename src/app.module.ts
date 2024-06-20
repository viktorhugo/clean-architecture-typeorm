import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructures/config/environment-config/environment-config.module';
import { TypeOrmConfigModule } from './infrastructures/config/typeorm/typeorm.module';
import { UserModule } from './presentations/user/user.module';
import { UsecaseProxyModule } from './infrastructures/usecase-proxy/usecase-proxy.module';

@Module({
  imports: [
    EnvironmentConfigModule,
    UserModule,
    UsecaseProxyModule.register()
  ],
})
export class AppModule {}
