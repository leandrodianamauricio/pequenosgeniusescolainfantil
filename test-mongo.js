const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://leokara:<db_le101498**>@cluster0.tpyusk1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
            
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log('✅ Conectado ao MongoDB Atlas com sucesso!');

    const db = client.db('meu_banco');
    const colecao = db.collection('usuarios');

    const resultado = await colecao.insertOne({ nome: 'Leandro', idade: 30 });
    console.log('📝 Documento inserido:', resultado.insertedId);
  } catch (err) {
    console.error('❌ Erro ao conectar:', err);
  } finally {
    await client.close();
  }
}

run();