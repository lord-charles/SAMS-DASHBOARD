const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbltmppayammapping', {
    bsi10staname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bsi10staname_clean: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sssams10staname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sssams10staid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bsi10couname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bsi10couname_clean: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bsi10couname_clean1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sssams10couname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sssams10couid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bsi28staname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sssams28staname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sssams28staid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bsi28couname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bsi28couname_clean: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sssams28couname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sssams28couid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bsi32staname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sssams32staid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bsi32couname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bsi32couname_clean: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sssams32couid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bsipayname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bsipaynamealt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sssamspayname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sssamspayid: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbltmppayammapping',
    timestamps: false
  });
};
