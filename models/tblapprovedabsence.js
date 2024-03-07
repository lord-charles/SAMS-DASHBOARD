const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblapprovedabsence', {
    aaStudentID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    aaFrom: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    aaTo: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    aaReason: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    idApprovedAbsence: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    aaFrmID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tblapprovedabsence',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idApprovedAbsence" },
        ]
      },
      {
        name: "aaStudentID",
        using: "BTREE",
        fields: [
          { name: "aaStudentID" },
        ]
      },
    ]
  });
};
