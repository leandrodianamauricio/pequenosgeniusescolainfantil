import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Defina essa variável no painel do Vercel
const client = new MongoClient(uri);

export default async function handler(req, res) {
  await client.connect();
  const db = client.db('pequenosgenius'); // nome do banco (pode ser qualquer nome)
  const collection = db.collection('usuarios');

  if (req.method === 'GET') {
    const usuarios = await collection.find().toArray();
    res.status(200).json(usuarios);
  } else if (req.method === 'POST') {
    const { login, senha, pagina } = req.body;
    if (!login || !senha || !pagina) {
      res.status(400).json({ message: 'Dados incompletos' });
      return;
    }
    await collection.insertOne({ login, senha, pagina });
    res.status(201).json({ message: 'Usuário cadastrado!' });
  } else {
    res.status(405).end();
  }
}