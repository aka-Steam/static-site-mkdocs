#!/bin/bash
# Скрипт для минификации HTML файлов

set -e

echo "📝 Минификация HTML файлов..."

# Установка html-minifier, если нужно
if ! command -v html-minifier &> /dev/null; then
    echo "📦 Установка html-minifier..."
    npm install -g html-minifier-terser
fi

# Минификация HTML файлов в директории site/
if [ -d "site" ]; then
    find site -name "*.html" -type f | while read file; do
        echo "Минификация: $file"
        html-minifier \
            --collapse-whitespace \
            --remove-comments \
            --remove-optional-tags \
            --remove-redundant-attributes \
            --remove-script-type-attributes \
            --remove-tag-whitespace \
            --use-short-doctype \
            --minify-css true \
            --minify-js true \
            -o "$file.tmp" \
            "$file"
        mv "$file.tmp" "$file"
    done
    echo "✅ Минификация HTML завершена"
else
    echo "❌ Директория site/ не найдена. Сначала выполните mkdocs build"
    exit 1
fi
