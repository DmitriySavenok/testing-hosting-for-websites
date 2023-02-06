function unwrapQuestioncard() {
  console.log("Скрипт разворачивания карточки загружен")

  document.querySelectorAll('.question-card__toggle-button').forEach(elements => {
    console.log("найдены элементы")
    elements.addEventListener('click', (event) => {

      if (event.target.id === 'question_1_detailed') {
        questionCard = document.querySelector('#question_1').classList.toggle('question-card__toggle-button--pressed');
      } else if (event.target.id === 'question_2_detailed') {
        questionCard = document.querySelector('#question_2').classList.toggle('question-card__toggle-button--pressed');
      } else if (event.target.id === 'question_3_detailed') {
        questionCard = document.querySelector('#question_3').classList.toggle('question-card__toggle-button--pressed');
      } else if (event.target.id === 'question_4_detailed') {
        questionCard = document.querySelector('#question_4').classList.toggle('question-card__toggle-button--pressed');
      } else if (event.target.id === 'question_5_detailed') {
        questionCard = document.querySelector('#question_5').classList.toggle('question-card__toggle-button--pressed');
      }
    })
  })
}

unwrapQuestioncard();
