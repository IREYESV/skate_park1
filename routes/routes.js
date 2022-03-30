const express = require('express')
const { get_users, update, get_user, set_auth } = require('../db.js');
const router = express.Router()

// Rutas internas
function protected_routes (req, res, next) {

}

router.get('/', protected_routes, async(req, res) => {
    const user = req.session.user;
    const users = await get_users();
    res.render('index.html', { user, users })
});

router.get('/datos', protected_routes, async(req, res) => {
    const user = req.session.user;
    res.render('datos.html', { user });

})

router.post('/datos', protected_routes, async(req, res) => {
//recogemos los valores del formulario
    const email = req.session.user.email;
    const name = req.body.name;
    const password = req.body.password;
    const password_confirm = req.body.password_confirm;
    const anos_experiencia = req.body.anos_experiencia;
    const especialidad = req.body.especialidad;


})
router.get('/admin', async(req, res) => {
    const user = req.session.user;
    const users = await get_users();
    res.render('admin.html', { user, users });
});

    module.exports = router
