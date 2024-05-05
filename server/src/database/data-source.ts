import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './database/database.sqlite',
  // port: 5432,
  // username: 'test',
  // password: 'test',
  synchronize: true,
  // logging: true,
  entities: ['./src/models/*.ts'],
  // subscribers: [],
  migrations: ['./src/database/migrations/*.ts'],
})

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err)
  })
