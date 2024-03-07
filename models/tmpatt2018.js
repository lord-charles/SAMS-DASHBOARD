const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmpatt2018', {
    atDay: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    sState: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    cName: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    pyName: {
      type: DataTypes.STRING(24),
      allowNull: false
    },
    MP1: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    MP2: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    MP3: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    MP4: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    MP5: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    MP6: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    MP7: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    MP8: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    FP1: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    FP2: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    FP3: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    FP4: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    FP5: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    FP6: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    FP7: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    FP8: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    MS1: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    MS2: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    MS3: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    MS4: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    MS5: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    MS6: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    FS1: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    FS2: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    FS3: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    FS4: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    FS5: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    },
    FS6: {
      type: DataTypes.DECIMAL(23,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmpatt2018',
    timestamps: false
  });
};
