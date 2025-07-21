// frontend/scripts.js
const API_BASE = 'http://localhost:3000/api';

async function loadMessages() {
  const res = await fetch(`${API_BASE}/messages`);
  const messages = await res.json();
  const list = document.getElementById('messagesList');
  list.innerHTML = '';
  messages.forEach((msg) => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = `${msg.name}：${msg.message}`;
    list.appendChild(li);
  });
}

document.getElementById('messageForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  await fetch(`${API_BASE}/messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, message }),
  });

  document.getElementById('name').value = '';
  document.getElementById('message').value = '';
  loadMessages();
});

loadMessages();
