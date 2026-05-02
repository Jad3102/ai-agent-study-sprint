import express from 'express'
import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())

const { Pool } = pg

const pool = new Pool({
  user: 'postgres',
  password: 'jad310250',
  host: 'localhost',
  port: 5432,
  database: 'estudos',
  ssl: false,
  password_encryption: 'scram-sha-256'
})
console.log('senha:', process.env.DB_PASSWORD);
console.log('user:', process.env.DB_USER);
//pra buscar users (GET)
app.get('/usuarios', async (req, res) => {
  const resultado = await pool.query('SELECT * FROM usuarios')
  res.json(resultado.rows)
})

//pra cadastrar users
app.post('/usuarios', async (req, res) => {
  const { nome, email } = req.body
  const resultado = await pool.query(
    'INSERT INTO usuarios (nome, email) VALUES ($1, $2) RETURNING *',
    [nome, email]
  )
  res.json(resultado.rows[0])
})

//pra atualizar users
app.put('/usuarios/:id', async (req, res) => {
  const { id } = req.params
  const { nome, email } = req.body
  const resultado = await pool.query(
    'UPDATE usuarios SET nome=$1, email=$2 WHERE id=$3 RETURNING *',
    [nome, email, id]
  )
  res.json(resultado.rows[0])
})

//pra deletar users
app.delete('/usuarios/:id', async (req, res) => {
  const { id } = req.params
  await pool.query('DELETE FROM usuarios WHERE id=$1', [id])
  res.json({ mensagem: 'usuário deletado com sucesso' })
})

app.listen(3000, () => {
  console.log('API rodando na porta 3000')
})