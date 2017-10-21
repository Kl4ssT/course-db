module.exports = (sequelize, DataTypes) => {
    const Connections = sequelize.define('connections', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        connection_string: {
            type: DataTypes.STRING,
            allowNull: true
        },
        structure: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Connections;
}