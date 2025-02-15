Finance Tracker API

Описание

Этот проект представляет собой API для управления финансами, позволяя пользователям управлять категориями доходов и расходов, а также отслеживать транзакции. API построено на Node.js с использованием Express, MongoDB и Mongoose.

Функциональность

CRUD-операции для категорий (Category)

CRUD-операции для доходов (Income)

CRUD-операции для расходов (Expense)

Технологии

Node.js

Express.js

MongoDB

Mongoose

Boom (для обработки ошибок)

Установка

Склонируйте репозиторий:

git clone https://github.com/your-repo.git
cd your-repo

Установите зависимости:

npm install

Создайте .env файл и добавьте MongoDB URL:

MONGO_URI=mongodb://localhost:27017/finance_tracker

Запустите сервер:

npm start

API Эндпоинты

Категории (Category)

GET /category/:id - Получить категорию по ID

GET /category/ - Получить все категории

POST /category/ - Создать новую категорию

PUT /category/:id - Обновить категорию

DELETE /category/:id - Удалить категорию

Доходы (Income)

GET /income/:id - Получить доход по ID

GET /income/ - Получить все доходы

POST /income/ - Создать новый доход

PUT /income/:id - Обновить доход

DELETE /income/:id - Удалить доход

Расходы (Expense)

GET /expense/:id - Получить расход по ID

GET /expense/ - Получить все расходы

POST /expense/ - Создать новый расход

PUT /expense/:id - Обновить расход

DELETE /expense/:id - Удалить расход

Структура проекта

.
├── controllers
│   ├── category.controller.js
│   ├── expense.controller.js
│   ├── income.controller.js
│
├── models
│   ├── Category.js
│   ├── Expense.js
│   ├── Income.js
│
├── routes
│   ├── category.routes.js
│   ├── expense.routes.js
│   ├── income.routes.js
│
├── index.js
└── package.json

Запуск MongoDB

Если у вас нет локального сервера MongoDB, вы можете запустить его с помощью Docker:

docker run -d -p 27017:27017 --name mongo-container mongo

Лицензия

Этот проект лицензирован под MIT License.

