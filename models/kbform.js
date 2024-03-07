const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kbform', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    xform_id_string: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    form_ref: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    school_code: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    submission_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    key_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    insert_prt: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'kbform',
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
    ]
  });
};
