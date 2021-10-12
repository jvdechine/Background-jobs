import { Job } from 'bull'
import sql, { config } from 'mssql'

import Product from '../classes/Product'

const sqlConfig: config = {
    user: process.env.SQLSERVER_USER,
    password: process.env.SQLSERVER_PASS,
    database: process.env.SQLSERVER_DB,
    server: process.env.SQLSERVER_HOST ?? "localhost",
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

export default {
    key: "ProductToSQLServer",
    async handle(product: Job<Product>) {
        try {
            // make sure that any items are correctly URL encoded in the connection string
            await sql.connect(sqlConfig)
            await sql.query`insert into Produto values (${product.data.name}, ${product.data.value}, ${product.data.date})`
            product.progress(100);
        } catch (err: any) {
            product.moveToFailed(err.toString())
        }
    }
}