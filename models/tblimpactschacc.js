const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblimpactschacc', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    p_no: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    school_code: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    approved_teachers_no: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    approved_teachers_no_updated: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    approved_teachers_source: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    approved_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    approved_accounted_ssp: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true,
      defaultValue: 0.00
    },
    approved_amt_eur: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    approved_amt_ssp: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    approved_amt_ssp_bk: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    approved_proposed_method: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sa_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bank_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bank_account: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bank_branch: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bank_accessible: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bank_instructed_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    bank_bounced_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    bank_bounced_reason: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    paid_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    paid_method: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    paid_amt_ssp: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    statement_amt_ssp: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true,
      defaultValue: 0.00,
      comment: "amount deposited on the bank statements"
    },
    accounted_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    accounted_teachers_no: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    accounted_teachers_no_not_added: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    accounted_amt: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    returned_amt_ssp: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true,
      defaultValue: 0.00
    },
    accounted_amt_bk: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    upload_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    upload_id_bank: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    upload_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    upload_check_status: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    upload_date_bank: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sync_ts: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tia_idx: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpr_idx: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tpr_agent: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblimpactschacc',
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
        name: "imp",
        using: "BTREE",
        fields: [
          { name: "school_code" },
          { name: "year" },
          { name: "p_no" },
        ]
      },
      {
        name: "upload_id",
        using: "BTREE",
        fields: [
          { name: "upload_id" },
        ]
      },
      {
        name: "upload_id_bank",
        using: "BTREE",
        fields: [
          { name: "upload_id_bank" },
        ]
      },
    ]
  });
};
