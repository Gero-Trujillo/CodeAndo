// Importamos las librerías necesarias para conectarnos a la base de datos
import { createPool, Pool } from "mysql2/promise";

// Creamos una variable pool que almacenará la conexión a la base de datos
let pool: Pool;

// Intentamos conectarnos a la base de datos
(async () => {
  try {
    pool = createPool({
      host: "db",
      user: "root",
      password: "12345",
      database: "codeando",
      port: 3306,
    });
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to the database: ", error);
  }
})();

// Exportamos la variable pool para poder utilizarla en otros archivos
export { pool };
