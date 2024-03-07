const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmpschoollist', {
    idSchoolList: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    slLastUpdate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    slGeoName: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "eg 10,3 or 28"
    },
    slSchool: {
      type: DataTypes.STRING(3),
      allowNull: false,
      comment: "3 letter school ref"
    },
    slName: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    slType: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    slClosed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "school closed echo - master closed flag"
    },
    slStatusOpen: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    slGeo1: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    slGeo2: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    slGeo3: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    slGeo3Abbrv: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    slYearsEnr: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "years  with enrolment"
    },
    slAttLatest: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "last date attendance reported"
    },
    slAttBoys: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    slAttGirls: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    slFormsTot: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "total # forms in school"
    },
    slFormsRpt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "total # reported"
    },
    slEnrBoys: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    slEnrGirls: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    slTeachers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "# teachers"
    },
    slStatusSch: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "school affected status text - eg occupied"
    },
    slStatusTch: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "teachers affected status text"
    },
    slStatusPupil: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "pupils affected status text"
    },
    slStatusNote: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "free text status notes"
    },
    slStatusWho: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "who reported status"
    },
    slStatusWhen: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "when"
    },
    slGeo1ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "link to altGeo"
    },
    slGeo2ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "link to altGeo"
    },
    slGeo3ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "link to altGeo"
    },
    slParentRef: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    slParentName: {
      type: DataTypes.STRING(64),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmpschoollist',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idSchoolList" },
        ]
      },
      {
        name: "slGeoName",
        using: "BTREE",
        fields: [
          { name: "slGeoName" },
          { name: "slSchool" },
        ]
      },
      {
        name: "slSchool",
        using: "BTREE",
        fields: [
          { name: "slSchool" },
        ]
      },
      {
        name: "slType",
        using: "BTREE",
        fields: [
          { name: "slType" },
        ]
      },
    ]
  });
};
