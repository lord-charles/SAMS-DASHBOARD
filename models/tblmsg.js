const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblmsg', {
    idMsg: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mSrc: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    mTS: {
      type: DataTypes.STRING(24),
      allowNull: true,
      comment: "yyyy\/mm\/dd,hh:mm:ss+00"
    },
    mMsg: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    mMachine: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    mComPort: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    mReceived: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    mMNO: {
      type: DataTypes.STRING(12),
      allowNull: true,
      comment: "added by timed metro cron task after initial creation"
    },
    mSch: {
      type: DataTypes.STRING(12),
      allowNull: true,
      comment: "added by timed metro cron task after initial creation"
    }
  }, {
    sequelize,
    tableName: 'tblmsg',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idMsg" },
        ]
      },
      {
        name: "mReceived",
        using: "BTREE",
        fields: [
          { name: "mReceived" },
        ]
      },
      {
        name: "mSrc",
        using: "BTREE",
        fields: [
          { name: "mSrc" },
        ]
      },
      {
        name: "mMNO",
        using: "BTREE",
        fields: [
          { name: "mMNO" },
        ]
      },
      {
        name: "mSch",
        using: "BTREE",
        fields: [
          { name: "mSch" },
        ]
      },
    ]
  });
};
