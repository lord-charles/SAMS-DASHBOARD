const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fhdata', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    refForm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    refPost: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    },
    _uuid: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "unique"
    },
    _bamboo_dataset_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    _tags: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    _geolocation: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    county: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    payam: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    _xform_id_string: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    _status: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    _id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    uuid: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    date: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fTR1L: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fCMFA: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fTR1B: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSMM: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    USR: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fCMAD: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fBD2: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fCMPD: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fCTRR: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fDEV: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    idDevice: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fCMAS: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSUPAW: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    idImei: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fp_CMAT: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fTR2A: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fTR2B: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fLGFD: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    idStart: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSGB1: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fTR2L: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fp_LGB: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fCTRV: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSGBI: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSUPHB: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fCTS: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fLGM: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSGDEV: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fTR1A: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fLGFA: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fLGD: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fNMTT: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    idEnd: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fLGF: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fCMFD: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fLGP: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fLGPD: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    idSubcribe: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fCMF: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSGK2: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fLGAS: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    idToday: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fINV: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fCMM: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSUPC: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fBNK: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fCMAS2: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    idPhoneNo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSUPJD: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fBUG: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fLGAS2: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    iddeviceid: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    idsubscriberid: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    store_payam: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    store_state: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    idsimserial: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    idphonenumber: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    store_county: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    employer: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fPET13: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSHBIP: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSRP13: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSIMG: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fNFST: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fCHUJD: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fRTP13: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSTPDP: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSGB2: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fa_PS13: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fCBSCD: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fPET14: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fVR: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fNFTT: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fPSSSMM: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSOAP: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSGB3: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fNFCT: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSGBP: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSOUJD: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSGK1: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fa_SR: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fRTP14: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSGSMC: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSDF: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSTPDA: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSTPDM: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fCBNASC: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSTPDQ: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fENSS: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    store_photo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSGBEDP: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSUPTR: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fMFGT: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fNFPSS: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fCBNACC: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fNFPST: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fNMPST: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fNMPSS: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fa_PS14: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSGPILOT: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSLMSG: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fNMST: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fa_PE: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fSRP14: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    schoolname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    schoolcode: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    instanceID: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    _submission_time: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cLGFD: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    _attachments: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    _userform_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fNMCT: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fQRS: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'fhdata',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idx" },
        ]
      },
      {
        name: "unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "_uuid" },
        ]
      },
    ]
  });
};
