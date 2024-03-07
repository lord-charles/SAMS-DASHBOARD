const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblsbrtreport', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "active flag"
    },
    activetmp: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "temp active flag"
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "year"
    },
    deEdu: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "type of education"
    },
    deSchType: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    deSta: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "state name"
    },
    deStaName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    deStaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "state id"
    },
    deCou: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "county name"
    },
    deCouId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "county id"
    },
    dePay: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "payam name"
    },
    dePayId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "payam id"
    },
    deNam: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "school name"
    },
    deSchId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "school id"
    },
    deCod: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "school code"
    },
    deTyp: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "school type"
    },
    deMis: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "emis number"
    },
    deHardToReach: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ppBgt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "population on budget submission"
    },
    ppEnr: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "current enrolment"
    },
    ppEnrYr: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "year for enrolment"
    },
    ppAtt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "max attendance"
    },
    ppAttYr: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "year of max att figure"
    },
    ppAttDat: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    deClo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "school closed"
    },
    deCloDat: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "date closed"
    },
    smExp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "budget submission expenditure"
    },
    smE1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    smE2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    smE3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    smRev: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    smTpyAmt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    smTpyAmt_py: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    smTpyLt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bnNam: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "bank name"
    },
    bnAcc: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "bank account"
    },
    bnBra: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "bank branch"
    },
    bnDat: {
      type: DataTypes.STRING(1),
      allowNull: true,
      comment: "y n if all bank fields are full"
    },
    rfA: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "SGB upl filename"
    },
    rfB: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "SDP upl filename"
    },
    rfC: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "budget upl filename"
    },
    rfD: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "Ledger upl filename"
    },
    rfD_py: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    rfE: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "Bank account details filename"
    },
    rfF: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "Tranche 1 Waiver Documentation"
    },
    rfG: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "Tranche 2 Waiver Documentation"
    },
    rfH: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "teacher pay"
    },
    rfH_py: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    rfI: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "teacher attendance"
    },
    rfJ: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "timetable lesson plan"
    },
    rfK: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    rfL: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    rfFil: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "budget file reference index"
    },
    rfLP1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ledger period 1 index"
    },
    rfLP2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ledger period 2 index"
    },
    caPreT1Spend: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      comment: "% of t1 spent previous year"
    },
    caPreT2Spend: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      comment: "% of t2 spent previous year"
    },
    caPreYrSpend: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true,
      comment: "% of cg spent previous year"
    },
    caPreYr: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "qualification for previous year spending"
    },
    caPreYrUnAcc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    caPreT1UnAcc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    caPreT2UnAcc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    caEli: {
      type: DataTypes.STRING(1),
      allowNull: true,
      comment: "y n calculation for eligibility"
    },
    caAnnAllow: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true,
      comment: "annual allowance based on enrolment"
    },
    caAnnAllowCur: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    caAnn: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    caAnnHardToReach: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false,
      defaultValue: 0.00
    },
    caBgt: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    caCat: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    caEnr: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    caBan: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    caScan: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    caAtt: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    caChk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    caT1Spend: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    caT2Chk: {
      type: DataTypes.TINYINT.UNSIGNED.ZEROFILL,
      allowNull: true
    },
    caT2Spend: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    caEndYrRec: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    caEndYrAcc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    caEndYrUnAcc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    caEndYrSpend: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    caEndYr: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    caT1UnAcc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    caT2UnAcc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    en1m: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    en1f: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    en2m: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    en2f: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    en3m: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    en3f: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    en4m: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    en4f: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    en5m: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    en5f: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    en6m: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    en6f: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    en7m: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    en7f: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    en8m: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    en8f: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    enM: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    enF: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    t1Nam: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    t1Edu: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    t1State: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    t1County: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    t1Payam: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    t1Cal: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    t1HardToReach: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false,
      defaultValue: 0.00
    },
    t1Prd: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    t1Prd_m: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "proposed date"
    },
    t1Enr: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    t1Att: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    t1Pra: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "proposed amount"
    },
    t1PraHardToReach: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false,
      defaultValue: 0.00
    },
    t1Sta: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "status"
    },
    t1Com: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "comments"
    },
    t1Apd: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "date approved"
    },
    t1Apd_m: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "approved date"
    },
    t1Exp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "actual expenditure"
    },
    t1E1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    t1E2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    t1E3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    t1Rev: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    t1Mofep: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Disbursed by MoFEP"
    },
    t1MofepChk: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    t1MofepPct: {
      type: DataTypes.DECIMAL(2,2),
      allowNull: true
    },
    t1HeldSmof: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Held by SMOFs"
    },
    t1HeldSmofChk: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    t1HeldSmofPct: {
      type: DataTypes.DECIMAL(2,2),
      allowNull: true
    },
    t1HeldSmoe: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    t1HeldSmoeChk: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    t1HeldSmoePct: {
      type: DataTypes.DECIMAL(2,2),
      allowNull: true
    },
    t1HeldNote: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    t1PaidBy: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "",
      comment: "paid by\/invoiced to GRSS or GESS "
    },
    t1PaymentResp: {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "payment responsibility"
    },
    t1Received: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    t1ReceivedChk: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    t1ReceivedPct: {
      type: DataTypes.DECIMAL(2,2),
      allowNull: true
    },
    t1Lag: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    t1LagChk: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    t1LagPct: {
      type: DataTypes.DECIMAL(2,2),
      allowNull: true
    },
    t1BankStartDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    t1BankEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    t1BankProof: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    t1BankProofDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    t1BankProofChk: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    t1BankProofPct: {
      type: DataTypes.DECIMAL(2,2),
      allowNull: true
    },
    t1BankNotes: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    t1ReceivedConf: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    t1ReceivedConfChk: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    t1ReceviedConfPct: {
      type: DataTypes.DECIMAL(2,2),
      allowNull: true
    },
    t1WaiverChk: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    t2Cal: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    t2Nam: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    t2Edu: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    t2State: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    t2County: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    t2Payam: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    t2Prd: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    t2Prd_m: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "proposed date"
    },
    t2Enr: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "enrolment #"
    },
    t2Att: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "enrolment #"
    },
    t2Pra: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "proposed amount"
    },
    t2HardToReach: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false,
      defaultValue: 0.00
    },
    t2Sta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "status"
    },
    t2Com: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "comments"
    },
    t2Apd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    t2Apd_m: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "approved date"
    },
    t2Exp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "actual expenditure"
    },
    t2E1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    t2E2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    t2E3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    t2Rev: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    t2Mofep: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    t2MofepChk: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    t2MofepPct: {
      type: DataTypes.DECIMAL(2,2),
      allowNull: true
    },
    t2HeldSmof: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    t2HeldSmofChk: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    t2HeldSmofPct: {
      type: DataTypes.DECIMAL(2,2),
      allowNull: true
    },
    t2HeldSmoe: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    t2HeldSmoeChk: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    t2HeldSmoePct: {
      type: DataTypes.DECIMAL(2,2),
      allowNull: true
    },
    t2HeldNote: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    t2PaidBy: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    t2PaymentResp: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    t2Received: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    t2ReceivedChk: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    t2ReceivedPct: {
      type: DataTypes.DECIMAL(2,2),
      allowNull: true
    },
    t2BankStartDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    t2BankEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    t2BankProof: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    t2BankProofDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    t2BankProofChk: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    t2BankProofPct: {
      type: DataTypes.DECIMAL(2,2),
      allowNull: true
    },
    t2BankNotes: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    t2ReceivedConf: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    t2ReceivedConfChk: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    t2ReceivedConfPct: {
      type: DataTypes.DECIMAL(2,2),
      allowNull: true
    },
    t2Lag: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    t2LagChk: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    t2LagPct: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    t2WaiverChk: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    t1E1a: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Classrooms maintained\/improved"
    },
    t1E1b: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Classrooms constructed (local materials\/shelters)"
    },
    t1E1c: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Classrooms constructed (permanent materials - brick or block)"
    },
    t1E1d: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Fence maintenance"
    },
    t1E1e: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Fence construction"
    },
    t1E1f: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Latrine maintenance"
    },
    t1E1g: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Latrine construction"
    },
    t1E1h: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Water point maintenance"
    },
    t1E1i: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Water point construction"
    },
    t1E1j: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "School gardens sowed"
    },
    t1E1k: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Fuel for generator bought"
    },
    t1E1l: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Water bought"
    },
    t1E1m: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Sports grounds maintained"
    },
    t1E2a: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Chalkboards (stand or permanent) purchased\/installed"
    },
    t1E2b: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Science\/maths kits purchased"
    },
    t1E2c: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Reference books purchased"
    },
    t1E2d: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Textbooks purchased"
    },
    t1E2e: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Exercise books purchased"
    },
    t1E2f: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Musical instruments purchased"
    },
    t1E2g: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Volunteer and contract teachers paid"
    },
    t1E2h: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "School meals"
    },
    t1E2i: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Uniforms for needy students"
    },
    t1E2j: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Other (pls specify briefly)"
    },
    t2E1a: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Classrooms maintained\/improved"
    },
    t2E1b: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Classrooms constructed (local materials\/shelters)"
    },
    t2E1c: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Classrooms constructed (permanent materials - brick or block)"
    },
    t2E1d: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Fence maintenance"
    },
    t2E1e: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Fence construction"
    },
    t2E1f: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Latrine maintenance"
    },
    t2E1g: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Latrine construction"
    },
    t2E1h: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Water point maintenance"
    },
    t2E1i: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Water point construction"
    },
    t2E1j: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "School gardens sowed"
    },
    t2E1k: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Fuel for generator bought"
    },
    t2E1l: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Water bought"
    },
    t2E1m: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Sports grounds maintained"
    },
    t2E2a: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Chalkboards (stand or permanent) purchased\/installed"
    },
    t2E2b: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Science\/maths kits purchased"
    },
    t2E2c: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Reference books purchased"
    },
    t2E2d: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Textbooks purchased"
    },
    t2E2e: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Exercise books purchased"
    },
    t2E2f: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Musical instruments purchased"
    },
    t2E2g: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Volunteer and contract teachers paid"
    },
    t2E2h: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "School meals"
    },
    t2E2i: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Uniforms for needy students"
    },
    t2E2j: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Other (pls specify briefly)"
    },
    ph1m: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ph1f: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ph2m: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ph2f: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ph3m: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ph3f: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ph4m: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ph4f: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ph5m: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ph5f: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ph6m: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ph6f: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ph7m: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ph7f: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ph8m: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ph8f: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    phM: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    phF: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ppPh: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ppPhYr: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    t1Rca: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Confirmation funds have reached school bank a\/c [amount]"
    },
    t1Rcd: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Confirmation funds have reached school bank a\/c [date]"
    },
    t2Rca: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Confirmation funds have reached school bank a\/c [amount]"
    },
    t2Rcd: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Confirmation funds have reached school bank a\/c [date]"
    },
    ctPex: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Confirmation payment to recipients executed [CTs only]"
    },
    cgLge: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "",
      comment: "Confirmation ledger en route back to CGA [CGs]"
    },
    ctPse: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Confirmation paid paysheet en route back to CGA [CTs]"
    },
    cgLgr: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "",
      comment: "Ledger received and uploaded [CGs]"
    },
    cgLgq: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "",
      comment: "Ledger passes quality standards [CGs]"
    },
    ctPsu: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Paid paysheet received and uploaded [CTs]"
    },
    ctRfd: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Funds to be refunded from paid paysheet [CTs]"
    },
    ctPrb: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Problematic amounts on paid paysheet [CTs]"
    },
    t1Frq: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Funds requested from Arnhem [date, secondaries only]"
    },
    t1Fsn: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Funds sent from Arnhem [date, secondaries only]"
    },
    t1Dcd: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Documentation uploaded [date]"
    },
    t1Flj: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Funds landed Juba [date]"
    },
    t1Ris: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Request and invoice sent [date]"
    },
    t1Itg: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Instructions to transfer given to bank [date]"
    },
    t1Frn: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Funds returned [date – exceptional – for eg if problem with bank a\/c]"
    },
    t1Fra: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    t1Fca: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Funds confirmed reached school bank a\/c [amount]"
    },
    t1Fcd: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Funds confirmed reached school bank a\/c [date]"
    },
    t1Lge: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "",
      comment: "Confirmed ledger en route back to Juba [yes and date\/no]"
    },
    t1Lgd: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Confirmed ledger en route back to Juba [yes and date\/no]"
    },
    t1Lru: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "",
      comment: "Ledger received and uploaded [yes and date\/no]"
    },
    t1Lrd: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Ledger received and uploaded [yes and date\/no]"
    },
    t1Lqs: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "",
      comment: "Ledger passes quality standards\/reviewed by [yes and reviewer initials]"
    },
    t1Lqi: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "",
      comment: "Ledger passes quality standards\/reviewed by [yes and reviewer initials]"
    },
    t2Frq: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Funds requested from Arnhem [date, secondaries only]"
    },
    t2Fsn: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Funds sent from Arnhem [date, secondaries only]"
    },
    t2Dcd: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Documentation uploaded [date]"
    },
    t2Flj: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Funds landed Juba [date]"
    },
    t2Ris: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Request and invoice sent [date]"
    },
    t2Itg: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Instructions to transfer given to bank [date]"
    },
    t2Frn: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Funds returned [date – exceptional – for eg if problem with bank a\/c]"
    },
    t2Fra: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    t2Fca: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Funds confirmed reached school bank a\/c [amount]"
    },
    t2Fcd: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Funds confirmed reached school bank a\/c [date]"
    },
    t2Lge: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "",
      comment: "Confirmed ledger en route back to Juba [yes and date\/no]"
    },
    t2Lgd: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Confirmed ledger en route back to Juba [yes and date\/no]"
    },
    t2Lru: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "",
      comment: "Ledger received and uploaded [yes and date\/no]"
    },
    t2Lrd: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Ledger received and uploaded [yes and date\/no]"
    },
    t2Lqs: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "",
      comment: "Ledger passes quality standards\/reviewed by [yes and reviewer initials]"
    },
    t2Lqi: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "",
      comment: "Ledger passes quality standards\/reviewed by [yes and reviewer initials]"
    },
    ctVfd: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ctCrd: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ctPrd: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ctFrq: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ctFsn: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ctApd: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ctDcd: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ctFlj: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ctRis: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ctItb: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ctFrn: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ctExSad: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Excess Money Returned to SA (date)"
    },
    ctExSaa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Excess Money Returned to SA (amount)"
    },
    ctExGed: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "SA return excess money to GESS (date)"
    },
    ctExGea: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "SA return excess money to GESS (amount)"
    },
    ctEli: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "number of girls eligible at school"
    },
    ctPaid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "number of girls paid at school"
    },
    eqRptReg: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "number of times school has reported attendance for the year"
    },
    ctApproved: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ecdApMonth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ecd approved - month approved"
    },
    ecdApState: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "ecd approved - state code"
    },
    ecdApName: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "ecd approved - school name"
    },
    ecdApEnrBoys: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ecdApEnrGirls: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ecdApEnr: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ecd approved - enrolled at the time"
    },
    ecdApAmt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ecd approved - amount approved"
    },
    '2cGov': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Schools supported with School Governance"
    },
    '2cSss': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Schools Supported with Supportive School Supervision"
    },
    '2cTpd': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Schools supported with TPD"
    },
    '2cLclm': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Schools supported with LCLM Training"
    },
    '2cMentor': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Schools supported with Mentoring"
    },
    ctDateInvoiced: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Date invoiced to GESS (date)"
    },
    ctGirlsInvoiced: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Girls invoiced to GESS (number)"
    },
    ctCtefsReceived: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "# of CTEFs received (number)"
    },
    ctCtefsSignatures: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "# of CTEF signatures on payment list (number)"
    },
    regParDel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "No of PARs Delivered to the school"
    },
    regPprDelChk: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "PPR delivered (Y\/N)"
    },
    regDarDel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "No of DARs delivered to the school"
    },
    regParPreChk: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "Has the school started filling the PARs (Y\/N)"
    },
    regPprPreChk: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "Did the school start the filling of the PPR (Y\/N)"
    },
    regParRetDat: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Approximately when will the school submit the filled PARs to the Data Entry team (Date)"
    },
    regPprRetDat: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Approximately when will the schools submit the filled PPRs to the Data Entry Team (Date)"
    },
    regDarChk: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "Are the schools putting DARs in Use (Y\/N)"
    },
    regDarRes: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Who in your team\/counties are ensureing the use of DARs by the schools(Provide the title)"
    },
    regInitial: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    regRemarks: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Remarks"
    },
    demParRecDat: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    demParRetNam: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    demParRetDat: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    demParAcpNam: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    demParAcpDat: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    demParDeLap: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    demParDeDat: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    demParDePup: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    demParUplNam: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    demParUplDat: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    demParUplPup: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    demParNotified: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    demPprRecDat: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    demPprRetNam: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    demPprRetDat: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    demPprAcpNam: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    demPprAcpDat: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    demPprDeLap: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    demPprDeDat: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    demPprDePup: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    demPprUplNam: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    demPprUplDat: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    demPprUplPup: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    demPprNotified: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    surOpenToday: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    surOpenPresent: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    surReOpen: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    deSta33: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    deStaName33: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    deStaId33: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deCou33: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    deCouId33: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dePay33: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dePayId33: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deSta32: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    deStaName32: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    deStaId32: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deCou32: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    deCouId32: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dePay32: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dePayId32: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deSta28: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "state name"
    },
    deStaName28: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    deStaId28: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "state id"
    },
    deCou28: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "county name"
    },
    deCouId28: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "county id"
    },
    dePay28: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "payam name"
    },
    dePayId28: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "payam id"
    },
    deSta10: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "state name"
    },
    deStaName10: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    deStaId10: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "state id"
    },
    deCou10: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "county name"
    },
    deCouId10: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "county id"
    },
    dePay10: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "payam name"
    },
    dePayId10: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "payam id"
    },
    inflation_t1_pt1_calc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    inflation_t1_pt1_paid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "30 percent of T1"
    },
    inflation_t1_pt1_paidby: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    inflation_t1_pt1_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    inflation_t1_pt1_exp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    inflation_t1_pt1_waiver_chk: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    inflation_t1_pt2_calc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    inflation_t1_pt2_paid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "70 percent of T1"
    },
    inflation_t1_pt2_paidby: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    inflation_t1_pt2_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    inflation_t1_pt2_exp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    inflation_t1_pt2_waiver_chk: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    inflation_t2_calc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    inflation_t2_paid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "100 percent of T2"
    },
    lastRec: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    preYrRec: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    preYrBal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    endYrRec: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    endYrAcc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    endYrBal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cumlRec: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cumlRecBf: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cumlAcc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cumlBal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cumlBf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    teachersList: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    teachersListSource: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    earlyBirds: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    imp_p1_h_chk: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    imp_p1_calc: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    imp_p1_calc_cur: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    imp_p1_met: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    imp_p1_noTeachers: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    imp_p1_teacherSource: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    imp_p1_dateApproved: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    imp_p1_amtApproved: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    imp_p1_proposedMethod: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    imp_p1_datePaid: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    imp_p1_paidMethod: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    imp_p1_dateBounced: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    imp_p1_reasonBounced: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    imp_p1_dateAccounted: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    imp_p1_amtAccounted: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    imp_p1_bankAccess: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    hrisActReports: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    imp_p2_acc_p1: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblsbrtreport',
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
        name: "uindex",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "year" },
          { name: "deCod" },
        ]
      },
      {
        name: "year",
        using: "BTREE",
        fields: [
          { name: "year" },
        ]
      },
      {
        name: "deEdu",
        using: "BTREE",
        fields: [
          { name: "deEdu" },
        ]
      },
      {
        name: "iState",
        using: "BTREE",
        fields: [
          { name: "deStaId" },
        ]
      },
    ]
  });
};
