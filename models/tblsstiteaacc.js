const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblsstiteaacc', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ref_idx: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    p_no: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    date_approved: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    teacher_source: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    school_code: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    teacher_code: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    teacher_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    hris_id: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    position: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    amt_eur: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    amt_ssp: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    on_list: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    user_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    teacher_code_bk: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    teacher_list: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblsstiteaacc',
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
        name: "ref_idx",
        using: "BTREE",
        fields: [
          { name: "ref_idx" },
        ]
      },
    ]
  });
};
