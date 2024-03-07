const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmppaidschool', {
    dRef: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    dName: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmppaidschool',
    timestamps: false,
    indexes: [
      {
        name: "dRef",
        using: "BTREE",
        fields: [
          { name: "dRef" },
        ]
      },
      {
        name: "dName",
        using: "BTREE",
        fields: [
          { name: "dName" },
        ]
      },
    ]
  });
};
