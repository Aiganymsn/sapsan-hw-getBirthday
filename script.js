const date = document.getElementById('date');
const calculate = document.getElementById('calculate');
const result = document.querySelector('.result');

function calculateAge() {
  // new Date(). Создаёт объект Date с текущей датой и временем:
   const today = new Date();
   const birthDate = new Date(date.value);

    // Считаем год
    // Метод getMonth() возвращает месяц указанной даты по местному времени
    // getFullYear() возвращает год указанной даты по местному времени.

    let years;
    if (today.getMonth() > birthDate.getMonth() || (today.getMonth() == birthDate.getMonth() && today.getDate() >= birthDate.getDate())) {
        years = today.getFullYear() - birthDate.getFullYear();
    } else {
        years = today.getFullYear() - birthDate.getFullYear() - 1;
    }
   

   // Считаем месяц
   let months;
      if (today.getDate() >= birthDate.getDate()) {
        months = today.getMonth() - birthDate.getMonth();
      } else if (today.getDate() < birthDate.getDate()) {
        months = today.getMonth() - birthDate.getMonth() - 1;
      }

      if (months < 0) {
        months += 12
      }
      months = months < 0 ? months + 12 : months;

   // Считаем день
   let days;
      // дни месяцев в году
      const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (today.getDate() >= birthDate.getDate()) {
        days = today.getDate() - birthDate.getDate();
      } else {
        days = today.getDate() - birthDate.getDate() + monthDays[birthDate.getMonth()];
      }

      // результат
      // result.innerHTML = `<p class="birthdate">Вы родились ${birthDate.toDateString()}.</p>`;
      result.innerHTML += `<p class="age">Сейчас вам ${years} лет, ${months} месяцев и ${days} дней.</p>`;
      if (months == 0 && days == 0) {
        result.innerHTML += `<p class="wishing">С днем рождение!🎂🎈🎈</p>`;
      }
    }
    calculate.addEventListener('click', calculateAge);

    // запускаем вычесление
    // keypress() -  обработчик ввода символа с клавиатуры, либо, запускает это событие.
    document.addEventListener('keypress', (e) => {
      if (e.keyCode == 13) {
        calculate.click();
        console.log("date:", date.max);
      }
    });
    date.focus();