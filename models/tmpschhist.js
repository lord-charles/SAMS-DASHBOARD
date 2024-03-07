const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmpschhist', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    shSchool: {
      type: DataTypes.STRING(12),
      allowNull: false,
      comment: "school sRef"
    },
    shDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "date "
    },
    shP1M: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "primary 1 male enrol"
    },
    shP1F: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "primary year 1 female"
    },
    shP2F: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "primary year 2 female"
    },
    shP3F: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "primary year 3 female"
    },
    shP4F: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "primary year 4 female"
    },
    shP5F: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "primary year 5 female"
    },
    shP6F: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "primary year 6 female"
    },
    shP7F: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "primary year 7 female"
    },
    shP8F: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "primary year 8 female"
    },
    shP2M: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "primary year 2 male"
    },
    shP3M: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "primary year 3 male"
    },
    shP4M: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "primary year 4 male"
    },
    shP5M: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "primary year 5 male"
    },
    shP6M: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "primary year 6 male"
    },
    shP7M: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "primary year 7 male"
    },
    shP8M: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "primary year 8 male"
    },
    shPMO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "primary other years male"
    },
    shPFO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "primary other years female"
    },
    shPTF: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "primary all years female"
    },
    shPTM: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "primary all years male"
    },
    shTOTP: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "primary all years"
    },
    shS1F: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "secondary year 1 female"
    },
    shS2F: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "secondary year 2 female"
    },
    shS3F: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "secondary year 3 female"
    },
    shS4F: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "secondary year 4 female"
    },
    shSMO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "secondary other years male"
    },
    shSFO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "secondary other years female"
    },
    shSTF: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "secondary all years female"
    },
    shSTM: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "secondary all years male"
    },
    shTOTS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "secondary all years"
    },
    shOTHRM: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "other school types male"
    },
    shOTHRF: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "other school types female"
    },
    shTOTO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "other school types total"
    },
    shTOTAL: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "total"
    },
    shS1M: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "secondary year 1 male"
    },
    shS2M: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "secondary year 2 male"
    },
    shS3M: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "secondary year 3 male"
    },
    shS4M: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "secondary year 4 male"
    },
    shTOT_AES: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    shTOT_ALP: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    shTOT_ECD: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    shTOT_NUR: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    shPRE_TF: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    shPRE_TM: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    shTOT_PRE: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    shTTI_TF: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    shTTI_TM: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    shTOT_TTI: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    shTVET_TF: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    shTVET_TM: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    shTOT_TVET: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    shTOT_UNI: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tmpschhist',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "shSchool",
        using: "BTREE",
        fields: [
          { name: "shSchool" },
          { name: "shDate" },
        ]
      },
    ]
  });
};
