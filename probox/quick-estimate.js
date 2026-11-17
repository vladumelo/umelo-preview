(() => {
  'use strict';

  const engine = window.umeloQuickEstimate;
  const quote = document.querySelector('#quote');
  const cart = document.querySelector('#cart');
  if (!engine || typeof quote?.showModal !== 'function') return;

  const allowances = {
    'green-package': { title: 'Комплексное озеленение', rate: 4000, quantity: 20, from: true, note: 'Газон и посадки. Подготовку грунта и ассортимент растений уточним по участку.' },
    'canopy-basic': { title: 'Навес базовый', rate: 9000, quantity: 72, from: true, note: 'Каркас из профильной трубы, кровля из профлиста.' },
    'canopy-standard': { title: 'Навес стандарт', rate: 30000, quantity: 72, from: true, note: 'Индивидуальный дизайн, профлист, обшивка фасада кровли и потолка.' },
    'canopy-premium': { title: 'Навес премиум', rate: 75000, quantity: 72, from: true, note: 'Индивидуальный дизайн, профлист или гибкая черепица, обшивка фасада кровли, потолка и колонн, освещение.' },
  };
  const choices = {
    paving: { title: 'Покрытия', products: ['pavers', 'concrete', 'gravel'] },
    planting: { title: 'Озеленение', products: ['green-package', 'lawn', 'planting', 'flowerbeds'] },
    furniture: { title: 'Навесы и мебель', products: ['canopy-basic', 'canopy-standard', 'canopy-premium', 'pergola', 'benches', 'planters', 'terrace', 'tables'] },
  };
  const cartKey = 'umelo:probox:cart:v3';
  const cartOpen = document.querySelector('#cart-open');
  const cartCount = document.querySelector('#cart-count');
  const cartList = document.querySelector('#cart-list');
  const cartEmpty = document.querySelector('#cart-empty');
  const cartSummary = document.querySelector('#cart-summary');
  const cartTotal = document.querySelector('#cart-total');
  const cartNote = document.querySelector('#cart-note');
  const cartContact = document.querySelector('#cart-contact');
  const title = document.querySelector('#quote-title');
  const work = document.querySelector('#work');
  const quantity = document.querySelector('#quantity');
  const quantityField = document.querySelector('#quantity-field');
  const quantityLabel = quantityField.querySelector('span');
  const price = document.querySelector('#price');
  const note = document.querySelector('#quote-note');
  const addLabel = document.querySelector('#quote-add');
  const currency = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 });
  const units = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 3 });
  let currentLine;
  let editing;
  let trigger;

  function productFor(id) {
    if (typeof id !== 'string') return null;
    if (Object.hasOwn(allowances, id)) return { ...allowances[id], unit: 'м²' };
    const product = engine.getProduct(id);
    if (!product) return null;
    return { ...product, quantity: engine.makeLine(id).quantity };
  }

  function validQuantity(amount, unit) {
    return Number.isFinite(amount) && amount >= 1 && amount <= 1_000_000
      && (!(unit === 'шт.' || unit === 'компл.') || Number.isInteger(amount));
  }

  function normalizeCart(value) {
    if (!Array.isArray(value)) return [];
    const unique = new Map();
    for (const item of value) {
      const product = productFor(item?.productId);
      if (!product || (item.quantity !== null && !validQuantity(item.quantity, product.unit))) continue;
      unique.set(item.productId, {
        productId: item.productId,
        quantity: item.quantity,
        preparation: item.preparation !== false,
        materials: item.materials !== false,
      });
    }
    return [...unique.values()];
  }

  function loadCart() {
    try {
      const stored = localStorage.getItem(cartKey);
      return normalizeCart(stored === null ? engine.readLegacyCart() : JSON.parse(stored));
    } catch {
      return [];
    }
  }

  let items = loadCart();

  function saveCart() {
    try {
      localStorage.setItem(cartKey, JSON.stringify(items));
    } catch {
      // The current session still works when device storage is unavailable.
    }
  }

  function money(amount) {
    return `${currency.format(amount)} ₽`;
  }

  function totalFor(line, product) {
    if (line.quantity === null) return null;
    const total = product.rate === undefined ? engine.calculate(line).total : line.quantity * product.rate;
    return total === null ? null : Math.round(total);
  }

  function linePrice(total, product) {
    if (total === null) return 'По запросу';
    return `${product.from ? 'от' : '≈'} ${money(total)}`;
  }

  function readQuantity(unit) {
    const value = quantity.value.trim().replace(',', '.');
    const amount = Number(value);
    return /^\d+(?:\.\d{1,3})?$/.test(value) && validQuantity(amount, unit) ? amount : null;
  }

  function updateQuote() {
    const productId = work.value;
    const product = productFor(productId);
    if (!product) return;
    const previous = items.find(item => item.productId === productId);
    const config = { preparation: previous?.preparation !== false, materials: previous?.materials !== false };
    const hasPrice = totalFor({ ...config, productId, quantity: product.quantity }, product) !== null;
    const amount = hasPrice ? readQuantity(product.unit) : null;
    currentLine = hasPrice && amount === null ? null : { ...config, productId, quantity: amount };
    const total = currentLine ? totalFor(currentLine, product) : null;
    quantityField.hidden = !hasPrice;
    const measure = product.unit === 'м³' ? 'Объём' : product.unit === 'м²' ? 'Площадь' : 'Количество';
    quantityLabel.textContent = `${measure}, ${product.unit}`;
    quantity.setAttribute('aria-invalid', String(hasPrice && amount === null && quantity.value.trim() !== ''));
    price.hidden = total === null;
    price.textContent = total === null ? '' : linePrice(total, product);
    if (!hasPrice) {
      note.textContent = 'Стоимость уточним по запросу.';
    } else if (total === null) {
      note.textContent = `Укажите ${measure.toLowerCase()} от 1 до 1 000 000 ${product.unit}.`;
    } else if (product.rate !== undefined) {
      const rate = `${product.from ? 'От ' : ''}${money(product.rate)}/м².`;
      note.textContent = `${rate} ${product.note}`;
    } else {
      note.textContent = config.preparation && config.materials && ['pavers', 'concrete', 'gravel'].includes(productId)
        ? 'С основанием, материалами и доставкой. Точную цену уточним по участку.'
        : 'Точную цену уточним по участку.';
    }
    addLabel.disabled = currentLine === null;
    addLabel.firstChild.textContent = `${editing || previous ? 'Сохранить в корзине' : 'Добавить в корзину'} `;
  }

  function setQuote(choice, selectedId) {
    title.textContent = choice.title;
    work.replaceChildren(...choice.products.map((id) => new Option(productFor(id).title, id)));
    work.value = selectedId ?? choice.products[0];
    setQuantityFromCart();
    updateQuote();
    quote.showModal();
  }

  function setQuantityFromCart() {
    const previous = items.find(item => item.productId === work.value);
    quantity.value = previous?.quantity ?? productFor(work.value).quantity;
  }

  function createCartRow(line, product, total) {
    const row = document.createElement('li');
    row.className = 'cart-row';
    const edit = document.createElement('button');
    edit.type = 'button';
    edit.className = 'cart-edit';
    edit.textContent = product.title;
    edit.dataset.edit = line.productId;
    const detail = document.createElement('small');
    detail.textContent = line.quantity === null ? 'Уточним состав' : `${units.format(line.quantity)} ${product.unit}`;
    edit.append(detail);
    const value = document.createElement('strong');
    value.textContent = linePrice(total, product);
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'cart-remove';
    remove.dataset.remove = line.productId;
    remove.setAttribute('aria-label', `Убрать ${product.title.toLowerCase()}`);
    remove.textContent = '×';
    row.append(edit, value, remove);
    return row;
  }

  function renderCart() {
    let knownTotal = 0;
    let pending = 0;
    let hasStartingRate = false;
    const rows = [];
    const message = ['Здравствуйте! Хочу обсудить смету на благоустройство.'];
    for (const line of items) {
      const product = productFor(line.productId);
      const total = totalFor(line, product);
      knownTotal += total ?? 0;
      pending += Number(total === null);
      hasStartingRate ||= total !== null && product.from === true;
      rows.push(createCartRow(line, product, total));
      const size = line.quantity === null ? '' : `, ${units.format(line.quantity)} ${product.unit}`;
      message.push(`• ${product.title}${size} — ${linePrice(total, product)}`);
    }
    const priced = items.length > pending;
    const overall = priced ? `${hasStartingRate ? 'от' : '≈'} ${money(knownTotal)}` : 'По запросу';
    const caveats = [
      hasStartingRate ? 'Позиции с пометкой «от» учтены по начальной цене.' : '',
      pending && priced ? 'Позиции по запросу в сумму не входят.' : '',
    ].filter(Boolean).join(' ');
    cartCount.textContent = String(items.length);
    cartList.replaceChildren(...rows);
    cartList.hidden = !items.length;
    cartEmpty.hidden = Boolean(items.length);
    cartSummary.hidden = !items.length;
    cartTotal.textContent = overall;
    cartNote.textContent = caveats;
    cartNote.hidden = !caveats;
    if (priced) message.push(`Предварительно ${overall}.`);
    if (caveats) message.push(caveats);
    cartContact.href = engine.contactLinks(message.join('\n')).telegram;
  }

  function showCart() {
    renderCart();
    if (!cart.open) cart.showModal();
  }

  document.querySelectorAll('[data-choice]').forEach((button) => {
    button.addEventListener('click', () => {
      editing = null;
      trigger = button;
      setQuote(choices[button.dataset.choice]);
    });
  });

  cartOpen.hidden = false;
  cartOpen.addEventListener('click', () => {
    trigger = cartOpen;
    showCart();
  });
  cartList.addEventListener('click', (event) => {
    const remove = event.target.closest('[data-remove]');
    if (remove) {
      items = items.filter(item => item.productId !== remove.dataset.remove);
      saveCart();
      renderCart();
      (cartList.querySelector('[data-remove]') ?? cart.querySelector('[data-close]')).focus();
      return;
    }
    const edit = event.target.closest('[data-edit]');
    if (edit) {
      editing = edit.dataset.edit;
      cart.close();
      setQuote({ title: 'Позиция в корзине', products: [editing] }, editing);
    }
  });

  work.addEventListener('change', () => {
    setQuantityFromCart();
    updateQuote();
  });
  quantity.addEventListener('input', updateQuote);
  document.querySelector('#quick-form').addEventListener('submit', (event) => {
    event.preventDefault();
    if (!currentLine) return;
    const index = items.findIndex(item => item.productId === currentLine.productId);
    if (index < 0) items.push(currentLine);
    else items[index] = currentLine;
    saveCart();
    editing = null;
    quote.close();
    showCart();
  });

  for (const dialog of [cart, quote]) {
    dialog.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => dialog.close()));
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
  }
  quote.addEventListener('close', () => {
    if (editing) {
      editing = null;
      showCart();
    } else if (!cart.open) {
      trigger?.focus({ preventScroll: true });
    }
  });
  cart.addEventListener('close', () => {
    if (!quote.open) trigger?.focus({ preventScroll: true });
  });
  window.addEventListener('storage', (event) => {
    if (event.key === cartKey) {
      items = loadCart();
      renderCart();
    }
  });

  renderCart();
  const [legacyView, legacyId] = location.hash.slice(1).split('/');
  if (['estimate', 'request', 'max'].includes(legacyView)) {
    showCart();
  } else if (['product', 'work'].includes(legacyView) && productFor(legacyId)) {
    setQuote({ title: 'Быстрый расчёт', products: [legacyId] }, legacyId);
  } else if (legacyView === 'section') {
    const legacyChoice = { paths: 'paving', green: 'planting', furniture: 'furniture', canopies: 'furniture' }[legacyId];
    if (legacyChoice) setQuote(choices[legacyChoice]);
  }
})();
