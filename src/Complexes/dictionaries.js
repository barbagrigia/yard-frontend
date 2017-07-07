/* @flow */

export const offerKinds = {
  purchase: 'Покупка',
  rent: 'Аренда',
};

export const bathrooms = {
  combined: 'Совмещенный',
  separated: 'Раздельный',
};

export const kinds = {
  flat: 'Квартира',
  apartment: 'Апартаменты',
  house: 'Дом',
  townhouse: 'Таунхаус',
  penthouse: 'Пентхаус',
  land: 'Участок',
};

export const conditions = {
  great: 'Отличное',
  good: 'Хорошее',
  normal: 'Нормальное',
  bad: 'Плохое',
};

export const saleKinds = {
  direct_sell: 'Прямая продажа',
  changing: 'Обмен',
  fl214: 'ФЗ-214',
  assignment: 'Подряд',
};

export const currencies = {
  USD: '$',
  EUR: '€',
  RUB: 'руб',
};

export const categories = {
  city: 'Городская',
  country: 'Загородная',
};

export const periods = {
  day: 'От суток',
  month: 'От одного месяца',
  year: 'От одного года',
};

export const constructionStages = {
  in_progress: 'Строится',
  not_delivered_yet: 'Построен, но не сдан',
  done: 'Сдан в эксплуатацию',
};

export const wallMaterials = {
  blue_max: 'Блюмакс',
  wood: 'Дерево',
  brick: 'Кирпич',
  block: 'Блоки',
  monolith: 'Монолит',
  canadian_sip: 'Канадская технология',
};

export const roofMaterials = {
  steel: 'Кровельная сталь',
  soft_tile: 'Мягкая черепица',
  copper: 'Медь',
  metal_tile: 'Металлочерепица',
  slate: 'Сланец',
  tile: 'Черепица',
  rooftop: 'Эксплуатируемая кровля',
};

export const waterSupply = {
  purification: 'Очистные сооружения',
  central: 'Центральное водоснабжение',
  well: 'Скважина',
};

export const gasSupply = {
  without_gas: 'Без газа',
  gas_holder: 'Газгольдер',
  near_border: 'На границе',
  mains: 'Магистральный газ',
  diesel: 'Дизель',
};

export const sewerageSupply = {
  central: 'Центральная канализация',
  septic: 'Септик',
};

export const constructionKinds = {
  brick: 'Кирпичный',
  panel: 'Панельный',
  monolith: 'Монолит',
  brick_monolithic: 'Кирпично-монолитный',
};

export const furnitureKinds = {
  full: 'Полностью',
  partial: 'Частично',
  absent: 'Отсутствует',
};

export const renovateKinds = {
  rough_finish: 'Черновая отделка',
  for_finishing: 'Под чистовую отделку',
  full_construction: 'Под ключ',
  partly_turnkey: 'Частично под ключ',
  design: 'Дизайнерский',
  raw: 'Коробка',
};

export const equipment = {
  internet: 'Интернет',
  phone: 'Телефон',
  tv: 'Телевизор',
  cable_tv: 'Кабельное телевидение',
  security_signaling: 'Сигнализация',
  washmachine: 'Стиральная машина',
  intercom: 'Домофон',
  fridge: 'Холодильник',
  appliances: 'Бытовые приборы',
};

export const securityKinds = {
  guarded: 'Охраняемая территория',
  protected_area: 'Огороженая территория',
};

export const landscapeKinds = {
  field: 'Полевой',
  near_forest: 'Прилесной',
  near_water: 'Около воды',
  forest: 'Лесной',
};

export const states = {
  draft: {
    title: 'В черновиках',
    style: 'primary',
  },
  public: {
    title: 'Опубликован',
    style: 'success',
  },
  private: {
    title: 'Закрытая продажа',
    style: 'success',
  },
  postponed: {
    title: 'Отложен',
    style: 'warning',
  },
  sold: {
    title: 'Продан',
    style: 'danger',
  },
  rented: {
    title: 'Сдан',
    style: 'danger',
  },
  deleted: {
    title: 'Удалён',
    style: 'danger',
  },
};

export const floors = {
  base: 'Цоколь',
  floor: 'этаж',
  attic: 'Мансарда',
};

export const layouts = {
  isolated: 'Изолированная',
  open: 'Свободная',
  adjacent: 'Смежная',
};

export const windows = {
  both: 'В обе стороны',
  street: 'На улицу',
  courtyard: 'Во двор',
};

export const conditioningKinds = {
  central: 'Центральное',
  own: 'Собственное',
  absent: 'Отсутствует',
};

export const ventilationKinds = {
  central: 'Центральная',
  own: 'Собственная',
  absent: 'Отсутствует',
};

export const quarters = {
  first: 'I',
  second: 'II',
  third: 'III',
  fourth: 'IV',
};
