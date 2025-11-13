/**
 * Translation strings for all supported languages
 * Languages: uz_latn (Uzbek Latin), uz_cyrl (Uzbek Cyrillic), en (English), ru (Russian)
 */

const translations = {
  // Main menu buttons
  mainMenu: {
    uz_latn: "Asosiy menyu 🏘",
    uz_cyrl: "Асосий меню 🏘",
    en: "Main Menu 🏘",
    ru: "Главное меню 🏘",
  },
  selectLanguage: {
    uz_latn: "Tilni tanlash 🌐",
    uz_cyrl: "Тилни танлаш 🌐",
    en: "Select Language 🌐",
    ru: "Выбор языка 🌐",
  },
  counterfeitProducts: {
    uz_latn: "Soxta mahsulotlar ⚠️",
    uz_cyrl: "Сохта маҳсулотлар ⚠️",
    en: "Counterfeit Products ⚠️",
    ru: "Контрафактные товары ⚠️",
  },
  reportViolation: {
    uz_latn: "Ariza qoldirish 🔴",
    uz_cyrl: "Ариза қолдириш 🔴",
    en: "Submit Report 🔴",
    ru: "Подать заявку 🔴",
  },
  myReports: {
    uz_latn: "Mening arizalarim 🗃",
    uz_cyrl: "Менинг аризаларим 🗃",
    en: "My Reports 🗃",
    ru: "Мои заявки 🗃",
  },
  sendFeedback: {
    uz_latn: "Fikr bildirish ✍️",
    uz_cyrl: "Фикр билдириш ✍️",
    en: "Send Feedback ✍️",
    ru: "Отправить отзыв ✍️",
  },
  backToMain: {
    uz_latn: "🔙 Asosiy menyuga qaytish",
    uz_cyrl: "🔙 Асосий менюга кайтиш",
    en: "🔙 Back to Main Menu",
    ru: "🔙 Вернуться в главное меню",
  },

  // Welcome messages
  welcome: {
    uz_latn:
      "Assalomu alaykum! Soxta mahsulotlar haqida xabar berish botiga xush kelibsiz. 👋",
    uz_cyrl:
      "Ассалому алейкум! Сохта маҳсулотлар ҳақида хабар бериш ботига хуш келибсиз. 👋",
    en: "Welcome! This bot helps you report counterfeit products. 👋",
    ru: "Добро пожаловать! Этот бот поможет вам сообщить о контрафактной продукции. 👋",
  },

  // Language
  selectLanguageMessage: {
    uz_latn: "Iltimos, tilni tanlang:",
    uz_cyrl: "Илтимос, тилни танланг:",
    en: "Please select a language:",
    ru: "Пожалуйста, выберите язык:",
  },
  languageChanged: {
    uz_latn: "Til muvaffaqiyatli o'zgartirildi! ✅",
    uz_cyrl: "Тил муваффақиятли ўзгартирилди! ✅",
    en: "Language successfully changed! ✅",
    ru: "Язык успешно изменен! ✅",
  },

  // Report form
  selectRegion: {
    uz_latn: "Viloyatni tanlang:",
    uz_cyrl: "Вилоятни танланг:",
    en: "Select region:",
    ru: "Выберите регион:",
  },
  selectDistrict: {
    uz_latn: "Tuman/Shaharni tanlang:",
    uz_cyrl: "Туман/Шаҳарни танланг:",
    en: "Select district/city:",
    ru: "Выберите район/город:",
  },
  sendLocation: {
    uz_latn: "Iltimos, joylashuvni xaritada belgilang (lokatsiya yuboring):",
    uz_cyrl: "Илтимос, жойлашувни харитада белгиланг (локация юборинг):",
    en: "Please mark the location on the map (send location):",
    ru: "Пожалуйста, отметьте местоположение на карте (отправьте локацию):",
  },
  enterBusinessEntity: {
    uz_latn:
      "Xo'jalik sub'ekti nomi yoki INN kiriting (ixtiyoriy):\n\nO'tkazib yuborish uchun \"O'tkazib yuborish\" tugmasini bosing",
    uz_cyrl:
      'Хўжалик субъекти номи ёки ИНН киритинг (ихтиёрий):\n\nЎтказиб юбориш учун "Ўтказиб юбориш" тугмасини босинг',
    en: 'Enter business entity name or TIN (optional):\n\nPress "Skip" button to skip',
    ru: 'Введите название юридического лица или ИНН (необязательно):\n\nНажмите кнопку "Пропустить" чтобы пропустить',
  },
  enterShopName: {
    uz_latn: "Do'kon nomini kiriting (ixtiyoriy):",
    uz_cyrl: "Дўкон номини киритинг (ихтиёрий):",
    en: "Enter shop name (optional):",
    ru: "Введите название магазина (необязательно):",
  },
  enterShopAddress: {
    uz_latn: "Do'kon manzilini kiriting (ixtiyoriy):",
    uz_cyrl: "Дўкон манзилини киритинг (ихтиёрий):",
    en: "Enter shop address (optional):",
    ru: "Введите адрес магазина (необязательно):",
  },
  enterDescription: {
    uz_latn: "Soxta mahsulot haqida ba'tafsil yozing (majburiy):",
    uz_cyrl: "Сохта маҳсулот ҳақида батафсил ёзинг (мажбурий):",
    en: "Write in detail about the counterfeit product (required):",
    ru: "Напишите подробно о контрафактном товаре (обязательно):",
  },
  sendMedia: {
    uz_latn:
      'Rasm yoki videolarni yuboring (kamida 1 ta, maksimum 10 ta). Tugatgandan so\'ng "Davom etish" tugmasini bosing:',
    uz_cyrl:
      'Расм ёки видеоларни юборинг (камида 1 та, максимум 10 та). Тугатгандан сўнг "Давом етиш" тугмасини босинг:',
    en: 'Send photos or videos (minimum 1, maximum 10). Press "Continue" when done:',
    ru: 'Отправьте фото или видео (минимум 1, максимум 10). Нажмите "Продолжить" когда закончите:',
  },
  enterFirstName: {
    uz_latn: "Ismingizni kiriting (majburiy):",
    uz_cyrl: "Исмингизни киритинг (мажбурий):",
    en: "Enter your first name (required):",
    ru: "Введите ваше имя (обязательно):",
  },
  enterLastName: {
    uz_latn: "Familiyangizni kiriting (majburiy):",
    uz_cyrl: "Фамилиянгизни киритинг (мажбурий):",
    en: "Enter your last name (required):",
    ru: "Введите вашу фамилию (обязательно):",
  },
  enterFatherName: {
    uz_latn: "Otangizning ismini kiriting (majburiy):",
    uz_cyrl: "Отангизнинг исмини киритинг (мажбурий):",
    en: "Enter your father's name (required):",
    ru: "Введите отчество (обязательно):",
  },
  enterPhoneNumber: {
    uz_latn:
      "Telefon raqamingizni +998XXXXXXXXX formatida kiriting (majburiy):",
    uz_cyrl:
      "Телефон рақамингизни +998XXXXXXXXX форматида киритинг (мажбурий):",
    en: "Enter your phone number in +998XXXXXXXXX format (required):",
    ru: "Введите номер телефона в формате +998XXXXXXXXX (обязательно):",
  },

  // Buttons
  skip: {
    uz_latn: "O'tkazib yuborish",
    uz_cyrl: "Ўтказиб юбориш",
    en: "Skip",
    ru: "Пропустить",
  },
  continue: {
    uz_latn: "Davom etish",
    uz_cyrl: "Давом етиш",
    en: "Continue",
    ru: "Продолжить",
  },
  submit: {
    uz_latn: "Yuborish",
    uz_cyrl: "Юбориш",
    en: "Submit",
    ru: "Отправить",
  },
  cancel: {
    uz_latn: "Bekor qilish",
    uz_cyrl: "Бекор қилиш",
    en: "Cancel",
    ru: "Отменить",
  },

  // Validations
  invalidPhoneNumber: {
    uz_latn:
      "Noto'g'ri format! Telefon raqamini +998XXXXXXXXX formatida kiriting.",
    uz_cyrl:
      "Нотўғри формат! Телефон рақамини +998XXXXXXXXX форматида киритинг.",
    en: "Invalid format! Enter phone number in +998XXXXXXXXX format.",
    ru: "Неверный формат! Введите номер в формате +998XXXXXXXXX.",
  },
  invalidInput: {
    uz_latn: "Noto'g'ri ma'lumot kiritildi. Qayta urinib ko'ring.",
    uz_cyrl: "Нотўғри маълумот киритилди. Қайта уриниб кўринг.",
    en: "Invalid input. Please try again.",
    ru: "Неверный ввод. Попробуйте снова.",
  },
  mediaLimitReached: {
    uz_latn: "Maksimal 10 ta fayl yuborish mumkin. Keyingi qadamga o'tildi.",
    uz_cyrl: "Максимал 10 та файл юбориш мумкин. Кейинги қадамга ўтилди.",
    en: "Maximum 10 files allowed. Proceeding to next step.",
    ru: "Максимум 10 файлов. Переход к следующему шагу.",
  },
  noMediaProvided: {
    uz_latn: "Kamida 1 ta rasm yoki video yuborish majburiy!",
    uz_cyrl: "Камида 1 та расм ёки видео юбориш мажбурий!",
    en: "At least 1 photo or video is required!",
    ru: "Необходимо минимум 1 фото или видео!",
  },

  // Success messages
  reportSubmitted: {
    uz_latn:
      "Arizangiz muvaffaqiyatli qabul qilindi! Tez orada ko'rib chiqiladi.",
    uz_cyrl: "Аризангиз муваффақиятли қабул қилинди! Тез орада кўриб чиқилади.",
    en: "Your report has been successfully submitted! It will be reviewed soon.",
    ru: "Ваша заявка успешно принята! Она будет рассмотрена в ближайшее время.",
  },
  feedbackSubmitted: {
    uz_latn: "Fikr-mulohazangiz uchun rahmat!",
    uz_cyrl: "Фикр-мулоҳазангиз учун раҳмат!",
    en: "Thank you for your feedback!",
    ru: "Спасибо за ваш отзыв!",
  },

  // My Reports
  noReports: {
    uz_latn: "Sizda hali arizalar yo'q.",
    uz_cyrl: "Сизда ҳали аризалар йўқ.",
    en: "You don't have any reports yet.",
    ru: "У вас пока нет заявок.",
  },
  reportStatus: {
    checked: {
      uz_latn: "Ko'rib chiqilgan ✅",
      uz_cyrl: "Кўриб чиқилган ✅",
      en: "Checked ✅",
      ru: "Проверено ✅",
    },
    unchecked: {
      uz_latn: "Ko'rib chiqilmoqda... ⏳",
      uz_cyrl: "Кўриб чиқилмаган ⏳",
      en: "Unchecked ⏳",
      ru: "Не проверено ⏳",
    },
  },

  // Feedback
  feedbackPrompt: {
    uz_latn: "Iltimos, fikr-mulohazangizni yozing:",
    uz_cyrl: "Илтимос, фикр-мулоҳазангизни ёзинг:",
    en: "Please write your feedback:",
    ru: "Пожалуйста, напишите ваш отзыв:",
  },
  invalidFeedback: {
    uz_latn: "Iltimos, fikr-mulohazangizni faqat matn bilan yuboring.",
    uz_cyrl: "Илтимос, фикр-мулоҳазангизни фақат матн билан юборинг.",
    en: "Please write your feedback.",
    ru: "Пожалуйста, напишите ваш отзыв.",
  },

  // Error messages
  errorOccurred: {
    uz_latn: "Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",
    uz_cyrl: "Хатолик юз берди. Илтимос, қайта уриниб кўринг.",
    en: "An error occurred. Please try again.",
    ru: "Произошла ошибка. Пожалуйста, попробуйте снова.",
  },
};

module.exports = translations;
