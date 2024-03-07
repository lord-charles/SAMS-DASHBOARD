const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('daftmphris', {
    hRef: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    hName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    hID: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'daftmphris',
    timestamps: false
  });
};
