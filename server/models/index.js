const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const config = require('../config.json');

const sequelize = new Sequelize(config.database, config.username, config.password, config);
const db = {};

fs
    .readdirSync(__dirname)
    .filter(file => (file.indexOf('.') !== 0) && (file != path.basename(module.filename)))
    .forEach(file => {
        const model = sequelize.import(path.join(__dirname, file));

        db[model.name] = model; 
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;