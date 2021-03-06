import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'pguser',
  password: 'pgpassword',
  database: 'mailsender_db',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
