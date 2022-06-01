import { privateMessage, dateList } from './message.js';

let nickname = '';
const messageList = document.getElementById('messages');
const landingSubmit = document.querySelector('#landing button');
const dateListUl = document.getElementById('dateList');
const homeButton = document.querySelector('.arrow');
const calendarButton = document.querySelector('.calendar');

landingSubmit.addEventListener('click', goToSelect);
dateListUl.addEventListener('click', messageHanler);

homeButton.addEventListener('click', () => {
  document.getElementById('landing').style.display = 'flex';
  document.getElementById('selectMonth').style.display = 'flex';
});
calendarButton.addEventListener('click', () => {
  document.getElementById('selectMonth').style.display = 'flex';
});

function messageHanler(e) {
  const targetDate = e.target.innerHTML;
  document.getElementById('selectMonth').style.display = 'none';
  renderMessage(privateMessage[targetDate]);
  window.location.href = '#';
}

function renderMonth() {
  let aHtml = [];
  dateList.forEach((date) => {
    const element = `
      <li class="date-list-elem">${date}</li>
    `;

    aHtml.push(element);
  });

  dateListUl.innerHTML = aHtml.join('');
}

function renderMessage(privateMessage) {
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
        </div>`;
      if (msg.content.indexOf('videos') >= 0) {
        element += `
          <div class="artist-message">
            <a href="${msg.content}.mp4" target="_blank"><img src="${msg.content}.jpg" class="message-photo"/></a>
            <span class="date">${date}</span>
            <span class="time">${msg.time}</span>
          </div>
        </li>
        `;
      } else if (msg.content.indexOf('images') >= 0) {
        element += `
          <div class="artist-message">
            <a href="${msg.content}.jpg" target="_blank"><img src="${msg.content}.jpg" class="message-photo"/></a>
            <span class="date">${date}</span>
            <span class="time">${msg.time}</span>
          </div>
        </li>
        `;
      } else {
        element += `<div class="artist-message">
          <span class="content">${msg.content}</span>
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

function goToSelect() {
  nickname = document.getElementById('nickname').value;

  document.getElementById('landing').style.display = 'none';
}

renderMonth();
