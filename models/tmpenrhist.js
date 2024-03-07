const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmpenrhist', {
    ehEnrolment: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "link to idEnrolment, primary key"
    },
    ehSchool: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "link to idSchool"
    },
    ehPrev: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "link to 'previous' idEnrolment"
    },
    ehMatchType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0-no match, 1-asid match,2-name match,3-manual match"
    },
    ehLinkType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0-edit,1-promotion,2-renew tr,3- new entry"
    },
    ehPayam: {
      type: DataTypes.STRING(12),
      allowNull: true,
      comment: "non 3nf but quick"
    },
    ehFYear: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ehAYear: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tmpenrhist',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ehEnrolment" },
        ]
      },
      {
        name: "ehSchool",
        using: "BTREE",
        fields: [
          { name: "ehSchool" },
          { name: "ehPrev" },
        ]
      },
      {
        name: "ehPayam",
        using: "BTREE",
        fields: [
          { name: "ehPayam" },
        ]
      },
    ]
  });
};
