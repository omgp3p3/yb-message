import privateMessage from './message.js';

const messageList = document.getElementById('messages');

function renderMessage() {
  privateMessage.forEach((day) => {
    console.log(day);
    const date = day.date;
    const messages = day.messages;

    messageList.innerHTML += `
      <div class="message-date">${date}</div>
    `;

    messages.forEach((msg) => {
      const element = `
      <li>
        <div class="profile">
          <img src="./images/profile.jpg" class="profile-image" />
          <span class="name">유빈</span>
        </div>
        <div class="artist-message">
          <span class="content">${msg.content}</span>
          <span class="date">${date}</span>
          <span class="time">${msg.time}</span>
        </div>
      </li>
      `;

      messageList.innerHTML += element;
    });
  });
}
renderMessage();
