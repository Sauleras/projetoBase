import { usersService } from "../services/usersService.js";
import { HTTP_STATUS_CODES } from "../utils/httpStatusCodes.js"

const getAll = async (request, response) => {
    try {
        const users = await usersService.getAll(); // Chama o serviço para obter os usuários
        return response.status(HTTP_STATUS_CODES.OK).json(users); // Envia a resposta com os usuários
    } catch (error) {
        return response.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({ error });
    }
};

const getById = async (id) => {
    // Lógica para pegar usuário por ID
};

// Exporta um objeto com todas as funções
const usersController = {
    getAll,
    getById,
};

export { usersController };