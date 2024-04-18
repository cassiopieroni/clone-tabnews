import { Client } from 'pg';

async function query(queryObject) {
  const postmanConfig = {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    ssl: process.env.NODE_ENV === 'development' ? false : true,
  }

  const client = new Client(postmanConfig);
  console.info('Postman config data', postmanConfig)
 
  try {
    await client.connect();
    return await client.query(queryObject);
  } catch (error) {
    console.error('Error running query', error);
    throw error;
  } finally {
    await client.end();
  }
}

export default { query }