const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblschstatushist', {
    ssID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "history index"
    },
    ssRef: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    ssRptDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    ssOpen: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "fixed status at input open, temp closed, partially open etc."
    },
    ssReason: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ssStaff: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "fixed status of staffing"
    },
    ssPupils: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "fixed status of pupil attendance"
    },
    ssPupilReason: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "reason for pupil change"
    },
    ssNotes: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "free text notes"
    },
    ssUID: {
      type: DataTypes.STRING(12),
      allowNull: false,
      comment: "reported by\/ uploaded by user uRef"
    },
    ssUserName: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "non 3rd normal form- for speed reporting"
    },
    ssCapGrantT1_2016: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    ssCapGrantT2_2016: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    ssFile: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "filename for original report"
    },
    ssLastPay: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "last month teachers' paid"
    },
    ssLastIncentive: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "date of last incentive"
    },
    ssTeachers: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "number of active teachers"
    },
    ssLastVisit: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblschstatushist',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ssID" },
        ]
      },
      {
        name: "ssRef",
        using: "BTREE",
        fields: [
          { name: "ssRef" },
          { name: "ssOpen" },
        ]
      },
      {
        name: "ssRef_2",
        using: "BTREE",
        fields: [
          { name: "ssRef" },
        ]
      },
      {
        name: "ssRptDate",
        using: "BTREE",
        fields: [
          { name: "ssRptDate" },
        ]
      },
    ]
  });
};
