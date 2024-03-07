const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblsbrttmp', {
    year: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tranche: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    month: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    edu: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    enr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    att: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    state_28: {
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
    paidby: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payResp: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblsbrttmp',
    timestamps: false
  });
};
