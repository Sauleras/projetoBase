// Definição das queries
const getAll = 'SELECT * FROM users';
const getById = 'SELECT * FROM users WHERE id = ?';
const createUser = 'INSERT INTO users (name, email) VALUES (?, ?)';
const updateUser = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
const deleteUser = 'DELETE FROM users WHERE id = ?';

// Exporta todas as queries dentro de um objeto
const querys = {
    getAll,
    getById,
    createUser,
    updateUser,
    deleteUser,
};

export { querys };