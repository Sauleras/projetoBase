import { app } from './app.js';
import dotenv from 'dotenv';

// Inicializa o banco de dados
import './models/initializeDatabase.js'; // Ajuste o caminho conforme necessário

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Acessa a variável de ambiente diretamente de process.env
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));