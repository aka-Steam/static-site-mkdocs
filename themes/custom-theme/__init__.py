"""
Кастомная тема для MkDocs
"""

import os

class CustomTheme:
    """
    Кастомная тема для MkDocs с поддержкой HTML, CSS, JS
    """
    pass

def get_theme_dir():
    """Возвращает путь к директории темы"""
    return os.path.dirname(os.path.abspath(__file__))
