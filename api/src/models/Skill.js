const { Sequelize,DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define('skill', {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  });
};