const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblctsmsreport', {
    idSMSReport: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "primary auto number index"
    },
    ctSch: {
      type: DataTypes.STRING(12),
      allowNull: false,
      comment: "school ref"
    },
    ctSchId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "school id at time of report"
    },
    ctNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "number girls receiving CT"
    },
    ctDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    ctPhone: {
      type: DataTypes.STRING(24),
      allowNull: false,
      comment: "phone number making report"
    },
    ctUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "user ID logged in to phone"
    },
    ctYear: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tblctsmsreport',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idSMSReport" },
        ]
      },
      {
        name: "ctSch",
        using: "BTREE",
        fields: [
          { name: "ctSch" },
          { name: "ctSchId" },
          { name: "ctDate" },
        ]
      },
    ]
  });
};
