import express from 'express'
import pg from 'pg'

const app = express()
const port = 3000
const { Pool } = pg

app.use(exress.json())
app.use(exress.urlencoded({ extended: true }))


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Mahasiswa',
  password: 'jagungbakar7',
  port: 5432,
})

app.get('/', (req, res, next) => {
   console.log('test')
  pool.query('SELECT * FROM biodata') 
    .then(testData => {
      res.json(testData.rows)
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ error: 'Internal Server Error' })
    });

  })

app.listen(port, () => {
  console.log(`App jalan di port ${port}`)
})