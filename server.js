const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Устанавливаем статическую папку для сервирования файлов
app.use(express.static(path.join(__dirname, 'public')));

// Главный маршрут
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
