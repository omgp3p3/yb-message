import privateMessage from './message.js';

let nickname = '닉네임';
const messageList = document.getElementById('messages');

function renderMessage() {
  let aHtml = [];
  privateMessage.forEach((day) => {
    const date = day.date;
    const messages = day.messages;

    aHtml.push(`<div class="message-date">${date}</div>`);

    messages.forEach((msg) => {
      while (msg.content.indexOf('@@') >= 0) {
        msg.content = msg.content.replace('@@', nickname);
      }
      let element = `
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

      if (msg.content.indexOf('images') >= 0) {
        element = `
        <li>
          <div class="profile">
            <img src="./images/profile.jpg" class="profile-image" />
            <span class="name">유빈</span>
          </div>
          <div class="artist-message">
            <a href="${msg.content}" target="_blank"><img src="${msg.content}" class="message-photo"/></a>
            <span class="date">${date}</span>
            <span class="time">${msg.time}</span>
          </div>
        </li>
        `;
      }

      aHtml.push(element);
    });
    messageList.innerHTML = aHtml.join('');
  });
}
renderMessage();
