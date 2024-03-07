const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblschdropout', {
    idDOHist: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doSchool: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    doYear: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    doName: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: "Pupil Name"
    },
    doFcode: {
      type: DataTypes.STRING(12),
      allowNull: false,
      comment: "Form and short code"
    },
    doScode: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    doID: {
      type: DataTypes.STRING(12),
      allowNull: false,
      comment: "pupil ASID if known"
    },
    doDOB: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Pupil ID"
    },
    doGender: {
      type: DataTypes.STRING(2),
      allowNull: false,
      comment: "DOB"
    },
    doGname: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: "Guardian Name"
    },
    doEnrolled: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "(Not attending school ) a. enrolled at different school)"
    },
    doWanted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "b. Wanted to enroll but could not (eg because of cost)"
    },
    doMoved: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "c. Moved to a different area"
    },
    doDNcomplete: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "d. Did not complete previous school year"
    },
    doFailed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "e. Failed End of Year Exams"
    },
    doPregnant: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "f. Pregnant"
    },
    doSick: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "g. Sick"
    },
    doDead: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "h. Dead"
    },
    doSpecify: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: "i. Other Specify"
    },
    doReturn: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "(Actions school has taken ) a. Arranged meeting with pupil"
    },
    doContacted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "b. Contacted siblings"
    },
    doParents: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "c. Contacted parents\/guardian "
    },
    doHealthWorker: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "d. Contacted health worker"
    },
    doPolice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "e. Contacted police"
    },
    doOtherC: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: "f. Other (specify)"
    },
    doTS: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "report timestamp"
    },
    doDETool: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: "de tool user\/ machine string"
    },
    doSuperceded: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tblschdropout',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idDOHist" },
        ]
      },
      {
        name: "doSchool",
        using: "BTREE",
        fields: [
          { name: "doSchool" },
        ]
      },
      {
        name: "doID",
        using: "BTREE",
        fields: [
          { name: "doID" },
        ]
      },
    ]
  });
};
