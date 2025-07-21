// backend/models/message.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // 資料庫連線實例

const Message = sequelize.define('Message', {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

module.exports = Message;
