const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblschdata_old', {
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
    sdUpdated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
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
    sdFormALP4: {
      type: DataTypes.BOOLEAN,
      allowNull: true
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
    sdSubjOth: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "Other sugbjects taught, new 2019"
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
    sdInternetNo: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sdInternetYes: {
      type: DataTypes.TINYINT,
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
      allowNull: false,
      comment: "REMOVE"
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
      type: DataTypes.STRING(128),
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
    sdFormVTC3: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    sdFormVTC4: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    sdFormCGS1: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    sdFormCGS2: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdFormCGS3: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdFormPST1: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdFormPST2: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sdFormPST3: {
      type: DataTypes.TINYINT,
      allowNull: false
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
    },
    sdFormTVET1: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    sdFormTVET2: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    sdFormTVET3: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    sdFormTVET4: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    sdNumLatrinesBoys: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    sdNumLatrinesGirls: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    sdNumWashroomGirls: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    sdBuildingStatusConflict: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    sdBuildingStatusWater: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    sdBuildingStatusOther: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "No"
    },
    sdBuildingStatusGood: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    sdKitchen: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "No"
    },
    sdFoodStorage: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "No"
    },
    sdCurr: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "No"
    },
    sdCurrOther: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdFeedingProg: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "No"
    },
    sdFeedingProgOther: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sdTextbookStorage: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "No"
    },
    sdCleanWater: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "No"
    },
    sdRecretnActivities: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "No"
    },
    sdInternet: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "No"
    },
    sdRadioProg: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "No"
    },
    sdOtherFunding: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "No"
    },
    sdSchMentoring: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "No"
    },
    sdLatrineSeparate: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "No"
    },
    sdOwnership: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "No"
    },
    sdBuildn: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "No"
    },
    sdSharedBuildn: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: "No"
    },
    sdSharedBuildnSametime: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    sdSess2SatEnd: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "00:00"
    },
    sdSess2SatStart: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "00:00"
    },
    sdSess1SatEnd: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "00:00"
    },
    sdSess1SatStart: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "00:00"
    },
    sdSess2FriEnd: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "00:00"
    },
    sdSess2FriStart: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "00:00"
    },
    sdSess1FriEnd: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "00:00"
    },
    sdSess1FriStart: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "00:00"
    },
    sdSess2ThursEnd: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "00:00"
    },
    sdSess2ThursStart: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "00:00"
    },
    sdSess1ThursEnd: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "00:00"
    },
    sdSess1ThursStart: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "00:00"
    },
    sdSess2WedsEnd: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "00:00"
    },
    sdSess2WedsStart: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "00:00"
    },
    sdSess1WedsEnd: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "00:00"
    },
    sdSess1WedsStart: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "00:00"
    },
    sdSess2TuesEnd: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "00:00"
    },
    sdSess2TuesStart: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "00:00"
    },
    sdSess1TuesEnd: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "00:00"
    },
    sdSess1TuesStart: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "00:00"
    },
    sdSess2MonEnd: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "00:00"
    },
    sdSess2MonStart: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "00:00"
    },
    sdSess1MonEnd: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "00:00"
    },
    sdSess1MonStart: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "00:00"
    },
    sdDisabledYes: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    sdDisabledNo: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    sdDisabledNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sdPowerSourceYes: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    sdPowerSourceNo: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    sdMobileinternetNo: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    sdMobileinternet2G: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    sdMobileinternet3G: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    sdMobileinternet4G: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblschdata_old',
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
