import { createConnection } from "typeorm";
import getOrmConfig from "./ormConfig";

export const connectToDb = async (): Promise<void> => {
  try {
    const dbConfiguration = getOrmConfig();
    const connection = await createConnection(dbConfiguration);
    await connection.runMigrations();
  } catch (e) {
    console.log("Error while connection to the database", e);
  }
};
