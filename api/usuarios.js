// api/usuarios.js
export default function handler(req, res) {
  // Exemplo de lista de usuários (em produção, use banco de dados)
  const usuarios = [
    { login: 'aluno1', senha: '1234', pagina: 'agendas/A000001.html' },
    { login: 'aluno2', senha: 'abcd', pagina: 'agendas/A000002.html' }
  ];

  if (req.method === 'GET') {
    res.status(200).json(usuarios);
  } else if (req.method === 'POST') {
    // Para cadastrar novo usuário (exemplo simples)
    const { login, senha, pagina } = req.body;
    // Aqui você deveria salvar em banco de dados ou arquivo
    res.status(201).json({ message: 'Usuário cadastrado (apenas exemplo, não persiste)' });
  } else {
    res.status(405).end();
  }
}