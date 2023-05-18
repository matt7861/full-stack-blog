import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "etaKsirhC!48#",
  database: "blog",
});
