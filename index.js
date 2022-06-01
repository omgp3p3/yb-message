import { privateMessage, dateList } from './message.js';

let nickname = '';
let dayList = [];
let targetMonth = '';
const messageList = document.getElementById('messages');
const landingSubmit = document.querySelector('#landing button');
const dateListUl = document.getElementById('dateList');
const arrowButton = document.querySelector('.arrow');
const calendarButton = document.querySelector('.calendar');
const selectDayField = document.getElementById('selectDay');
const dayListUl = document.getElementById('dayList');

landingSubmit.addEventListener('click', goToSelect);
dateListUl.addEventListener('click', messageHanler);

arrowButton.addEventListener('click', () => {
  document.getElementById('selectMonth').style.display = 'flex';
});
calendarButton.addEventListener('click', () => {
  if (selectDayField.style.display === 'none') {
    selectDayField.style.display = 'flex';
  } else {
    selectDayField.style.display = 'none';
  }
});
dayListUl.addEventListener('click', moveToDay);

function moveToDay(e) {
  if (e.target.tagName !== 'LI') return;
  const targetDay = e.target.innerHTML;
  const moveToId = `${targetMonth}.${targetDay}`;
  const moveTo = document.getElementById(`${moveToId}`).offsetTop - 80;

  window.scrollTo(0, moveTo);
  selectDayField.style.display = 'none';
}

function dayListRender() {
  dayList = dayList.map((day) => `<li class="day-list-elem">${day}</li>`);

  dayListUl.innerHTML = dayList.join('');
}

function messageHanler(e) {
  if (e.target.tagName !== 'LI') return;
  targetMonth = e.target.innerHTML;
  document.getElementById('selectMonth').style.display = 'none';
  renderMessage(privateMessage[targetMonth]);
  dayListRender();
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
  dayList = [];
  privateMessage.forEach((day) => {
    const date = day.date;
    const messages = day.messages;
    const [splittedYear, splittedMonth, splittedDay] = day.date.split('.');
    dayList.push(splittedDay);

    aHtml.push(`<div class="message-date" id="${date}">${date}</div>`);

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
