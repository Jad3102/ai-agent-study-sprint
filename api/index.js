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

//Pra conectar com o Redis

import { createClient } from 'redis'

const redis = createClient()
redis.on('error', err => console.log('Redis error:', err))
await redis.connect()
console.log('Redis conectado!')

//pra buscar users (GET)
app.get('/usuarios', async (req, res) => {
  const cache = await redis.get('usuarios');

  //verifica se já existe no cache
  if (cache) {
    console.log('retornando do cache!')
    return res.json(JSON.parse(cache))
  }
  //se não existe, ele salva durante 30s
  const resultado = await pool.query('SELECT * FROM usuarios')
  await redis.set('usuarios', JSON.stringify(resultado.rows), { EX: 30 })

  //avisa se vem do banco
  console.log('retornando do banco!')
  res.json(resultado.rows)
})

//pra cadastrar users
app.post('/usuarios', async (req, res) => {
  const { nome, email } = req.body
  const resultado = await pool.query(
    'INSERT INTO usuarios (nome, email) VALUES ($1, $2) RETURNING *',
    [nome, email]
  )

  // limpa o cache pra forçar nova consulta no banco
  await redis.del('usuarios')
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
// limpa o cache
  await redis.del('usuarios')

app.listen(3000, () => {
  console.log('API rodando na porta 3000')
})