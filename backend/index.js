// backend/index.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./sequelize');
const Message = require('./models/message');

const app = express();
app.use(cors());
app.use(express.json());

// 確保資料庫同步
sequelize.sync().then(() => console.log('資料庫已同步'));

// GET 所有留言
app.get('/api/messages', async (req, res) => {
  const messages = await Message.findAll({ order: [['created_at', 'DESC']] });
  res.json(messages);
});

// POST 新留言
app.post('/api/messages', async (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) return res.status(400).json({ error: 'Missing fields' });

  await Message.create({ name, message });
  res.json({ success: true });
});

app.listen(3000, () => console.log('Backend running on http://localhost:3000'));
