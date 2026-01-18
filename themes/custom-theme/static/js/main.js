// Основной JavaScript для кастомной темы

(function() {
    'use strict';

    // Инициализация при загрузке DOM
    document.addEventListener('DOMContentLoaded', function() {
        initMobileMenu();
        initSmoothScroll();
        initActiveNavigation();
    });

    // Мобильное меню
    function initMobileMenu() {
        const toggle = document.querySelector('.mobile-menu-toggle');
        const nav = document.querySelector('.main-nav');
        
        if (toggle && nav) {
            toggle.addEventListener('click', function() {
                toggle.classList.toggle('active');
                nav.classList.toggle('active');
            });

            // Закрытие меню при клике вне его
            document.addEventListener('click', function(e) {
                if (!toggle.contains(e.target) && !nav.contains(e.target)) {
                    toggle.classList.remove('active');
                    nav.classList.remove('active');
                }
            });
        }
    }

    // Плавная прокрутка
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href.length > 1) {
                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }

    // Подсветка активной навигации
    function initActiveNavigation() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.main-nav a');
        
        // Нормализуем текущий путь
        let normalizedCurrentPath = currentPath;
        // Убираем trailing slash кроме корня
        if (normalizedCurrentPath !== '/' && normalizedCurrentPath.endsWith('/')) {
            normalizedCurrentPath = normalizedCurrentPath.slice(0, -1);
        }
        // Преобразуем /index.html в /
        if (normalizedCurrentPath.endsWith('/index.html')) {
            normalizedCurrentPath = normalizedCurrentPath.replace('/index.html', '') || '/';
        }
        // Преобразуем пустой путь в /
        if (!normalizedCurrentPath) {
            normalizedCurrentPath = '/';
        }
        
        navLinks.forEach(link => {
            // Удаляем класс active со всех ссылок сначала
            link.classList.remove('active');
            
            const linkUrl = new URL(link.href);
            let linkPath = linkUrl.pathname;
            
            // Нормализуем путь ссылки
            if (linkPath !== '/' && linkPath.endsWith('/')) {
                linkPath = linkPath.slice(0, -1);
            }
            if (linkPath.endsWith('/index.html')) {
                linkPath = linkPath.replace('/index.html', '') || '/';
            }
            if (!linkPath) {
                linkPath = '/';
            }
            
            if (linkPath === normalizedCurrentPath) {
                link.classList.add('active');
            }
        });
    }

    console.log('%cIT Рынок России', 'color: #2563eb; font-size: 20px; font-weight: bold;');
    console.log('%cКастомная тема MkDocs загружена', 'color: #6b7280; font-size: 12px;');
})();
