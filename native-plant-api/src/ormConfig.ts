import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

enum DB_TYPE {
  postgres = "postgres",
}
console.log('process.env.POSTGRES_PASSWORD', process.env.POSTGRES_PASSWORD)
function getOrmConfig(): PostgresConnectionOptions {
  const dbConfig = {
    type: DB_TYPE.postgres,
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '%Fdsa5pos',
    database: 'postgres',
    logging: true,
    cli: {
      entitiesDir: "src/entities",
      migrationsDir: "src/migration",
    },
    synchronize: false,
  };
  if (process.env.NODE_ENV === "production") {
    return {
      ...dbConfig,
      entities: [`${__dirname}/entities/*.js`],
      migrations: [`${__dirname}/migration/*.js`],
    };
  }
  return {
    ...dbConfig,
    entities: [`${__dirname}/entities/*.ts`],
    migrations: [`${__dirname}/migration/*.ts`],
  };
}

export default getOrmConfig;
