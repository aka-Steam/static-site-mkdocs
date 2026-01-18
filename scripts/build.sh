#!/bin/bash
# Скрипт для сборки проекта

set -e  # Остановка при ошибке

echo "🔨 Начало сборки проекта..."

# Установка Node.js зависимостей
echo "📦 Установка Node.js зависимостей..."
npm install

# Сборка CSS с PostCSS
echo "🎨 Сборка CSS с PostCSS..."
npm run build:css

# Минификация JavaScript
echo "📝 Минификация JavaScript..."
npm run minify:js

# Копирование минифицированных файлов
echo "📋 Копирование файлов..."
cp themes/custom-theme/static/css/main.min.css themes/custom-theme/static/css/main.css
cp themes/custom-theme/static/js/main.min.js themes/custom-theme/static/js/main.js

# Сборка MkDocs сайта
echo "📚 Сборка MkDocs сайта..."
mkdocs build

echo "✅ Сборка завершена!"
