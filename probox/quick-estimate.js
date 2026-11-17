(() => {
  const engine = window.umeloQuickEstimate;
  const quote = document.querySelector('#quote');
  if (!engine || typeof quote?.showModal !== 'function') return;

  if (/^#(?:estimate|request|max|(?:product|work|section)\/[\w-]+)$/.test(location.hash)) {
    location.replace(new URL(`details.html${location.hash}`, location.href));
    return;
  }

  const choices = {
    paving: { title: 'Покрытия', products: ['pavers', 'concrete', 'gravel'] },
    planting: { title: 'Озеленение', products: ['lawn', 'planting', 'flowerbeds'] },
    furniture: { title: 'Навесы и мебель', products: ['pergola', 'benches', 'planters', 'carport', 'terrace', 'tables'] },
  };
  const title = document.querySelector('#quote-title');
  const work = document.querySelector('#work');
  const quantity = document.querySelector('#quantity');
  const quantityField = document.querySelector('#quantity-field');
  const price = document.querySelector('#price');
  const note = document.querySelector('#quote-note');
  const contact = document.querySelector('#quote-contact');
  const details = document.querySelector('#quote-details');
  const currency = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 });
  const units = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 3 });
  let currentLine;
  let trigger;

  function selectedQuantity() {
    const value = quantity.value.trim().replace(',', '.');
    const amount = Number(value);
    return /^\d+(\.\d{1,3})?$/.test(value) && amount >= 1 && amount <= 1_000_000 ? amount : null;
  }

  function updateQuote() {
    const product = engine.getProduct(work.value);
    const defaults = engine.makeLine(product.id);
    const available = engine.calculate(defaults).total !== null;
    const amount = available ? selectedQuantity() : null;
    currentLine = amount === null ? null : { ...defaults, quantity: amount };
    const total = currentLine ? engine.calculate(currentLine).total : null;
    quantityField.hidden = !available;
    quantity.setAttribute('aria-invalid', String(available && amount === null && quantity.value.trim() !== ''));
    price.hidden = !available || total === null;
    price.textContent = total === null ? '' : `≈ ${currency.format(total)} ₽`;
    note.textContent = !available
      ? 'Посчитаем под ваш участок.'
      : total === null
        ? 'Укажите площадь от 1 м².'
        : 'С основанием, материалами и доставкой. Точную цену уточним по участку.';
    const summary = total === null ? '' : ` на ${units.format(amount)} ${product.unit}. Ориентир на сайте ${currency.format(total)} ₽`;
    contact.href = engine.contactLinks(`Здравствуйте! Хочу обсудить благоустройство. Вариант «${product.title}»${summary}.`).telegram;
    details.href = currentLine ? './details.html#estimate' : `./details.html#product/${product.id}`;
  }

  document.querySelectorAll('[data-choice]').forEach((link) => {
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
      const choice = choices[link.dataset.choice];
      event.preventDefault();
      trigger = link;
      title.textContent = choice.title;
      work.replaceChildren(...choice.products.map((id) => new Option(engine.getProduct(id).title, id)));
      quantity.value = engine.makeLine(work.value).quantity;
      updateQuote();
      quote.showModal();
    });
  });

  work.addEventListener('change', updateQuote);
  quantity.addEventListener('input', updateQuote);
  document.querySelector('#quick-form').addEventListener('submit', (event) => event.preventDefault());
  details.addEventListener('click', () => {
    if (currentLine && !engine.saveLine(currentLine)) {
      details.href = `./details.html#product/${currentLine.productId}`;
    }
  });
  quote.querySelector('[data-close]').addEventListener('click', () => quote.close());
  quote.addEventListener('click', (event) => {
    if (event.target === quote) quote.close();
  });
  quote.addEventListener('close', () => trigger?.focus({ preventScroll: true }));
})();
