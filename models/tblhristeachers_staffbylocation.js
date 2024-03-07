const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblhristeachers_staffbylocation', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    county: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payam: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    staffid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    altname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    role: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    roletype: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    based: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    natid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mda: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    facility: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    schoolCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    teacherCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sn: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblhristeachers_staffbylocation',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idx" },
        ]
      },
    ]
  });
};
