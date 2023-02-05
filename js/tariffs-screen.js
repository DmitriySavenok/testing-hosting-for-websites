function unwrapTariffcard() {
  console.log("Скрипт разворачивания карточки загружен")

  document.querySelectorAll('.tariff-card__toggle-button').forEach(el => {
    el.addEventListener('click', (e) => {

      if (e.target.id === 'basic-tariff-detailed') {
        basicTariffcard = document.querySelector('#basic-tariff').classList.toggle('tariff-card__toggle-button--pressed');
      } else if (e.target.id === 'standart-tariff-detailed') {
        basicTariffcard = document.querySelector('#standart-tariff').classList.toggle('tariff-card__toggle-button--pressed');
      } else if (e.target.id === 'vip-tariff-detailed') {
        basicTariffcard = document.querySelector('#vip-tariff').classList.toggle('tariff-card__toggle-button--pressed');
      }
    })
  })
}

unwrapTariffcard();
