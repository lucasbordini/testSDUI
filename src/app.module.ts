import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HomeModule } from './core/modules/home.module';
import { ConfigModule } from '@nestjs/config';
import { TransferModule } from './core/modules/transfer.module';
import { RedisModule } from './core/modules/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    RedisModule,
    HomeModule,
    TransferModule,
    
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
