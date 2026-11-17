const TONE_STORAGE_KEY = 'umelo-content-tone';
const toneLabels = {
  neutral: 'Нейтральный',
  business: 'Деловой',
  zoomer: 'Зумерский',
  concrete: 'Конкретный',
  folk: 'Народный',
  street: 'Пацанский',
  legal: 'Юридический',
  child: 'Детский',
  fastAndFurious: 'Форсаж',
  pseudoEnglish: 'English',
};

const siteCopy = {
  neutral: {
    heroTitle: 'Честная архитектура\nСроки. Смета. Результат',
    heroSubtitle: 'Архитектурное бюро для благоустройства, где идея сразу проверяется сроками, бюджетом и реализацией.',
    statPrimaryTitle: 'Сэкономили <span>50+</span> млн',
    statPrimaryText: 'Точные расчеты помогают клиентам принимать решения без лишних затрат.',
    statSecondaryTitle: 'Реализовано <span>&gt; 100 проектов</span> благоустройства',
    statSecondaryText: 'Работаем с дворами, общественными пространствами, ЖК и частными территориями. Соединяем идею, смету и реальную стройку в один понятный маршрут.',
    projectEyebrow: 'Проекты',
    projectTitle: 'Живой поток работ',
    projectIntro: 'Собрали проекты в одну непрерывную ленту: без тяжелого каталога, но с ощущением реального движения от идеи к площадке.',
    projectCards: {
      timeConcept: {
        tag: 'Общественное пространство',
        description: 'Современный сквер в неожиданном месте: маршрут, сценарии отдыха и спокойная городская среда.',
      },
      timeBridge: {
        tag: 'Пешеходная связь',
        description: 'Пластичный маршрут связывает зоны отдыха и делает прогулку понятной без лишней навигации.',
      },
      timeSquare: {
        tag: 'Городская площадка',
        description: 'Открытая зона для встреч, тихого отдыха и событий, которую можно собрать в реальный бюджет.',
      },
      chinaPavilion: {
        tag: 'Дворовая среда',
        description: 'Акцентная беседка и камерная зона отдыха для нового жилого комплекса.',
      },
      chinaYard: {
        tag: 'Благоустройство ЖК',
        description: 'Дворовая композиция, которая поддерживает архитектуру комплекса и не спорит с фасадами.',
      },
      chinaEntry: {
        tag: 'Входная группа',
        description: 'Чистый сценарий входа: понятный проход, визуальный акцент и аккуратная посадка.',
      },
    },
    competenciesTitle: 'Компетенции',
    competencies: {
      bim: 'Точные модели для точных бюджетов, сроков и решений на площадке.',
      designDocs: 'Практичные решения для дворов, общественных пространств и частных территорий.',
      workingDocs: 'Чертежи и спецификации, с которыми подрядчику проще строить без догадок.',
      supervision: 'Сопровождаем реализацию, чтобы проект не потерял смысл на стройке.',
    },
    blogTitle: 'Материалы и заметки',
    posts: {
      landscape: 'Подбор сценариев, покрытий, посадок и решений без лишних затрат.',
      curves: 'Как увязать сложную форму, конструктив и нормальную стройку.',
      maf: 'Что брать в проект, чтобы объект не рассыпался после первой зимы.',
      fullCycle: 'Когда одна команда ведет концепцию, документацию и реализацию.',
    },
    contactsTitle: 'Связаться с бюро',
    contactLabels: {
      location: 'АДРЕС',
      email: 'ПОЧТА',
      schedule: 'ГРАФИК',
      socials: 'СОЦСЕТИ',
    },
  },
  business: {
    heroTitle: 'Проектирование благоустройства\nСроки. Бюджет. Контроль',
    heroSubtitle: 'Берем задачу от идеи до рабочей документации и помогаем заранее оценить стоимость реализации.',
    statPrimaryTitle: 'Экономия клиентов: <span>50+ млн</span>',
    statPrimaryText: 'Расчеты и проектные решения снижают риск перерасхода на этапе закупок и строительства.',
    statSecondaryTitle: '<span>&gt; 100 проектов</span> доведены до результата',
    statSecondaryText: 'Проектируем дворы, общественные пространства, территории ЖК и частные участки. Держим связь между концепцией, сметой и строительной логикой.',
    projectEyebrow: 'Портфолио',
    projectTitle: 'Проекты в работе',
    projectIntro: 'Лента показывает разные типы задач: от городской среды до дворовых сценариев. Каждый проект проверяется бюджетом, сроками и реализацией.',
    projectCards: {
      timeConcept: { tag: 'Общественная территория', description: 'Концепция современного сквера с понятным маршрутом, зонами отдыха и реалистичной сметной рамкой.' },
      timeBridge: { tag: 'Пешеходная инфраструктура', description: 'Связь между зонами проекта, рассчитанная на удобное движение и контролируемую стоимость исполнения.' },
      timeSquare: { tag: 'Площадка событий', description: 'Открытое пространство для встреч и городских сценариев с понятной логикой эксплуатации.' },
      chinaPavilion: { tag: 'Двор ЖК', description: 'Акцентная зона отдыха для жилого комплекса, согласованная с общей архитектурой территории.' },
      chinaYard: { tag: 'Комплексное благоустройство', description: 'Дворовая композиция, которая поддерживает фасады, маршруты и ежедневные сценарии жителей.' },
      chinaEntry: { tag: 'Входная группа', description: 'Решение входной зоны с понятным проходом, визуальным акцентом и аккуратной посадкой.' },
    },
    competenciesTitle: 'Что делаем',
    competencies: {
      bim: 'BIM-модели помогают контролировать объемы, бюджет и проектные коллизии.',
      designDocs: 'Готовим проектную документацию под реальные задачи территории и заказчика.',
      workingDocs: 'Выпускаем рабочие чертежи и спецификации для понятной реализации.',
      supervision: 'Сопровождаем стройку и помогаем сохранить проектные решения на площадке.',
    },
    blogTitle: 'Экспертные материалы',
    posts: {
      landscape: 'Практика выбора сценариев, покрытий и посадок с учетом бюджета.',
      curves: 'Как соединить сложную форму, конструктив и технологию строительства.',
      maf: 'Материалы и решения для малых архитектурных форм с нормальным ресурсом.',
      fullCycle: 'Почему полный цикл снижает разрывы между концепцией, документацией и реализацией.',
    },
    contactsTitle: 'Обсудить проект',
    contactLabels: { location: 'АДРЕС', email: 'ПОЧТА', schedule: 'ГРАФИК', socials: 'КАНАЛЫ' },
  },
  zoomer: {
    heroTitle: 'Архитектура без вайба хаоса\nИдея. Смета. Результат',
    heroSubtitle: 'Делаем благоустройство так, чтобы было красиво, понятно и без сюрпризов в бюджете.',
    statPrimaryTitle: 'Сохранили клиентам <span>50+ млн</span>',
    statPrimaryText: 'Потому что сначала считаем и думаем, а уже потом красиво разгоняем идею.',
    statSecondaryTitle: '<span>&gt; 100 проектов</span>, которые не остались в папке',
    statSecondaryText: 'Дворы, ЖК, общественные места и частные территории. Берем идею, смету и стройку, собираем в один нормальный трек.',
    projectEyebrow: 'Что делали',
    projectTitle: 'Лента проектов без душного каталога',
    projectIntro: 'Просто поток работ: листай, смотри, цепляй референсы. Без ощущения, что ты попал в интернет-магазин плитки.',
    projectCards: {
      timeConcept: { tag: 'Городской вайб', description: 'Сквер, где есть маршрут, места для отдыха и ощущение, что тут правда можно проводить время.' },
      timeBridge: { tag: 'Связь зон', description: 'Переход, который не просто красивый на рендере, а помогает нормально двигаться по территории.' },
      timeSquare: { tag: 'Точка встреч', description: 'Площадка для людей, событий и спокойного сидения без ощущения случайной пустоты.' },
      chinaPavilion: { tag: 'Дворовый акцент', description: 'Беседка, которая делает двор запоминающимся, но не превращает его в декорацию.' },
      chinaYard: { tag: 'ЖК без скуки', description: 'Двор, который дружит с фасадами и дает жителям нормальные сценарии на каждый день.' },
      chinaEntry: { tag: 'Вход без квеста', description: 'Понятная входная зона: куда идти, где акцент, где зелень и почему это выглядит спокойно.' },
    },
    competenciesTitle: 'Что умеем',
    competencies: {
      bim: 'BIM, чтобы цифры, объемы и сроки не жили отдельной жизнью.',
      designDocs: 'Проектируем так, чтобы было красиво, практично и без лишнего пафоса.',
      workingDocs: 'Чертежи, по которым подрядчик не пишет сто уточняющих сообщений.',
      supervision: 'Смотрим за реализацией, чтобы стройка не съела идею проекта.',
    },
    blogTitle: 'Полезные разборы',
    posts: {
      landscape: 'Как выбрать сценарии, покрытия и посадки без лишних трат.',
      curves: 'Сложная форма без паники: конструктив, опалубка и нормальная стройка.',
      maf: 'МАФы, которые переживают зиму и не выглядят случайными.',
      fullCycle: 'Почему одна команда на весь цикл часто спасает нервы и бюджет.',
    },
    contactsTitle: 'Написать по проекту',
    contactLabels: { location: 'ГДЕ МЫ', email: 'ПОЧТА', schedule: 'КОГДА НА СВЯЗИ', socials: 'СОЦСЕТИ' },
  },
  concrete: {
    heroTitle: 'Проектируем благоустройство\nСчитаем. Чертим. Доводим',
    heroSubtitle: 'Идея сразу проходит проверку бюджетом, сроками и стройкой.',
    statPrimaryTitle: 'Сэкономили <span>50+ млн</span>',
    statPrimaryText: 'Считаем заранее. Убираем лишнее. Оставляем рабочее.',
    statSecondaryTitle: '<span>&gt; 100 проектов</span> реализовано',
    statSecondaryText: 'Дворы, ЖК, общественные пространства, частные территории. Даем маршрут от концепции до стройки.',
    projectEyebrow: 'Проекты',
    projectTitle: 'Работы в потоке',
    projectIntro: 'Одна лента. Без слайдеров и лишних блоков. Только проекты, изображения и короткая суть.',
    projectCards: {
      timeConcept: { tag: 'Сквер', description: 'Маршрут, отдых, городская среда. Без декоративного шума.' },
      timeBridge: { tag: 'Связь', description: 'Пешеходная ось, которая соединяет зоны и держит сценарий движения.' },
      timeSquare: { tag: 'Площадка', description: 'Место для встреч и событий. Сразу в бюджетной логике.' },
      chinaPavilion: { tag: 'Акцент', description: 'Беседка и тихая зона отдыха для двора ЖК.' },
      chinaYard: { tag: 'Двор', description: 'Композиция под фасады, маршруты и ежедневное использование.' },
      chinaEntry: { tag: 'Вход', description: 'Понятный проход, акцент, посадка. Ничего лишнего.' },
    },
    competenciesTitle: 'Делаем',
    competencies: {
      bim: 'Модели. Объемы. Проверка решений.',
      designDocs: 'Проектная документация без лишней воды.',
      workingDocs: 'Чертежи, спецификации, понятные узлы.',
      supervision: 'Контроль стройки и сохранение проектного смысла.',
    },
    blogTitle: 'Разборы',
    posts: {
      landscape: 'Сценарии, покрытия, посадки. Что выбрать и где не переплатить.',
      curves: 'Криволинейные формы: как сделать и не развалить бюджет.',
      maf: 'МАФы: материалы, технологии, ресурс.',
      fullCycle: 'Полный цикл: меньше разрывов, меньше переделок.',
    },
    contactsTitle: 'Связаться',
    contactLabels: { location: 'АДРЕС', email: 'ПОЧТА', schedule: 'ГРАФИК', socials: 'СВЯЗЬ' },
  },
  folk: {
    heroTitle: 'Делаем понятное благоустройство\nСчитаем деньги и сроки',
    heroSubtitle: 'Помогаем превратить идею в нормальный проект, который можно построить без лишней путаницы.',
    statPrimaryTitle: 'Сберегли клиентам <span>50+ млн</span>',
    statPrimaryText: 'Когда все посчитано заранее, проще не потратить лишнего.',
    statSecondaryTitle: 'Сделали больше <span>100 проектов</span>',
    statSecondaryText: 'Работаем с дворами, скверами, территориями ЖК и частными участками. Объясняем путь от идеи до стройки простым языком.',
    projectEyebrow: 'Наши работы',
    projectTitle: 'Проекты идут одной лентой',
    projectIntro: 'Здесь без сложного каталога: просто смотрите работы подряд и останавливайтесь на том, что интересно.',
    projectCards: {
      timeConcept: { tag: 'Сквер для людей', description: 'Спокойное место для прогулок и отдыха, где понятно, куда идти и где посидеть.' },
      timeBridge: { tag: 'Удобный проход', description: 'Маршрут связывает части сквера и помогает людям двигаться без лишних обходов.' },
      timeSquare: { tag: 'Место встреч', description: 'Открытая площадка, где можно встретиться, отдохнуть или провести небольшое событие.' },
      chinaPavilion: { tag: 'Уютный двор', description: 'Беседка и место для отдыха, чтобы двор был не пустым, а живым.' },
      chinaYard: { tag: 'Двор ЖК', description: 'Решение, которое подходит дому, фасадам и обычной жизни жителей.' },
      chinaEntry: { tag: 'Вход во двор', description: 'Понятная входная зона: прошел, увидел акцент, попал куда нужно.' },
    },
    competenciesTitle: 'Чем помогаем',
    competencies: {
      bim: 'Делаем модели, чтобы заранее понимать объемы и стоимость.',
      designDocs: 'Продумываем решения для дворов, скверов и частных территорий.',
      workingDocs: 'Готовим чертежи, по которым строителям понятно, что делать.',
      supervision: 'Помогаем следить, чтобы на стройке не ушли от проекта.',
    },
    blogTitle: 'Полезно знать',
    posts: {
      landscape: 'Как выбрать покрытия, растения и сценарии без лишних расходов.',
      curves: 'Как подойти к сложной форме, чтобы ее реально построили.',
      maf: 'Из чего делать малые формы, чтобы они служили дольше.',
      fullCycle: 'Почему удобно, когда проект ведет одна команда.',
    },
    contactsTitle: 'Давайте обсудим',
    contactLabels: { location: 'ГДЕ НАЙТИ', email: 'ПОЧТА', schedule: 'КОГДА РАБОТАЕМ', socials: 'СОЦСЕТИ' },
  },
  street: {
    heroTitle: 'Архитектура по делу\nСмета ровная, результат на месте',
    heroSubtitle: 'Берем идею, считаем как надо и доводим до проекта, за который не стыдно перед районом.',
    statPrimaryTitle: 'Сохранили <span>50+ млн</span> клиентских денег',
    statPrimaryText: 'Не раскидываем бюджет на понты. Считаем, режем лишнее, держим смысл.',
    statSecondaryTitle: '<span>&gt; 100 проектов</span> уже в движении',
    statSecondaryText: 'Дворы, скверы, ЖК и частные территории. Собираем идею, смету и стройку в один нормальный маршрут.',
    projectEyebrow: 'Наш движ',
    projectTitle: 'Лента работ без лишнего шума',
    projectIntro: 'Проекты идут потоком: смотри, тормози на нужной карточке, забирай ощущение. Никакого тяжелого каталога.',
    projectCards: {
      timeConcept: { tag: 'Сквер на стиле', description: 'Тихий маршрут, места для отдыха и городская среда, где все стоит на своих местах.' },
      timeBridge: { tag: 'Связка зон', description: 'Проход, который держит движение и не заставляет людей петлять просто так.' },
      timeSquare: { tag: 'Точка сбора', description: 'Площадка для встреч и событий, собранная без лишней показухи.' },
      chinaPavilion: { tag: 'Дворовый акцент', description: 'Беседка и спокойное место, где двор получает свой характер.' },
      chinaYard: { tag: 'Двор ЖК', description: 'Композиция, которая держится рядом с фасадами и не спорит с домом.' },
      chinaEntry: { tag: 'Входная точка', description: 'Проход понятный, акцент на месте, посадка аккуратная. Все по красоте.' },
    },
    competenciesTitle: 'Что умеем по делу',
    competencies: {
      bim: 'BIM держит объемы и деньги под контролем.',
      designDocs: 'Проектируем красиво, но без отрыва от реальности.',
      workingDocs: 'Чертежи такие, чтобы на стройке не гадали.',
      supervision: 'Смотрим, чтобы стройка не свернула с маршрута.',
    },
    blogTitle: 'Разговор по делу',
    posts: {
      landscape: 'Как выбрать покрытия и посадки, чтобы бюджет не ушел в туман.',
      curves: 'Кривая форма без кривой стройки: что важно учесть.',
      maf: 'МАФы, которые держатся, а не просто красиво стоят на рендере.',
      fullCycle: 'Одна команда на весь путь: меньше суеты, больше результата.',
    },
    contactsTitle: 'Выходи на связь',
    contactLabels: { location: 'БАЗА', email: 'ЯЩИК', schedule: 'ГРАФИК', socials: 'КАНАЛЫ' },
  },
  legal: {
    heroTitle: 'Проектирование благоустройства\nНа условиях сметы и результата',
    heroSubtitle: 'Бюро осуществляет разработку решений, предварительную оценку стоимости и сопровождение проектной логики до стадии реализации.',
    statPrimaryTitle: 'Подтвержденный эффект: <span>50+ млн</span>',
    statPrimaryText: 'Экономия достигается путем расчетной проверки решений и исключения необоснованных затрат.',
    statSecondaryTitle: 'Выполнено более <span>100 проектов</span>',
    statSecondaryText: 'Предмет работ включает дворовые территории, общественные пространства, участки жилых комплексов и частные территории. Процесс выстроен от концепции до реализации.',
    projectEyebrow: 'Перечень проектов',
    projectTitle: 'Непрерывная демонстрация работ',
    projectIntro: 'Проекты представлены в формате горизонтальной ленты для последовательного ознакомления без изменения структуры навигации сайта.',
    projectCards: {
      timeConcept: { tag: 'Общественная территория', description: 'Концепция сквера предусматривает маршруты, зоны отдыха и параметры последующей реализации.' },
      timeBridge: { tag: 'Пешеходная связь', description: 'Элемент обеспечивает связность функциональных зон и поддерживает сценарий движения пользователей.' },
      timeSquare: { tag: 'Площадка общего пользования', description: 'Пространство рассчитано на встречи, спокойный отдых и возможные общественные сценарии.' },
      chinaPavilion: { tag: 'Дворовая зона', description: 'Акцентный объект формирует место отдыха в составе благоустройства жилого комплекса.' },
      chinaYard: { tag: 'Благоустройство ЖК', description: 'Композиция двора согласована с архитектурным контекстом и ежедневными маршрутами жителей.' },
      chinaEntry: { tag: 'Входная группа', description: 'Решение определяет понятный проход, визуальный акцент и озеленение входной зоны.' },
    },
    competenciesTitle: 'Состав компетенций',
    competencies: {
      bim: 'Информационное моделирование применяется для контроля объемов, сроков и проектных решений.',
      designDocs: 'Проектная документация разрабатывается с учетом функции территории и требований заказчика.',
      workingDocs: 'Рабочая документация включает чертежи и спецификации для последующего выполнения работ.',
      supervision: 'Сопровождение реализации направлено на сохранение проектных решений на строительной площадке.',
    },
    blogTitle: 'Информационные материалы',
    posts: {
      landscape: 'Рекомендации по выбору сценариев, покрытий, посадок и проектных решений.',
      curves: 'Порядок увязки криволинейных форм, конструктива и строительной технологии.',
      maf: 'Материалы и технологии малых архитектурных форм с учетом срока эксплуатации.',
      fullCycle: 'Преимущества единого исполнителя на этапах концепции, документации и реализации.',
    },
    contactsTitle: 'Контактные сведения',
    contactLabels: { location: 'МЕСТОНАХОЖДЕНИЕ', email: 'ЭЛЕКТРОННАЯ ПОЧТА', schedule: 'РЕЖИМ РАБОТЫ', socials: 'КАНАЛЫ СВЯЗИ' },
  },
  child: {
    heroTitle: 'Придумываем красивые места\nИ сразу считаем, как их построить',
    heroSubtitle: 'Мы помогаем идее стать понятным проектом: где гулять, где сидеть, сколько это стоит и как это сделать.',
    statPrimaryTitle: 'Сберегли <span>50+ млн</span>',
    statPrimaryText: 'Это как заранее проверить список покупок, чтобы не взять лишнего.',
    statSecondaryTitle: 'Сделали больше <span>100 проектов</span>',
    statSecondaryText: 'Работаем с дворами, скверами, домами и частными участками. Соединяем картинку, деньги и стройку в один понятный путь.',
    projectEyebrow: 'Работы',
    projectTitle: 'Проекты плывут одной лентой',
    projectIntro: 'Карточки едут друг за другом, как маленький поезд с нашими работами. Можно остановиться и спокойно рассмотреть.',
    projectCards: {
      timeConcept: { tag: 'Сквер', description: 'Место, где можно гулять, сидеть, встречаться и чувствовать себя спокойно.' },
      timeBridge: { tag: 'Дорожка', description: 'Она помогает перейти из одной части сквера в другую без лишних кругов.' },
      timeSquare: { tag: 'Площадка', description: 'Открытое место для встреч, отдыха и маленьких городских событий.' },
      chinaPavilion: { tag: 'Беседка', description: 'Уютная точка во дворе, где можно отдохнуть и спрятаться от суеты.' },
      chinaYard: { tag: 'Двор', description: 'Двор, который подходит дому и помогает жителям проводить время рядом.' },
      chinaEntry: { tag: 'Вход', description: 'Понятное место, где легко найти дорогу и сразу увидеть красивый акцент.' },
    },
    competenciesTitle: 'Что мы умеем',
    competencies: {
      bim: 'Собираем цифровую модель, чтобы заранее увидеть важные детали.',
      designDocs: 'Придумываем решения для дворов, скверов и участков.',
      workingDocs: 'Рисуем понятные чертежи, чтобы строителям было проще.',
      supervision: 'Смотрим, чтобы на стройке получилось похоже на проект.',
    },
    blogTitle: 'Простые объяснения',
    posts: {
      landscape: 'Как выбрать дорожки, растения и места для отдыха.',
      curves: 'Как построить сложную форму, если она не похожа на простой квадрат.',
      maf: 'Из чего делают лавочки, навесы и другие маленькие объекты.',
      fullCycle: 'Почему удобно, когда одна команда ведет проект от начала до конца.',
    },
    contactsTitle: 'Напишите нам',
    contactLabels: { location: 'ГДЕ МЫ', email: 'ПОЧТА', schedule: 'КОГДА РАБОТАЕМ', socials: 'СОЦСЕТИ' },
  },
  fastAndFurious: {
    heroTitle: 'Архитектура на полном ходу\nКоманда. Смета. Финиш',
    heroSubtitle: 'Вы даете идею, мы выводим ее на трассу проекта: считаем, собираем маршрут и держим результат до финиша.',
    statPrimaryTitle: 'Сняли с бюджета лишние <span>50+ млн</span>',
    statPrimaryText: 'Когда расчет держит руль, проект не заносит на поворотах.',
    statSecondaryTitle: '<span>&gt; 100 проектов</span> прошли маршрут',
    statSecondaryText: 'Дворы, общественные пространства, ЖК и частные территории. Концепция, смета и стройка идут в одной команде.',
    projectEyebrow: 'Гараж работ',
    projectTitle: 'Проекты идут потоком',
    projectIntro: 'Лента движется спокойно, но без остановки: карточки сменяют друг друга, как машины в ночном потоке.',
    projectCards: {
      timeConcept: { tag: 'Городская трасса', description: 'Сквер с маршрутом, точками отдыха и характером, который держит линию до результата.' },
      timeBridge: { tag: 'Связка маршрута', description: 'Переход соединяет зоны и не дает сценарию движения потерять темп.' },
      timeSquare: { tag: 'Стартовая площадка', description: 'Открытое место для встреч и событий, собранное без лишнего дыма.' },
      chinaPavilion: { tag: 'Дворовый акцент', description: 'Беседка работает как яркая деталь маршрута, но не перетягивает весь проект на себя.' },
      chinaYard: { tag: 'Дворовой маршрут', description: 'Композиция держит связь с фасадами, людьми и ежедневным движением территории.' },
      chinaEntry: { tag: 'Вход на трассу', description: 'Понятный вход, аккуратный акцент и зеленый ритм без лишнего риска.' },
    },
    competenciesTitle: 'Что в нашей команде',
    competencies: {
      bim: 'BIM держит приборы: объемы, сроки и бюджет видно заранее.',
      designDocs: 'Концепцию не бросаем на старте, доводим до проектной логики.',
      workingDocs: 'Чертежи дают стройке маршрут без лишних виражей.',
      supervision: 'На реализации смотрим, чтобы проект не ушел с трассы.',
    },
    blogTitle: 'Записки с маршрута',
    posts: {
      landscape: 'Как выбрать покрытия, посадки и сценарии, чтобы бюджет не ушел в занос.',
      curves: 'Сложная форма, конструктив и опалубка: держим поворот.',
      maf: 'МАФы с ресурсом: детали, которые не сходят с дистанции после зимы.',
      fullCycle: 'Одна команда на маршрут: меньше разрывов, больше контроля.',
    },
    contactsTitle: 'Выйти на связь',
    contactLabels: { location: 'ТОЧКА СБОРА', email: 'КАНАЛ', schedule: 'ВРЕМЯ ЗАЕЗДА', socials: 'СВЯЗЬ' },
  },
  pseudoEnglish: {
    heroTitle: 'Chestnaya arkhitekturas\nsrokes. smetaes. resultes',
    heroSubtitle: 'Buroes for blagoustroystvoes: ideaes проверяем через srokes, budgetes и stroika-resultes.',
    statPrimaryTitle: 'Sekonomili <span>50+ mlnes</span>',
    statPrimaryText: 'Tochnye raschetes помогают clientes не тратить лишние moneyes.',
    statSecondaryTitle: 'Sdelano <span>&gt; 100 projectes</span> blagoustroystva',
    statSecondaryText: 'Dvoryes, skveres, ZhKes и private territoriyes. Ideaes, smetaes и stroikaes собираем в один понятный routes.',
    projectEyebrow: 'Projectes',
    projectTitle: 'Endless lentaes rabotes',
    projectIntro: 'Projectes едут одним flowes: смотрим, scrollim, выбираем нужные kartochkes без тяжелого cataloges.',
    projectCards: {
      timeConcept: { tag: 'Public spaces', description: 'Skveres with routes, otdyh-zones и calm gorodskaya sredaes.' },
      timeBridge: { tag: 'Peshkom-linkes', description: 'Mostik-routes соединяет zones и делает progulkaes понятными.' },
      timeSquare: { tag: 'Meeting places', description: 'Open ploshchadkaes for vstreches, eventes и real budgetes.' },
      chinaPavilion: { tag: 'Dvor accents', description: 'Besedkaes и quiet otdyh-zones для new ZhK-dvores.' },
      chinaYard: { tag: 'ZhK dvores', description: 'Dvor-compositiones дружит with facades, routes и zhitel scenariyes.' },
      chinaEntry: { tag: 'Vhod groups', description: 'Ponyatny prohodes, visual accentes и akkuratnye posadkes.' },
    },
    competenciesTitle: 'Competencieses',
    competencies: {
      bim: 'BIM-modeles держат volumes, budgetes и srokes.',
      designDocs: 'Project documentationes для dvores, skveres и private territoriyes.',
      workingDocs: 'Rabochie chertezhes, чтобы stroitelies не гадали.',
      supervision: 'Supervisiones, чтобы stroikaes не съела ideaes.',
    },
    blogTitle: 'Materiales and zametkes',
    posts: {
      landscape: 'Scenariyes, pokrytiyes, posadkes и reshniyes без лишних zatrates.',
      curves: 'Krivolineynye formes, konstruktives и normal stroikaes.',
      maf: 'MAFes: materiales, technologiyes и winter-proof resurses.',
      fullCycle: 'One commandes ведет conceptes, documentationes и realizations.',
    },
    contactsTitle: 'Contactes with buroes',
    contactLabels: { location: 'ADRESES', email: 'MAILBOXES', schedule: 'SCHEDULES', socials: 'SOCIALES' },
  },
};

const fsBurger = document.querySelector('.fs-burger');
const fsMobile = document.querySelector('.fs-mobile');
const fsMobileLinks = document.querySelectorAll('.fs-mobile a');
const fsRevealItems = document.querySelectorAll('.fs-reveal');

const getCopyValue = (copy, path) => path.split('.').reduce((value, key) => value?.[key], copy);

const servicesCopy = {
  title: 'Услуги',
  items: [
    {
      title: 'Оптимизация вашего проекта',
      text: 'Анализируем решения и пересобираем проект под ваш бюджет',
    },
    {
      title: 'Проектно-сметная документация',
      text: 'Проектируем так, чтобы можно было построить, опираясь на цифры и здравый смысл',
    },
    {
      title: 'Строительно-монтажные работы',
      text: 'Берём все организационные вопросы по стройке на себя',
    },
    {
      title: 'Авторский надзор',
      text: '',
    },
  ],
};

const applyStaticSectionContent = () => {
  const servicesSectionTitle = document.querySelector('.fs-competencies .fs-section-title');

  if (servicesSectionTitle) {
    servicesSectionTitle.textContent = servicesCopy.title;
  }

  const serviceCards = document.querySelectorAll('.fs-competencies .fs-info-card');

  serviceCards.forEach((card, index) => {
    const content = servicesCopy.items[index];

    if (!content) {
      return;
    }

    const title = card.querySelector('h3');
    const text = card.querySelector('p');

    if (title) {
      title.textContent = content.title;
    }

    if (text) {
      text.textContent = content.text;
    }
  });
};

const getPublishedMaterials = () => {
  const materials = window.__UMELO_MATERIALS__;

  if (!Array.isArray(materials)) {
    return [];
  }

  return materials
    .filter((material) => material?.isPublished && material?.slug)
    .sort(
      (left, right) =>
        new Date(right.publishedAt || 0).getTime() - new Date(left.publishedAt || 0).getTime(),
    );
};

const applyMaterialsPreview = () => {
  const materials = getPublishedMaterials();
  if (materials.length === 0) return;

  document.querySelectorAll('.fs-blog a.fs-post').forEach((card, index) => {
    const material = materials[index];
    card.hidden = !material;
    if (!material) return;

    card.href = `/umelo-preview/materials/${material.slug}/`;
    const image = card.querySelector('.fs-post__media img');
    if (image.getAttribute('src') !== material.coverImage) image.src = material.coverImage;
    card.querySelector('h3').textContent = material.title;
    card.querySelector('p').textContent = material.excerpt;
  });
};

const applyCopy = (tone) => {
  const copy = siteCopy[tone] || siteCopy.neutral;

  document.querySelectorAll('[data-copy]').forEach((element) => {
    const value = getCopyValue(copy, element.dataset.copy) ?? getCopyValue(siteCopy.neutral, element.dataset.copy);
    if (typeof value === 'string') {
      element.textContent = value;
    }
  });

  document.querySelectorAll('[data-copy-html]').forEach((element) => {
    const value = getCopyValue(copy, element.dataset.copyHtml) ?? getCopyValue(siteCopy.neutral, element.dataset.copyHtml);
    if (typeof value === 'string') {
      element.innerHTML = value;
    }
  });

  applyStaticSectionContent();
};

const readStoredTone = () => {
  try {
    const storedTone = window.localStorage.getItem(TONE_STORAGE_KEY);
    return storedTone && siteCopy[storedTone] ? storedTone : 'neutral';
  } catch {
    return 'neutral';
  }
};

const storeTone = (tone) => {
  try {
    window.localStorage.setItem(TONE_STORAGE_KEY, tone);
  } catch {
    // localStorage can be unavailable in strict privacy modes.
  }
};

const isProjectFeedDebugEnabled = () => {
  try {
    if (window.__UMELO_HOME_DEBUG__ === true) {
      return true;
    }

    const params = new URLSearchParams(window.location.search);
    return (
      params.get('debug-feed') === '1' ||
      params.get('feed-debug') === '1' ||
      params.get('debug') === 'feed'
    );
  } catch {
    return false;
  }
};

const createProjectFeedService = () => ({
  async listPublishedProjectMedia() {
    const pendingItems = window.__UMELO_PROJECT_MEDIA_PROMISE__;

    if (pendingItems && typeof pendingItems.then === 'function') {
      const resolvedItems = await pendingItems;
      const loadError = window.__UMELO_PROJECT_FEED_DEBUG__?.error;
      if (loadError) {
        throw loadError;
      }

      return Array.isArray(resolvedItems)
        ? resolvedItems.filter((item) => item?.imageUrl)
        : [];
    }

    const items = window.__UMELO_PROJECT_MEDIA__;
    if (!Array.isArray(items)) {
      throw new Error('Project feed bootstrap did not initialize. Check home-feed.bundle.js.');
    }

    return Array.isArray(items)
      ? items.filter((item) => item?.imageUrl)
      : [];
  },
});

const normalizeProjectFeedItems = (items) => {
  const seenIds = new Set();
  const seenUrls = new Set();

  return items
    .filter((item) => {
      if (!item?.imageUrl) {
        return false;
      }

      const itemId = item.id || null;
      const imageUrl = item.imageUrl;

      if ((itemId && seenIds.has(itemId)) || seenUrls.has(imageUrl)) {
        return false;
      }

      if (itemId) {
        seenIds.add(itemId);
      }

      seenUrls.add(imageUrl);
      return true;
    })
    .sort((left, right) => {
      const leftProjectOrder = Number(left?.projectSortOrder ?? 0);
      const rightProjectOrder = Number(right?.projectSortOrder ?? 0);
      const leftMediaOrder = Number(left?.mediaSortOrder ?? 0);
      const rightMediaOrder = Number(right?.mediaSortOrder ?? 0);

      return leftProjectOrder - rightProjectOrder || leftMediaOrder - rightMediaOrder;
    });
};

const PROJECT_MARQUEE_SPEED = 26;
const PROJECT_MARQUEE_MAX_VELOCITY = 960;
const PROJECT_MARQUEE_INERTIA_DECAY = 0.95;
const PROJECT_MARQUEE_MIN_INERTIA = 14;
const projectMarqueeState = {
  frameId: 0,
  offset: 0,
  lastTimestamp: 0,
  cycleWidth: 0,
  initialized: false,
  resizeTimer: 0,
  isDragging: false,
  pointerId: null,
  lastPointerX: 0,
  lastPointerTimestamp: 0,
  velocity: 0,
  autoDirection: 1,
};

const stopProjectMarqueeAnimation = () => {
  if (projectMarqueeState.frameId) {
    window.cancelAnimationFrame(projectMarqueeState.frameId);
    projectMarqueeState.frameId = 0;
  }

  projectMarqueeState.lastTimestamp = 0;
};

const clampProjectMarqueeVelocity = (value) =>
  Math.max(-PROJECT_MARQUEE_MAX_VELOCITY, Math.min(PROJECT_MARQUEE_MAX_VELOCITY, value));

const normalizeProjectMarqueeOffset = (offset) => {
  const cycleWidth = projectMarqueeState.cycleWidth;

  if (!cycleWidth) {
    return 0;
  }

  let nextOffset = offset % cycleWidth;

  if (nextOffset < 0) {
    nextOffset += cycleWidth;
  }

  return nextOffset;
};

const applyProjectMarqueeOffset = () => {
  const track = document.querySelector('[data-project-track]');

  if (!track) {
    return;
  }

  projectMarqueeState.offset = normalizeProjectMarqueeOffset(projectMarqueeState.offset);
  track.style.transform = `translate3d(${-projectMarqueeState.offset}px, 0, 0)`;
};

const updateProjectMarqueeDirection = (velocity) => {
  if (Math.abs(velocity) < 1) {
    return;
  }

  projectMarqueeState.autoDirection = velocity >= 0 ? 1 : -1;
};

const endProjectMarqueeDrag = (pointerId = projectMarqueeState.pointerId) => {
  if (!projectMarqueeState.isDragging) {
    return;
  }

  if (pointerId !== null && projectMarqueeState.pointerId !== null && pointerId !== projectMarqueeState.pointerId) {
    return;
  }

  const marquee = document.querySelector('[data-project-marquee]');

  projectMarqueeState.isDragging = false;
  projectMarqueeState.pointerId = null;
  projectMarqueeState.lastPointerX = 0;
  projectMarqueeState.lastPointerTimestamp = 0;
  updateProjectMarqueeDirection(projectMarqueeState.velocity);

  if (marquee) {
    marquee.dataset.dragging = 'false';
  }

  document.documentElement.classList.remove('is-project-dragging');
};

const cloneProjectCard = (card) => {
  const clone = card.cloneNode(true);
  clone.dataset.projectClone = 'true';
  clone.setAttribute('aria-hidden', 'true');
  clone.setAttribute('tabindex', '-1');
  return clone;
};

const animateProjectMarquee = () => {
  const marquee = document.querySelector('[data-project-marquee]');
  const track = document.querySelector('[data-project-track]');

  if (!marquee || !track || !projectMarqueeState.cycleWidth) {
    stopProjectMarqueeAnimation();
    return;
  }

  const tick = (timestamp) => {
    if (!track.isConnected || !marquee.isConnected) {
      stopProjectMarqueeAnimation();
      return;
    }

    if (!projectMarqueeState.lastTimestamp) {
      projectMarqueeState.lastTimestamp = timestamp;
    }

    const delta = Math.min(timestamp - projectMarqueeState.lastTimestamp, 48);
    projectMarqueeState.lastTimestamp = timestamp;

    if (!projectMarqueeState.isDragging) {
      const deltaSeconds = delta / 1000;

      if (Math.abs(projectMarqueeState.velocity) >= PROJECT_MARQUEE_MIN_INERTIA) {
        projectMarqueeState.offset += projectMarqueeState.velocity * deltaSeconds;
        projectMarqueeState.velocity *= Math.pow(
          PROJECT_MARQUEE_INERTIA_DECAY,
          delta / 16.6667,
        );
        updateProjectMarqueeDirection(projectMarqueeState.velocity);
      } else {
        projectMarqueeState.velocity = 0;
        projectMarqueeState.offset +=
          deltaSeconds * PROJECT_MARQUEE_SPEED * projectMarqueeState.autoDirection;
      }

      applyProjectMarqueeOffset();
    }

    projectMarqueeState.frameId = window.requestAnimationFrame(tick);
  };

  stopProjectMarqueeAnimation();
  projectMarqueeState.frameId = window.requestAnimationFrame(tick);
};

const ensureProjectMarqueeBindings = () => {
  if (projectMarqueeState.initialized) {
    return;
  }

  const handleResize = () => {
    window.clearTimeout(projectMarqueeState.resizeTimer);
    projectMarqueeState.resizeTimer = window.setTimeout(() => {
      buildProjectMarquee();
    }, 120);
  };

  const handleVisibilityChange = () => {
    if (document.hidden) {
      stopProjectMarqueeAnimation();
      return;
    }

    projectMarqueeState.lastTimestamp = 0;
    animateProjectMarquee();
  };

  const handlePointerDown = (event) => {
    if (!projectMarqueeState.cycleWidth) {
      return;
    }

    if (event.pointerType === 'mouse' && event.button !== 0) {
      return;
    }

    projectMarqueeState.isDragging = true;
    projectMarqueeState.pointerId = event.pointerId;
    projectMarqueeState.lastPointerX = event.clientX;
    projectMarqueeState.lastPointerTimestamp = event.timeStamp || performance.now();
    projectMarqueeState.velocity = 0;

    if (event.currentTarget instanceof HTMLElement) {
      event.currentTarget.dataset.dragging = 'true';
      event.currentTarget.setPointerCapture?.(event.pointerId);
    }

    document.documentElement.classList.add('is-project-dragging');
  };

  const handlePointerMove = (event) => {
    if (!projectMarqueeState.isDragging || projectMarqueeState.pointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - projectMarqueeState.lastPointerX;
    const nextTimestamp = event.timeStamp || performance.now();
    const deltaTime = Math.max(nextTimestamp - projectMarqueeState.lastPointerTimestamp, 8);

    projectMarqueeState.lastPointerX = event.clientX;
    projectMarqueeState.lastPointerTimestamp = nextTimestamp;

    if (!deltaX) {
      return;
    }

    projectMarqueeState.offset -= deltaX;
    projectMarqueeState.velocity = clampProjectMarqueeVelocity((-deltaX / deltaTime) * 1000);
    updateProjectMarqueeDirection(projectMarqueeState.velocity);
    applyProjectMarqueeOffset();
    event.preventDefault();
  };

  const handlePointerUp = (event) => {
    endProjectMarqueeDrag(event.pointerId);
  };

  const marquee = document.querySelector('[data-project-marquee]');

  window.addEventListener('resize', handleResize);
  document.addEventListener('visibilitychange', handleVisibilityChange);

  marquee?.addEventListener('pointerdown', handlePointerDown);
  marquee?.addEventListener('pointermove', handlePointerMove);
  marquee?.addEventListener('pointerup', handlePointerUp);
  marquee?.addEventListener('pointercancel', handlePointerUp);
  marquee?.addEventListener('lostpointercapture', () => {
    endProjectMarqueeDrag();
  });
  marquee?.addEventListener('dragstart', (event) => {
    event.preventDefault();
  });

  projectMarqueeState.initialized = true;
};

const createProjectCard = (media, index = 0) => {
  const card = document.createElement('article');
  card.className = 'fs-project-card';
  card.dataset.projectCard = '';
  card.dataset.projectMediaId = media.id;

  const image = document.createElement('img');
  image.src = media.imageUrl;
  image.alt = media.alt;
  image.loading = index < 3 ? 'eager' : 'lazy';
  image.decoding = 'async';
  image.fetchPriority = index < 3 ? 'high' : 'low';
  image.sizes = '(max-width: 640px) 84vw, (max-width: 900px) 70vw, 360px';
  image.draggable = false;

  card.appendChild(image);

  return card;
};

const renderProjectMarquee = (items) => {
  const section = document.querySelector('.fs-projects');
  const marquee = document.querySelector('[data-project-marquee]');
  const track = document.querySelector('[data-project-track]');
  const debugEnabled = isProjectFeedDebugEnabled();
  const uniqueItems = normalizeProjectFeedItems(items);

  if (!marquee || !track) return;

  if (section) {
    section.hidden = uniqueItems.length === 0;
  }

  if (debugEnabled) {
    console.info('[project-feed] unique render set', {
      received: items.length,
      rendered: uniqueItems.length,
    });
  }

  if (debugEnabled && uniqueItems.length === 0) {
    console.warn('[project-feed] no items to render, section hidden');
  }

  track.replaceChildren(...uniqueItems.map(createProjectCard));
  marquee.classList.toggle('is-empty', uniqueItems.length === 0);
  marquee.setAttribute('aria-busy', 'false');
  buildProjectMarquee();
};

const setProjectFeedStatus = (state) => {
  const section = document.querySelector('.fs-projects');
  const flow = section?.querySelector('.fs-project-flow');
  const marquee = document.querySelector('[data-project-marquee]');
  if (!section || !flow || !marquee) return;

  let status = flow.querySelector('[data-project-feed-status]');
  if (!status) {
    status = document.createElement('div');
    status.className = 'fs-project-feed-status';
    status.dataset.projectFeedStatus = '';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    flow.appendChild(status);
  }
  status.replaceChildren();
  status.hidden = !state;
  if (!state) return;

  section.hidden = false;
  // A short status can otherwise stay below the reveal observer's threshold.
  flow.classList.add('is-visible');
  marquee.setAttribute('aria-busy', String(state === 'loading'));
  const message = document.createElement('p');
  message.textContent = state === 'loading'
    ? 'Загружаем фотографии проектов…'
    : state === 'empty'
      ? 'Фотографии проектов пока недоступны.'
      : 'Не удалось загрузить фотографии проектов.';
  status.appendChild(message);

  if (state !== 'loading') {
    const retry = document.createElement('button');
    retry.type = 'button';
    retry.className = 'fs-button fs-button--ghost';
    retry.textContent = 'Попробовать ещё раз';
    // Re-run the existing bootstrap and repository/service chain.
    retry.addEventListener('click', () => window.location.reload());
    status.appendChild(retry);
  }
};

const loadProjectFeed = async () => {
  const marquee = document.querySelector('[data-project-marquee]');
  const debugEnabled = isProjectFeedDebugEnabled();
  if (!marquee) return;

  setProjectFeedStatus('loading');
  let timer = 0;
  let timedOut = false;
  // The underlying bootstrap is allowed to finish after the UI timeout.
  const request = createProjectFeedService().listPublishedProjectMedia();
  const renderItems = (items) => {
    renderProjectMarquee(items);
    setProjectFeedStatus(items.length ? null : 'empty');
  };
  try {
    const items = await Promise.race([
      request,
      new Promise((_, reject) => {
        timer = window.setTimeout(() => {
          timedOut = true;
          reject(new Error('Project feed load timed out after 20 seconds.'));
        }, 20000);
      }),
    ]);
    if (debugEnabled) {
      console.info('[project-feed] render input', { count: items.length });
    }
    renderItems(items);
  } catch (error) {
    console.error('[project-feed] render failed', error);
    renderProjectMarquee([]);
    setProjectFeedStatus('error');
  } finally {
    window.clearTimeout(timer);
  }

  if (timedOut) {
    request.then(renderItems).catch(() => {});
  }
};

const buildProjectMarquee = () => {
  const marquee = document.querySelector('[data-project-marquee]');
  const track = document.querySelector('[data-project-track]');

  if (!marquee || !track) return;

  stopProjectMarqueeAnimation();
  projectMarqueeState.offset = 0;
  projectMarqueeState.cycleWidth = 0;
  projectMarqueeState.velocity = 0;
  projectMarqueeState.isDragging = false;
  projectMarqueeState.pointerId = null;
  marquee.dataset.dragging = 'false';
  document.documentElement.classList.remove('is-project-dragging');
  track.style.transform = 'translate3d(0, 0, 0)';

  track.querySelectorAll('[data-project-clone]').forEach((clone) => clone.remove());

  const cards = Array.from(track.querySelectorAll('[data-project-card]'));

  marquee.scrollLeft = 0;
  marquee.classList.toggle('is-enhanced', cards.length > 1);

  if (cards.length <= 1) {
    return;
  }

  ensureProjectMarqueeBindings();

  const firstCard = cards[0];
  cards.forEach((card) => {
    track.appendChild(cloneProjectCard(card));
  });

  let cycleWidth = track.querySelector('[data-project-clone]')?.offsetLeft ?? 0;

  if (!cycleWidth) {
    cycleWidth = cards.reduce((total, card) => total + card.getBoundingClientRect().width, 0);
  }

  const requiredSetCount = Math.max(2, Math.ceil(marquee.clientWidth / cycleWidth) + 1);
  let currentSetCount = 2;

  while (currentSetCount < requiredSetCount) {
    cards.forEach((card) => {
      track.appendChild(cloneProjectCard(card));
    });
    currentSetCount += 1;
  }

  const firstClone = track.querySelector('[data-project-clone]');
  projectMarqueeState.cycleWidth =
    firstClone?.offsetLeft - firstCard.offsetLeft || cycleWidth;

  animateProjectMarquee();
};

const setupToneSelector = () => {
  const toneSelector = document.querySelector('[data-tone-selector]');
  const toneButton = document.querySelector('[data-tone-button]');
  const toneMenu = document.querySelector('[data-tone-menu]');
  const toneCurrent = document.querySelector('[data-tone-current]');
  const toneOptions = document.querySelectorAll('[data-tone-option]');

  if (!toneSelector || !toneButton || !toneMenu || !toneCurrent || toneOptions.length === 0) {
    applyCopy('neutral');
    return;
  }

  const closeMenu = () => {
    toneMenu.hidden = true;
    toneButton.setAttribute('aria-expanded', 'false');
  };

  const openMenu = () => {
    toneMenu.hidden = false;
    toneButton.setAttribute('aria-expanded', 'true');
  };

  const setTone = (tone, shouldStore = true) => {
    const activeTone = siteCopy[tone] ? tone : 'neutral';

    applyCopy(activeTone);
    buildProjectMarquee();
    toneCurrent.textContent = toneLabels[activeTone];
    document.documentElement.dataset.contentTone = activeTone;

    toneOptions.forEach((option) => {
      const isActive = option.dataset.toneOption === activeTone;
      option.classList.toggle('is-active', isActive);
      option.setAttribute('aria-selected', String(isActive));
    });

    if (shouldStore) {
      storeTone(activeTone);
    }
  };

  toneButton.addEventListener('click', () => {
    if (toneMenu.hidden) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  toneOptions.forEach((option) => {
    option.addEventListener('click', () => {
      setTone(option.dataset.toneOption);
      closeMenu();
      toneButton.focus();
    });
  });

  document.addEventListener('click', (event) => {
    if (!toneSelector.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  setTone(readStoredTone(), false);
};

if (fsBurger && fsMobile) {
  fsBurger.addEventListener('click', () => {
    const isOpen = fsMobile.classList.toggle('is-open');
    fsBurger.setAttribute('aria-expanded', String(isOpen));
    fsMobile.setAttribute('aria-hidden', String(!isOpen));
  });

  fsMobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      fsMobile.classList.remove('is-open');
      fsBurger.setAttribute('aria-expanded', 'false');
      fsMobile.setAttribute('aria-hidden', 'true');
    });
  });
}

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('fs-reveal-pending');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  fsRevealItems.forEach((item) => observer.observe(item));
} else {
  fsRevealItems.forEach((item) => item.classList.add('is-visible'));
}

setupToneSelector();
applyMaterialsPreview();
loadProjectFeed();
