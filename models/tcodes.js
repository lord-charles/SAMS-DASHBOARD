const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcodes', {
    idtCodes: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cRef: {
      type: DataTypes.STRING(12),
      allowNull: false,
      comment: "unique 12 character ref",
      unique: "cRef_UNIQUE"
    },
    cType: {
      type: DataTypes.STRING(1),
      allowNull: false,
      comment: "type of ref, sch, form etc"
    },
    cLink: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "link into other table"
    }
  }, {
    sequelize,
    tableName: 'tcodes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idtCodes" },
        ]
      },
      {
        name: "cRef_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cRef" },
        ]
      },
    ]
  });
};
