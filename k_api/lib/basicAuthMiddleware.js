const auth = require('basic-auth');

module.exports = (req, res, next) => {
    const user = auth(req);

    //buscar en la base de datos el user.name
    // si lo encuentro, verifico la password (user.pass)

    if(!user || user.name !== 'admin' || user.pass !== '1234') {
        res.set('WWW-Authenticate', 'Basic realm=Authorization required')
        res.sendStatus(401);
        return;
    }

    next();
};