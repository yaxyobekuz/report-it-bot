# Report It Bot

A production-grade Telegram bot for reporting counterfeit products and violations. Built with Node.js, MongoDB, and the `node-telegram-bot-api` library.

## 📋 Features

- **Multi-language Support**: Uzbek (Latin & Cyrillic), English, Russian
- **Comprehensive Report Form**: Collects detailed information about counterfeit products
- **Media Upload**: Support for up to 10 photos/videos per report
- **Report Tracking**: Users can view their submission history and status
- **Feedback System**: Allows users to send feedback
- **Channel Integration**: Automatically posts reports to a private Telegram channel
- **Status Management**: Inline buttons to mark reports as checked/unchecked
- **Input Validation**: Robust validation for phone numbers, names, and other inputs

## 🏗 Project Structure

```
report-it-bot/
├── config/
│   └── database.js          # MongoDB connection configuration
├── data/
│   ├── translations.js      # Multi-language translations
│   ├── regions.js          # Uzbekistan regions
│   └── districts.js        # Districts for each region
├── handlers/
│   ├── start.handler.js    # /start command and main menu
│   ├── language.handler.js # Language selection logic
│   ├── report.handler.js   # Report submission flow
│   ├── myReports.handler.js # Report history display
│   ├── feedback.handler.js # Feedback submission
│   └── callback.handler.js # Inline keyboard callbacks
├── models/
│   ├── user.model.js       # User schema
│   ├── report.model.js     # Report schema
│   └── feedback.model.js   # Feedback schema
├── utils/
│   ├── validators.js       # Input validation functions
│   ├── formatters.js       # Text formatting utilities
│   ├── keyboards.js        # Keyboard builders
│   ├── media.js           # Media file handling
│   └── session.js         # User session management
├── .env.example           # Environment variables template
├── .gitignore            # Git ignore rules
├── index.js              # Main bot file
├── package.json          # Project dependencies
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **Telegram Bot Token** (from [@BotFather](https://t.me/BotFather))
- **Private Telegram Channel** (for report submissions)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yaxyobekuz/report-it-bot.git
   cd report-it-bot
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   ```bash
   cp .env.example .env
   ```

4. **Edit `.env` file** with your credentials:
   ```env
   BOT_TOKEN=your_bot_token_from_botfather
   MONGO_URI=mongodb://localhost:27017/report-bot
   CHANNEL_ID=-100XXXXXXXXXX
   NODE_ENV=development
   ```

### Running the Bot

**Development mode**:
```bash
npm run dev
```

**Production mode**:
```bash
npm start
```

## 📱 Bot Usage

### Main Menu Buttons

1. **Select Language** - Choose your preferred language
2. **Counterfeit Products** - Information about reporting
3. **Violation Detected** - Submit a new report
4. **My Reports** - View your report history
5. **Send Feedback** - Submit feedback

### Report Submission Flow

The bot guides users through the following steps:

1. **Region Selection** - Choose your region
2. **District Selection** - Choose your district/city
3. **Location** - Share location on map
4. **Business Entity** - Enter business name or TIN (optional)
5. **Shop Name** - Enter shop name (optional)
6. **Shop Address** - Enter shop address (optional)
7. **Description** - Describe the counterfeit product type
8. **Media Files** - Upload 1-10 photos or videos
9. **First Name** - Enter your first name
10. **Last Name** - Enter your last name
11. **Father's Name** - Enter your father's name
12. **Phone Number** - Enter phone number (+998XXXXXXXXX format)

### Validation Rules

- **Phone Number**: Must be in `+998XXXXXXXXX` format
- **Names**: Must contain only letters and spaces (2-50 characters)
- **Media Files**: Minimum 1, maximum 10 files
- **Location**: Must be valid GPS coordinates

## 🗄 Database Models

### User Model
- `telegramId`: Unique Telegram user ID
- `username`: Telegram username
- `firstName`: User's first name
- `lastName`: User's last name
- `language`: Preferred language (uz_latn, uz_cyrl, en, ru)
- `isActive`: Account status
- `createdAt`, `updatedAt`: Timestamps

### Report Model
- `userId`: Reference to User
- `telegramId`: User's Telegram ID
- `region`: Selected region
- `district`: Selected district
- `location`: GPS coordinates (latitude, longitude)
- `businessEntity`: Business name or TIN (optional)
- `shopName`: Shop name (optional)
- `shopAddress`: Shop address (optional)
- `description`: Product description
- `mediaFiles`: Array of file IDs and types
- `applicant`: Personal information (firstName, lastName, fatherName, phoneNumber)
- `status`: Report status (unchecked, checked)
- `channelMessageId`: Message ID in channel
- `createdAt`, `updatedAt`: Timestamps

### Feedback Model
- `userId`: Reference to User
- `telegramId`: User's Telegram ID
- `message`: Feedback text
- `createdAt`: Timestamp

## 🔧 Configuration

### Adding New Languages

1. Update `data/translations.js` with new language keys
2. Add language option to `handlers/language.handler.js`
3. Update language keyboard in `utils/keyboards.js`

### Adding New Regions/Districts

1. Edit `data/regions.js` to add new regions
2. Edit `data/districts.js` to add districts for each region
3. Ensure all language translations are included

## 🛠 Development

### Code Style Guidelines

- Use **English** for all code, comments, and variable names
- Use `const` and `let` only (never `var`)
- Use **arrow functions** wherever possible
- Add **JSDoc comments** for all functions
- Keep functions focused and modular
- Use **camelCase** for variable and function names

### Error Handling

All handlers include try-catch blocks and log errors to console. Users receive friendly error messages in their selected language.

### Session Management

User sessions are stored in memory using a Map.

## 🔒 Security Best Practices

- Never commit `.env` file to version control
- Use environment variables for all sensitive data
- Validate all user inputs
- Regularly update dependencies

## 📊 Monitoring

### Logs

The bot logs important events:
- ✅ Successful connections
- ❌ Errors and failures
- 📡 Bot startup information

### Database Queries

Monitor MongoDB performance:
- Index on `telegramId` for fast user lookups
- Index on `status` for report filtering
- Use `.lean()` for read-only queries

## 🙏 Acknowledgments

- Built with [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api)
- Database powered by [MongoDB](https://www.mongodb.com/)
- ODM: [Mongoose](https://mongoosejs.com/)

---

**Made with ❤️ for combating counterfeit products**
