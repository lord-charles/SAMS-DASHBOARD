const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rallreports_copy', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "auto index primary key"
    },
    TS: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "all report tables must have TS"
    },
    USR: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "all tables must have User Name"
    },
    UID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "all tables must have UID link to tblUser"
    },
    SREF: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    fLGD: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      comment: "LGD - Listening Group Date"
    },
    fp_LGB: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: "LGB – Listening Group Boma"
    },
    fLGP: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "LGP - Programme Name"
    },
    fLGM: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "LGM - Male Participants"
    },
    fLGF: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "LGF - Female Participants"
    },
    fLGPD: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "LGPD - Participants Description"
    },
    fLGAS: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "LGAS - Action Statement Made"
    },
    fLGAS2: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: "LGAS2 - Action Statement Desc"
    },
    fLGFD: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      comment: "LGFD - Follow Up Made"
    },
    fLGFA: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: "LGFA - Follow Up Action"
    },
    fp_CMAT: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: "CMAT Type of Community Mobilisation Activity"
    },
    fCMAD: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      comment: "CMAD Date of Community Mobilisation Activity"
    },
    fCMM: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "CMM - Male Participants"
    },
    fCMF: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "CMF - Female Participants"
    },
    fCMPD: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: "CMPD - Participants Description"
    },
    fCMAS: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "CMAS - Action Statement Made"
    },
    fCMAS2: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: "CMAS2 - Action Statement Desc"
    },
    fCMFD: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      comment: "CMFD - Follow Up Made"
    },
    fCMFA: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: "CMFA - Follow Up Action"
    },
    fCTRR: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "CTRR - Cash transfers recipients registered"
    },
    fCTRV: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "CTRV - Cash transfers recipients validated"
    },
    fCTS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "CTS - Cash transfers sent"
    },
    fBNK: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "BANK - Has the school opened a bank account?"
    },
    fSHBIP: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "SHBIP - School have SGB in place"
    },
    fDEV: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "DEV - Has school development plan in place"
    },
    fBUG: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "BG1 - Has school submitted a budget"
    },
    fBD2: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "BG2 - Has school budget been uploaded"
    },
    fTR1A: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "TR1 - Has school received Tranche 1 cap grant"
    },
    fTR1B: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "TR1A - Has school accounted for Tranche 1 cap grant"
    },
    fTR1L: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "TR1L - Has school submitted ledgers for Tranche 1 cap grant"
    },
    fTR2A: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "TR2 - Has school received Tranche 2 cap grant"
    },
    fTR2B: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "TR2A - Has school accounted for Tranche 2 cap grant"
    },
    fTR2L: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "TR2L - Has school submitted ledgers for Tranche 2 cap grant"
    },
    fSGB1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "SGB1 - Number of male school governing body members"
    },
    fSGB2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "SGB2 - Number of female school governing body member"
    },
    fSGBI: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "SGBI - School governing body is inclusive"
    },
    fSGB3: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "SGB3 - Has the school governing body been trained by GESS?"
    },
    fINV: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "SGINV - State Anchor verified school governing bodies' inventory"
    },
    fSGDEV: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "SGDEV - State Anchor facilitated dev of sch governance policy"
    },
    fSGPILOT: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "SGPILOT - School included in pilot governance programme"
    },
    fSGK1: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "SGK1 - Payam supervisor has school governance kit"
    },
    fSGK2: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "SGK2 - School has governance toolkit"
    },
    fSGSMC: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "SGSMC - School has Management Committe"
    },
    fSGBP: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "SGBP - School governing body involved in dev plan"
    },
    fSGBEDP: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "SGBEDP - School governing body elaborated development plan"
    },
    fSUPC: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "SUPC - State Anchor has conducted Supervisor census\/ mapping"
    },
    fSUPAW: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "SUPAW - School Supervisor aware of new supervision strategy"
    },
    fSUPJD: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "SUPJD - Payam Supervisor has job description"
    },
    fSUPHB: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "SUPHB - School Supervisor has handbook"
    },
    fSUPTR: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "SUPTR - Payam Supervisor Trained in providing feedback"
    },
    fNMTT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "NMTT - Number of male teachers trained by GESS this quarter?"
    },
    fNFTT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "NFTT - Number of female teachers trained by GESS this quarter?"
    },
    fSTPDA: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "STPDA - State Anchor rolled-out Teacher Needs Assessment"
    },
    fSTPDQ: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "STPDQ - State Anchor returned TNA questionnaires to GESS Secretariat"
    },
    fSTPDM: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "STPDM - Teacher professional development materials submitted to GESS"
    },
    fPSSSMM: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "PSSSMM - Payam School Supervisor has school mentoring manual"
    },
    fSMM: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "SMM - School has school mentoring manual"
    },
    fSIMG: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "SIMG - School has identified a mentor for girls"
    },
    fMFGT: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "MFGT - Mentor for girls trained"
    },
    fNMST: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "NMST - Number of male SMoE officials trained by GESS this quarter?"
    },
    fNFST: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "NFST - Number of female SMoE officials trained by GESS this quarter?"
    },
    fNMCT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "NMCT - Number of male CED officials trained by GESS this quarter?"
    },
    fNFCT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "NFCT - Number of female CED officials trained by GESS this quarter"
    },
    fNMPSS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "NMPSS - Number of male payam school supervisors covering the school"
    },
    fNFPSS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "NFPSS - Number of female payam school supervisors covering the school"
    },
    fNMPST: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "NMPST - Number of male payam school supervisors trained by GESS this quarter"
    },
    fNFPST: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "NFPST - Number of female payam school supervisors trained by GESS this quarter"
    },
    fCBNASC: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "CBNASC - Capacity building needs assessment of SMoEs conducted"
    },
    fSOUJD: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "SOUJD - SMoE officials have and understand their job descriptions"
    },
    fSTPDP: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "STPDP - School included in school-based teacher professional development programme pilot"
    },
    fCBNACC: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "SOUJD - Capacity building needs assessment of CEDs conducted"
    },
    fCHUJD: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "CHUJD - CED officials have and understand their job descriptions"
    },
    fCBSCD: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "CBSCD - Capacity building for SMoEs and CED disseminated"
    },
    fSLMSG: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "SLMSG - Sample learning materials submitted to GESS"
    },
    fQRS: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "QRS - Quarterly report submitted"
    },
    fSRP13: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "SRP 2013 - School received PAR"
    },
    fRTP13: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "RTP 2013 - School returned PAR"
    },
    fPET13: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "PET 2013 - PAR has been entered"
    },
    fa_PS13: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "PS 2013 - School PAR has been uploaded"
    },
    fSRP14: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "SRP 2014 - School received PAR"
    },
    fRTP14: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "RTP 2014 - School returned PAR"
    },
    fPET14: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "PET 2014 - PAR has been entered"
    },
    fa_PS14: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "PS 2014 - School PAR has been uploaded"
    },
    fa_PE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "PE - Pupils Uploaded, AUTO integer"
    },
    fa_SR: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "SR - School has reported in last 30 days"
    },
    fVR: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "VR - SA filed visit report for school"
    },
    fNVMMMS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "NVMMMS - Number of visits by Mott McDonald Monitoring Staff"
    },
    fSDF: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "SDF - School damaged in fighting"
    },
    fSOAP: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "SOAP - School occupied by armed personnel"
    },
    fENSS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "ENSS - Estimated number of IDPs sheltering at school"
    },
    fhdataref: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fSMCBoGtraining: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "SMC\/BoG training by GESS"
    },
    fPltSch: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "Pilot School"
    },
    fPTAtPlan: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "PTA Training by Plan"
    },
    fPTAtR2L: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "PTA Training by R2L"
    },
    fSchMPAET: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "School Mother Programme by AET"
    },
    fGPEsch: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "GPE School"
    },
    fR2LfSch: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "R2L Focus School"
    },
    fWASH: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      comment: "WASH"
    },
    fSchMeal: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "School Meal"
    },
    flastBoCtrain: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      comment: "Date of most recent BoG training"
    },
    fNoPart: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Number of Participants"
    },
    fBogMeet: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "There is evidence that the SMC\/BoG members meet monthly"
    },
    fCashRec: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "All cash transactions are recorded in the cash ledger"
    },
    fSDPAct: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "There is evidence of implementation of activities stated in the SDP"
    },
    fGovEff: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "School governance effectiveness"
    },
    fSuScSu: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "Supportive school supervision"
    },
    fNoPESAtt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Number of PES attending training"
    },
    fSuScSuEff: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "Supportive school Supervision (Effectiveness)"
    },
    fNoTeachTrain: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Number of teachers benefitting from training"
    },
    fNoHeadTrain: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Number of Head teachers benefitting from training"
    },
    fDateTrain: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      comment: "Date of School meeting training"
    },
    fEvDisp: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "Evidence of classroom display"
    },
    fNoDisp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Number of classrooms with classroom display"
    },
    fLCLMtrain: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "LCLM training"
    },
    fNoPartLCLM: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Number of participants of LCLM training"
    },
    fNoFPartLCLM: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Number of female participants for LCLM training"
    },
    fEvActResCen: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "Evidence of an active school resource centre\/library"
    },
    fCMActiv: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      comment: "Date of most recent CM activity"
    },
    fCMinQ: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Count of CM activity in quarter"
    },
    fCMActTy: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: "Type of CM Activity"
    },
    fTyMatUs: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: "Type of material used"
    },
    fEpOurSc: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: "Episode of Our School"
    },
    fManyParts: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "How many participants?"
    },
    fManyPartsF: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "How many female participants?"
    },
    fMainLang: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: "Main Language"
    },
    fMainDesc: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: "Main issue discussed?"
    },
    refKobo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fModTrain: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Module of training"
    },
    fNoPartF: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Number of female participants"
    },
    fPESAttTrain: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "PES attending training"
    },
    fNoPESAttF: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Number of female PES attending training"
    },
    fNoTeachTrainF: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Number of female teachers benefitting from training"
    },
    fDateLastTrain: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00",
      comment: "Date of most recent training"
    },
    fTargSch4Men: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "Target school for Mentoring"
    }
  }, {
    sequelize,
    tableName: 'rallreports_copy',
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
        name: "TS",
        using: "BTREE",
        fields: [
          { name: "TS" },
          { name: "USR" },
          { name: "UID" },
        ]
      },
      {
        name: "SREF",
        using: "BTREE",
        fields: [
          { name: "SREF" },
        ]
      },
    ]
  });
};
