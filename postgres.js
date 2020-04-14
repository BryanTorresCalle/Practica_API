//Importamos la dependecia de postgres
const { Pool } = require("pg");

class ServicePG {
  constructor() {
    this.pool = new Pool({
      user: "postgres",
      host: "localhost",
      database: "WebSites",
      password: "0123",
      port: 5432
    });
}
/**
 * Se ejecuta una consulta sql, se debe hacer con un metodo
 * asincrono ya que el orden de ejecucion es relevante
 * @param {*} sql la consulta a ejecutar
 */
  async executeSQL(sql) {
    let res = await this.pool.query(sql);
    return res;
  }
}
//Se exporta la clase para que pueda ser usada en todo el proyecto
module.exports = ServicePG;
