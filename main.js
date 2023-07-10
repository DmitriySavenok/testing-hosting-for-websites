let background = document.querySelector('.tabs-background');
let pomodoroCountSpan = document.querySelector('.current-count');

let timer = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');
let pauseBtn = document.getElementById('pauseBtn');
let nextBtn = document.getElementById('nextBtn');
let resetBtn = document.getElementById('resetBtn');
let stopBtn = document.getElementById('stopBtn');

let pomodoroTabButton = document.getElementById('pomodoro');
let shortTabButton = document.getElementById('short-break');
let longTabButton = document.getElementById('long-break');

let minutesDefault = 25;

let pomodoroMinutes = 25;
let shortBreakMinutes = 5;
let longBreakMinutes = 15;

let necessaryCycles = 4;

let seconds = 0;
let minutes = 0;
let interval;
let timerStart = false;
let pomodoroCount = 1;
updateCountSpan();

let needRest = false;

pauseBtn.disabled = true;
resetBtn.disabled = true;
nextBtn.disabled = true;

// Правки

// Сгрупировать отслеживание нажатий на кнопки в одну функицю.
// Не прописывать нажатие кнопки старт для каждой вкладки, а просто блокировать вкладки
// Добавить фавиконку и подпись к таймеру в заголовке.
// Добавить звуковое оповещение

function updateCountSpan() {
  pomodoroCountSpan.textContent = pomodoroCount + ' / ' + necessaryCycles;
}

function updateTime() {
  timerStart = true;
  seconds--;
  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }
  if (minutes === minutesDefault) {
    minutes--;
  }

  if (minutes < 1) {
    minutes = 0;
  }

  if (minutes == 0 && seconds == 0 && background.classList.contains('pomodoro-background')) {
    if (pomodoroCount < necessaryCycles) {
      nextStage('short-break-background');
    }
    if (pomodoroCount == necessaryCycles) {
      nextStage('long-break-background');
    }
  }

  if (minutes == 0 && seconds == 0) {
    if (background.classList.contains('short-break-tab-background')) {
      nextStage('short-to-pomodoro-background');
    } else if (background.classList.contains('long-break-tab-background')) {
      nextStage('lont-to-pomodoro-background');
    }
  }

  timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  if (background.classList.contains('pomodoro-background')) {
    document.title = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} осталось работать`;
  } else if (background.classList.contains('short-break-tab-background')) {
    document.title = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} до конца перерыва`;
  } else if (background.classList.contains('long-break-tab-background')) {
    document.title = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} времени отдыха осталось`;
  }
}

function resetTime() {
  clearInterval(interval);
  minutes = minutesDefault;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  resetBtn.disabled = true;
  nextBtn.disabled = true;
  tabsEnable();
}

function startTime() {
  minutes = minutesDefault;
  interval = setInterval(updateTime, 1000);
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  resetBtn.disabled = false;
  nextBtn.disabled = false;
  tabsDisable();
}

function nextStage(targetStage) {
  if (targetStage == 'short-break-background') {
    alert('Необходимо сделать перерыв');
    resetTime();
    needRest = true;
    tabsEnable();
    shortTabButton.click();
  }
  if (targetStage == 'long-break-background') {
    alert('Необходимо отдохнуть');
    resetTime();
    needRest = true;
    tabsEnable();
    shortTabButton.disabled = true;
    longTabButton.click();
  }
  if (targetStage == 'short-to-pomodoro-background') {
    alert('Перерыв окончен');
    pomodoroCount++;
    updateCountSpan();
    needRest = false;
    resetTime();
    tabsEnable();
    pomodoroTabButton.click();
  }
  if (targetStage == 'lont-to-pomodoro-background') {
    alert('Отдых окончен');
    resetTime();
    needRest = false;
    pomodoroCount = 1;
    updateCountSpan();
    tabsEnable();
    pomodoroTabButton.click();
  }
}

function tabsDisable() {
  pomodoroTabButton.disabled = true;
  shortTabButton.disabled = true;
  longTabButton.disabled = true;
}

function tabsEnable() {
  pomodoroTabButton.disabled = false;
  shortTabButton.disabled = false;
  longTabButton.disabled = false;
}

startBtn.addEventListener('click', () => {
  if (background.classList.contains('pomodoro-background')) {
    minutesDefault = pomodoroMinutes;
  } else if (background.classList.contains('short-break-tab-background')) {
    minutesDefault = shortBreakMinutes;
  } else if (background.classList.contains('long-break-tab-background')) {
    minutesDefault = longBreakMinutes;
  }

  if (background.classList.contains('pomodoro-background') && needRest == false) {
    startTime();
  } else if (background.classList.contains('pomodoro-background') && needRest == true && pomodoroCount < necessaryCycles) {
    alert('Необходимо сделать перерыв');
  } else if (background.classList.contains('pomodoro-background') && needRest == true && pomodoroCount == necessaryCycles) {
    alert('Необходимо отдохнуть');
  } else if (needRest == false && background.classList.contains('short-break-tab-background')) {
    alert('Чтобы сделать перерыв, нужно поработать');
  } else if (needRest == false && pomodoroCount > 1 && background.classList.contains('short-break-tab-background')) {
    startTime();
  } else if (needRest && pomodoroCount < necessaryCycles && background.classList.contains('short-break-tab-background')) {
    startTime();
  } else if (needRest && pomodoroCount == necessaryCycles && background.classList.contains('long-break-tab-background')) {
    startTime();
  } else if (pomodoroCount != necessaryCycles && background.classList.contains('long-break-tab-background')) {
    alert('Чтобы уйти на долгий отдых, нужно завершить ' + necessaryCycles + ' цикла');
  } else if (needRest == false && pomodoroCount == necessaryCycles && background.classList.contains('long-break-tab-background')) {
    alert('Чтобы отдыхать, нужно завершить последний цикл');
  }
});

pauseBtn.addEventListener('click', () => {
  clearInterval(interval);
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  document.title = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} на паузе`;
});

resetBtn.addEventListener('click', () => {
  resetTime()
  seconds = 0;
  timer.textContent = `${minutes.toString()}:00`;
  document.title = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  timerStart = false;
});

nextBtn.addEventListener('click', () => {
  if (background.classList.contains('pomodoro-background')) {
    if (pomodoroCount < necessaryCycles) {
      nextStage('short-break-background');
    } else if (pomodoroCount == necessaryCycles) {
      nextStage('long-break-background');
    }
  } else if (background.classList.contains('short-break-tab-background')) {
    nextStage('short-to-pomodoro-background');
  } else if (background.classList.contains('long-break-tab-background')) {
    nextStage('lont-to-pomodoro-background');
  }
});

stopBtn.addEventListener('click', () => {
  if (confirm('Вы уверены, что хотите полностью завершить работу?') == true) {
    resetTime();
    needRest = false;
    pomodoroCount = 1;
    updateCountSpan();
    tabsEnable();
    pomodoroTabButton.click();
    document.title = 'Pomodoro'
  }
});

function trackingButtonClicks() {
  document.querySelectorAll('.tab-activation-button').forEach(el => {
    el.addEventListener('click', (e) => {

      if (e.target.id === 'pomodoro') {
        pomodoroTabsActive();
        pomodoroTabButton.classList.add('active-tab');
        shortTabButton.classList.remove('active-tab');
        longTabButton.classList.remove('active-tab');
      } else if (e.target.id === 'short-break') {
        shortTabsActive();
        pomodoroTabButton.classList.remove('active-tab');
        shortTabButton.classList.add('active-tab');
        longTabButton.classList.remove('active-tab');
      } else if (e.target.id === 'long-break') {
        longTabsActive();
        pomodoroTabButton.classList.remove('active-tab');
        shortTabButton.classList.remove('active-tab');
        longTabButton.classList.add('active-tab');
      }
    })
  })
}

function pomodoroTabsActive() {
  console.log("выбрана вкладка помодоро");
  seconds = 0;
  minutes = pomodoroMinutes;
  timer.textContent = `${minutes.toString()}:00`;
  timerStart = false;
  background.classList.add('pomodoro-background');
  background.classList.remove('short-break-tab-background');
  background.classList.remove('long-break-tab-background');
  document.title = 'Работа'
}

function shortTabsActive() {
  seconds = 0;
  minutes = shortBreakMinutes;
  timer.textContent = `${minutes.toString()}:00`;
  timerStart = false;
  background.classList.remove('pomodoro-background');
  background.classList.add('short-break-tab-background');
  background.classList.remove('long-break-tab-background');
  document.title = 'Короткий перерыв'
}

function longTabsActive() {
  seconds = 0;
  minutes = longBreakMinutes;
  timer.textContent = `${minutes.toString()}:00`;
  timerStart = false;
  background.classList.remove('pomodoro-background');
  background.classList.remove('short-break-tab-background');
  background.classList.add('long-break-tab-background');
  document.title = 'Отдых'
}

trackingButtonClicks();