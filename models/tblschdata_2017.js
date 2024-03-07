const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblschdata_2017', {
    idSData: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sdRef: {
      type: DataTypes.STRING(12),
      allowNull: false,
      comment: "link to tblSchool",
      unique: "sdRef"
    },
    sdTerm1S: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    sdTerm1E: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    sdTerm2S: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    sdTerm2E: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    sdTerm3S: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    sdTerm3E: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    sdAMPM: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdCovViva: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdCovMTN: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdCovZain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdCovGemtel: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdCovOther: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdHead: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    sdHeadNo1: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    sdheadNo2: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    sdPTA: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    sdPTANo1: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    sdPTANo2: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    sdReporter: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    sdRptNo1: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    sdRptNo2: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    sdHeadGirl: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    sdHGNo1: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    sdPTABank: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdPTAAcc: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    sdPTAAccountName: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdPTABranch: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdRadio1: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    sdRadio2: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    sdRadio3: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    sdRadio4: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    sdBookDel: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdImportFile: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    sdImportDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    sdTimes: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    sdTypeCommunity: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sdTypePrivate: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sdTypeReligious: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sdTypeGov: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sdGPSLng: {
      type: DataTypes.FLOAT(12,6),
      allowNull: true
    },
    sdGPSLat: {
      type: DataTypes.FLOAT(12,6),
      allowNull: true
    },
    sdGPSElev: {
      type: DataTypes.FLOAT(12,6),
      allowNull: true
    },
    sdEmis2014Ref: {
      type: DataTypes.STRING(12),
      allowNull: true,
      comment: "tblSchEmis"
    },
    sdLocalName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    sdBankDist: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sdMonTransDist: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sdLocationType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "1=rural,2=deepRural,3=alongMainRoad,4=Urban,0=Unknown"
    },
    sdOwnType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0=Unknown,1=Government, 2=Religious, 3=Community, 4=Private"
    },
    sdSchoolFees: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sdAgric: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdArab: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdArt: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdEng: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdFeedingProgSchool: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdFeedingProgWFP: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdFormALP1: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdFormALP2: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdFormALP3: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdFormPre1: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdFormPre2: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdFormPre3: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdInstrucArabc: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdInstucEng: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdMath: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdMotherTongue: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdMusic: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdRel: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdSchoolTypeBoadn: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdSchoolTypeDay: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdSchoolTypeMixed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdSchoolTypeSingle: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdSci: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdSst: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdSubjHiv: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    shareBuildnAfternoon: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    shareBuildnEvening: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    shareBuildnMorning: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    latrineSeparateNo: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    latrineSeparateYes: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sdBuildnNo: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sdBuildnYes: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sdCleanWaterNo: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sdCleanWaterYes: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sdCurrEthio: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sdCurrSd: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sdCurrSs: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sdCurrUg: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sdFeedingProgNo: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sdFeedingProgYes: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sdInternetNo: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sdInternetYes: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sdOtherFundingNo: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sdOtherFundingYes: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sdOwnershipCommunity: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sdOwnershipFaithbased: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sdOwnershipGovt: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sdOwnershipPrivate: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sdRadioProgNo: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sdRadioProgYes: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sdRecretnActivitiesNo: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sdRecretnActivitiesYes: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sdSchMentoringNo: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sdSchMentoringYes: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sdCurrOther: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdDistFoot: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdDistSchBank: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdDistVillage: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdDistVillageCamp: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdFeedingProgOther: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdInstrucOther: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdMentoringActvt1: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdMentoringActvt2: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdMentoringActvt3: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdMobileOther: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdNearestSchool: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdNearestVillage: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdNumClassRoom: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdNumComputers: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdNumCTGirls: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdNumLatrines: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdNumPermntClass: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdNumSemipermntClass: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdNumUndertree: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdOtherSchInvolved1: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdOtherSchInvolved2: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdRadioProGroup: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdRecretnActivitiesOther: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdSchFees: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdEMISNO: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    sdFormPri1: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdFormPri2: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdFormPri3: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdFormPri4: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdFormPri5: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdFormPri6: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdFormPri7: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdFormPri8: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdFormSec1: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdFormSec2: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdFormSec3: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdFormSec4: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdMobileGemtel: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdMobileMtn: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdMobileVivacell: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdMobileZain: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdSchDistMarket: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdFormVTC1: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    sdFormVTC2: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    sdFormTTI1: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    sdFormTTI2: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tblschdata_2017',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idSData" },
        ]
      },
      {
        name: "sdRef",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sdRef" },
        ]
      },
      {
        name: "sdEmis2014Ref",
        using: "BTREE",
        fields: [
          { name: "sdEmis2014Ref" },
        ]
      },
    ]
  });
};
