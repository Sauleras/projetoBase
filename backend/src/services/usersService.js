import { connection } from '../models/connection.js';
import { querys } from '../models/userquerys/querys.js';

const getAll = async () => {
    const [rows] = await connection.execute(querys.getAll);
    return rows; // Retorna as linhas dos resultados
};

const getById = async (id) => {
    // Lógica para pegar usuário por ID
};

// Exporta um objeto com todas as funções
const usersService = {
    getAll,
    getById,
};

export { usersService} ;