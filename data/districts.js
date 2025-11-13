/**
 * Districts for each region of Uzbekistan
 * Mapping region IDs to their districts with translations
 */

const districts = {
  tashkent_city: [
    { id: 'yunusabad', uz_latn: 'Yunusobod tumani', uz_cyrl: 'Юнусобод тумани', en: 'Yunusabad District', ru: 'Юнусабадский район' },
    { id: 'mirzo_ulugbek', uz_latn: 'Mirzo Ulug\'bek tumani', uz_cyrl: 'Мирзо Улуғбек тумани', en: 'Mirzo Ulugbek District', ru: 'Мирзо-Улугбекский район' },
    { id: 'chilanzar', uz_latn: 'Chilonzor tumani', uz_cyrl: 'Чилонзор тумани', en: 'Chilanzar District', ru: 'Чиланзарский район' },
    { id: 'sergeli', uz_latn: 'Sergeli tumani', uz_cyrl: 'Сергели тумани', en: 'Sergeli District', ru: 'Сергелийский район' },
    { id: 'uchtepa', uz_latn: 'Uchtepa tumani', uz_cyrl: 'Учтепа тумани', en: 'Uchtepa District', ru: 'Учтепинский район' },
    { id: 'yakkasaray', uz_latn: 'Yakkasaroy tumani', uz_cyrl: 'Яккасарой тумани', en: 'Yakkasaray District', ru: 'Яккасарайский район' },
    { id: 'yashnabad', uz_latn: 'Yashnobod tumani', uz_cyrl: 'Яшнобод тумани', en: 'Yashnabad District', ru: 'Яшнабадский район' },
    { id: 'shaykhontohur', uz_latn: 'Shayxontohur tumani', uz_cyrl: 'Шайхонтохур тумани', en: 'Shaykhontohur District', ru: 'Шайхантахурский район' },
    { id: 'mirobod', uz_latn: 'Mirobod tumani', uz_cyrl: 'Миробод тумани', en: 'Mirobod District', ru: 'Мирабадский район' },
    { id: 'olmazor', uz_latn: 'Olmazor tumani', uz_cyrl: 'Олмазор тумани', en: 'Olmazor District', ru: 'Алмазарский район' },
    { id: 'bektemir', uz_latn: 'Bektemir tumani', uz_cyrl: 'Бектемир тумани', en: 'Bektemir District', ru: 'Бектемирский район' },
    { id: 'yusuf_kamol', uz_latn: 'Yusuf Kamol tumani', uz_cyrl: 'Юсуф Камол тумани', en: 'Yusuf Kamol District', ru: 'Юсуф-Камольский район' }
  ],
  
  tashkent: [
    { id: 'bekabad', uz_latn: 'Bekobod shahri', uz_cyrl: 'Бекобод шаҳри', en: 'Bekabad City', ru: 'г. Бекабад' },
    { id: 'olmaliq', uz_latn: 'Olmaliq shahri', uz_cyrl: 'Олмалиқ шаҳри', en: 'Olmaliq City', ru: 'г. Алмалык' },
    { id: 'chirchiq', uz_latn: 'Chirchiq shahri', uz_cyrl: 'Чирчиқ шаҳри', en: 'Chirchiq City', ru: 'г. Чирчик' },
    { id: 'angren', uz_latn: 'Angren shahri', uz_cyrl: 'Ангрен шаҳри', en: 'Angren City', ru: 'г. Ангрен' },
    { id: 'ohangaron', uz_latn: 'Ohangaron tumani', uz_cyrl: 'Оҳангарон тумани', en: 'Ohangaron District', ru: 'Ахангаранский район' },
    { id: 'bekabad_district', uz_latn: 'Bekobod tumani', uz_cyrl: 'Бекобод тумани', en: 'Bekabad District', ru: 'Бекабадский район' },
    { id: 'bostanliq', uz_latn: 'Bostanliq tumani', uz_cyrl: 'Бостанлиқ тумани', en: 'Bostanliq District', ru: 'Бостанлыкский район' },
    { id: 'zangiota', uz_latn: 'Zangiota tumani', uz_cyrl: 'Зангиота тумани', en: 'Zangiota District', ru: 'Зангиатинский район' },
    { id: 'qibray', uz_latn: 'Qibray tumani', uz_cyrl: 'Қибрай тумани', en: 'Qibray District', ru: 'Кибрайский район' },
    { id: 'parkent', uz_latn: 'Parkent tumani', uz_cyrl: 'Паркент тумани', en: 'Parkent District', ru: 'Паркентский район' },
    { id: 'piskent', uz_latn: 'Piskent tumani', uz_cyrl: 'Пискент тумани', en: 'Piskent District', ru: 'Пскентский район' },
    { id: 'chinaz', uz_latn: 'Chinoz tumani', uz_cyrl: 'Чиноз тумани', en: 'Chinaz District', ru: 'Чиназский район' },
    { id: 'yuqorichirchiq', uz_latn: 'Yuqorichirchiq tumani', uz_cyrl: 'Юқоричирчиқ тумани', en: 'Yuqorichirchiq District', ru: 'Юкоричирчикский район' },
    { id: 'orta_chirchiq', uz_latn: 'O\'rtachirchiq tumani', uz_cyrl: 'Ўртачирчиқ тумани', en: 'Ortachirchiq District', ru: 'Уртачирчикский район' }
  ],
  
  andijan: [
    { id: 'andijan_city', uz_latn: 'Andijon shahri', uz_cyrl: 'Андижон шаҳри', en: 'Andijan City', ru: 'г. Андижан' },
    { id: 'asaka', uz_latn: 'Asaka shahri', uz_cyrl: 'Асака шаҳри', en: 'Asaka City', ru: 'г. Асака' },
    { id: 'andijan_district', uz_latn: 'Andijon tumani', uz_cyrl: 'Андижон тумани', en: 'Andijan District', ru: 'Андижанский район' },
    { id: 'asaka_district', uz_latn: 'Asaka tumani', uz_cyrl: 'Асака тумани', en: 'Asaka District', ru: 'Асакинский район' },
    { id: 'balikchi', uz_latn: 'Baliqchi tumani', uz_cyrl: 'Балиқчи тумани', en: 'Balikchi District', ru: 'Балыкчинский район' },
    { id: 'buloqboshi', uz_latn: 'Buloqboshi tumani', uz_cyrl: 'Булоқбоши тумани', en: 'Buloqboshi District', ru: 'Булакбашинский район' },
    { id: 'jalaquduq', uz_latn: 'Jalaquduq tumani', uz_cyrl: 'Жалақудуқ тумани', en: 'Jalaquduq District', ru: 'Джалакудукский район' },
    { id: 'izboskan', uz_latn: 'Izboskan tumani', uz_cyrl: 'Избоскан тумани', en: 'Izboskan District', ru: 'Избасканский район' },
    { id: 'qorasuv', uz_latn: 'Qo\'rg\'ontepa tumani', uz_cyrl: 'Қўрғонтепа тумани', en: 'Qorgontepa District', ru: 'Кургантепинский район' },
    { id: 'marhamat', uz_latn: 'Marhamat tumani', uz_cyrl: 'Марҳамат тумани', en: 'Marhamat District', ru: 'Мархаматский район' },
    { id: 'oltinko\'l', uz_latn: 'Oltinko\'l tumani', uz_cyrl: 'Олтинкўл тумани', en: 'Oltinkol District', ru: 'Алтынкульский район' },
    { id: 'pakhtaobod', uz_latn: 'Paxtaobod tumani', uz_cyrl: 'Пахтаобод тумани', en: 'Pakhtaobod District', ru: 'Пахтаабадский район' },
    { id: 'ulughnor', uz_latn: 'Ulug\'nor tumani', uz_cyrl: 'Улуғнор тумани', en: 'Ulughnor District', ru: 'Улугнорский район' },
    { id: 'khojaobod', uz_latn: 'Xo\'jaobod tumani', uz_cyrl: 'Хўжаобод тумани', en: 'Khojaobod District', ru: 'Ходжаабадский район' },
    { id: 'shahrixon', uz_latn: 'Shahrixon tumani', uz_cyrl: 'Шаҳрихон тумани', en: 'Shahrixon District', ru: 'Шахриханский район' }
  ],

  bukhara: [
    { id: 'bukhara_city', uz_latn: 'Buxoro shahri', uz_cyrl: 'Бухоро шаҳри', en: 'Bukhara City', ru: 'г. Бухара' },
    { id: 'bukhara_district', uz_latn: 'Buxoro tumani', uz_cyrl: 'Бухоро тумани', en: 'Bukhara District', ru: 'Бухарский район' },
    { id: 'vabkent', uz_latn: 'Vobkent tumani', uz_cyrl: 'Вобкент тумани', en: 'Vabkent District', ru: 'Вабкентский район' },
    { id: 'gijduvan', uz_latn: 'G\'ijduvon tumani', uz_cyrl: 'Ғиждувон тумани', en: 'Gijduvan District', ru: 'Гиждуванский район' },
    { id: 'jondor', uz_latn: 'Jondor tumani', uz_cyrl: 'Жондор тумани', en: 'Jondor District', ru: 'Жондорский район' },
    { id: 'kogon', uz_latn: 'Kogon tumani', uz_cyrl: 'Когон тумани', en: 'Kogon District', ru: 'Каганский район' },
    { id: 'qorako\'l', uz_latn: 'Qorako\'l tumani', uz_cyrl: 'Қоракўл тумани', en: 'Qorakol District', ru: 'Каракульский район' },
    { id: 'qorovulbozor', uz_latn: 'Qorovulbozor tumani', uz_cyrl: 'Қоровулбозор тумани', en: 'Qorovulbozor District', ru: 'Караулбазарский район' },
    { id: 'olot', uz_latn: 'Olot tumani', uz_cyrl: 'Олот тумани', en: 'Olot District', ru: 'Алатский район' },
    { id: 'peshku', uz_latn: 'Peshku tumani', uz_cyrl: 'Пешку тумани', en: 'Peshku District', ru: 'Пешкунский район' },
    { id: 'romitan', uz_latn: 'Romitan tumani', uz_cyrl: 'Ромитан тумани', en: 'Romitan District', ru: 'Ромитанский район' },
    { id: 'shofirkon', uz_latn: 'Shofirkon tumani', uz_cyrl: 'Шофиркон тумани', en: 'Shofirkon District', ru: 'Шафирканский район' }
  ],

  // Additional regions can be added similarly
  fergana: [
    { id: 'fergana_city', uz_latn: 'Farg\'ona shahri', uz_cyrl: 'Фарғона шаҳри', en: 'Fergana City', ru: 'г. Фергана' },
    { id: 'quvasoy', uz_latn: 'Quvasoy shahri', uz_cyrl: 'Қувасой шаҳри', en: 'Quvasoy City', ru: 'г. Кувасай' },
    { id: 'margilon', uz_latn: 'Marg\'ilon shahri', uz_cyrl: 'Марғилон шаҳри', en: 'Margilon City', ru: 'г. Маргилан' }
  ],

  jizzakh: [
    { id: 'jizzakh_city', uz_latn: 'Jizzax shahri', uz_cyrl: 'Жиззах шаҳри', en: 'Jizzakh City', ru: 'г. Джизак' }
  ],

  namangan: [
    { id: 'namangan_city', uz_latn: 'Namangan shahri', uz_cyrl: 'Наманган шаҳри', en: 'Namangan City', ru: 'г. Наманган' }
  ],

  navoi: [
    { id: 'navoi_city', uz_latn: 'Navoiy shahri', uz_cyrl: 'Навоий шаҳри', en: 'Navoi City', ru: 'г. Навои' }
  ],

  kashkadarya: [
    { id: 'qarshi', uz_latn: 'Qarshi shahri', uz_cyrl: 'Қарши шаҳри', en: 'Qarshi City', ru: 'г. Карши' }
  ],

  karakalpakstan: [
    { id: 'nukus', uz_latn: 'Nukus shahri', uz_cyrl: 'Нукус шаҳри', en: 'Nukus City', ru: 'г. Нукус' }
  ],

  samarkand: [
    { id: 'samarkand_city', uz_latn: 'Samarqand shahri', uz_cyrl: 'Самарқанд шаҳри', en: 'Samarkand City', ru: 'г. Самарканд' }
  ],

  sirdarya: [
    { id: 'guliston', uz_latn: 'Guliston shahri', uz_cyrl: 'Гулистон шаҳри', en: 'Guliston City', ru: 'г. Гулистан' }
  ],

  surkhandarya: [
    { id: 'termez', uz_latn: 'Termiz shahri', uz_cyrl: 'Термиз шаҳри', en: 'Termez City', ru: 'г. Термез' }
  ],

  khorezm: [
    { id: 'urgench', uz_latn: 'Urganch shahri', uz_cyrl: 'Урганч шаҳри', en: 'Urgench City', ru: 'г. Ургенч' }
  ]
};

module.exports = districts;
