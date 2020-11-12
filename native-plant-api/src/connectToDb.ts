import { createConnection } from "typeorm";
import getOrmConfig from "./ormConfig";

export const connectToDb = async (): Promise<void> => {
  let dbConfiguration
  try {
    dbConfiguration = getOrmConfig();
    const connection = await createConnection(dbConfiguration);
    await connection.runMigrations();
  } catch (e) {
    console.log("dbConfiguration", dbConfiguration)
    console.log("Eerror while connection to the database", e);
  }
};
