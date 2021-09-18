const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define('empleado', {
    codigo_empleado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_empleado: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  });
};