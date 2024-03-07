const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tpayam_1028', {
    idPayam: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pyName: {
      type: DataTypes.STRING(24),
      allowNull: false
    },
    pyEMISNo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pyCounty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "link to tCounties"
    },
    pyActive: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pyHardToReach: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "0 = near city centre, 1 = hard to reach"
    },
    pyIs28StateModel: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: "is 28 state model add on 1 dec 16"
    }
  }, {
    sequelize,
    tableName: 'tpayam_1028',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idPayam" },
        ]
      },
      {
        name: "pyCounty",
        using: "BTREE",
        fields: [
          { name: "pyCounty" },
        ]
      },
    ]
  });
};
