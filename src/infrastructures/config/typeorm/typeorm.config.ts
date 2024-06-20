import { DataSource } from "typeorm";

const config = new DataSource({
    type: process.env.DATABASE_TYPE as any,
    host: process.env.DATABASE_HOST,
    port: 32768,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [__dirname + './../../**/*.entity{.ts,.js}'],
    synchronize: true,
    schema: process.env.DATABASE_SCHEMA,
    migrationsRun: true,
    migrations: ['database/migrations/**/*{.ts,.js}'],
});

config
    .initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((err) => {
        console.error('Error during Data Source initialization', err);
    });

console.log(config);

export default config;