const app = require('./app');
const db = require('./models');

db.sequelize.sync().then(() => {
    app.listen(3000, err => {
        if (err)
            throw new Error(err);
        console.error('Server is Running');
    })
}).catch(err => {
    throw new Error(err);
});