# OpenVillage Landing

Standalone-версия лендинга для Open Village 2026, подготовленная для статического деплоя.

## Структура

- `index.html` — основная standalone-страница.
- `css/page.css` — локальные стили страницы, включая токены и подключения шрифтов.
- `js/page.js` — клиентский JS для формы, плавного скролла и маски телефона.
- `assets/fonts/` — локальные шрифты, перенесённые внутрь проекта.
- `assets/projects/` — локальные изображения для блока с примерами работ.
- `_source/landing_openvillage.original.html` — архив исходного HTML-прототипа.

## Локальный запуск

Открыть `index.html` напрямую в браузере или поднять простой статический сервер из папки проекта:

```bash
cd /Users/alinakahle/Documents/AI\ OFFICE\ D2DOM/01-active-projects/openvillage_landing
python3 -m http.server 4173
```

После этого страница будет доступна на [http://localhost:4173](http://localhost:4173).

## Деплой на Vercel

Для Vercel достаточно указать Root Directory:

`01-active-projects/openvillage_landing`

Дополнительные build-команды не требуются: проект статический и использует `index.html` как entry point.

## Зависимости

Runtime-зависимостей нет. Шрифты и изображения кейсов локализованы внутри проекта, поэтому страница не зависит от внешнего `design-system-export` или от прямой загрузки картинок с основного сайта.
