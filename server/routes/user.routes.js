
const UserController = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');
module.exports = app =>{
    app.get('/api', UserController.index);
    app.post("/api/register", UserController.register);
    app.post("/api/login", UserController.login);
    app.get('/api/logout', authenticate ,UserController.logout);
    // app.post('/api/user', UserController.createUser);
    app.get('/api/user', authenticate, UserController.getAllUsers);
    app.get('/api/user/:id', UserController.getUser);
    app.put('/api/user/:id', UserController.updateUser);
    app.delete('/api/user/:id', UserController.deleteUser);

}
