# UI Review Report

## Статус

- FAIL

## Проверенные viewport

- 320px
- 360px
- 375px
- 390px
- 430px
- 768px
- 1024px
- 1440px

## Метод проверки

- Вся страница просмотрена сверху вниз на всех обязательных ширинах.
- Все H1/H2/H3 проверены визуально по full-page и section screenshots.
- Скриншоты сняты для mobile viewport `320 / 360 / 375 / 390 / 430` по зонам `hero / audience / projects / quiz / final`.
- Отдельно проверены квиз, sticky mobile CTA, header и нижние секции.
- Проверка выполнена по скриншотам и DOM-состояниям, не только по отсутствию horizontal scroll.

## Итоговая оценка

Страница выглядит уверенно на desktop и в целом держит нужное выставочное настроение, но в текущем состоянии не готова к handoff. Основной блокер: квиз визуально и логически сломан на первом шаге, а mobile typography и fixed CTA ещё дают ощущение сырого прототипа вместо аккуратного premium UI.

## Critical

- Квиз показывает кнопку `Отправить` уже на первом шаге, хотя она должна быть скрыта до финального шага.
  Evidence:
  - [index.html](/Users/alinakahle/Documents/AI%20OFFICE%20D2DOM/open-village-landing-prototype/index.html:398) — submit-кнопка размечена как `hidden`.
  - [style.css](/Users/alinakahle/Documents/AI%20OFFICE%20D2DOM/open-village-landing-prototype/css/style.css:333) — базовый `.ov-button` задаёт `display: inline-flex`, из-за чего hidden-state визуально перебивается.
  - [style.css](/Users/alinakahle/Documents/AI%20OFFICE%20D2DOM/open-village-landing-prototype/css/style.css:771) — есть явное скрытие только для `.ov-quiz-step[hidden]` и `.ov-quiz-success[hidden]`, но не для action-кнопок.
  - [main.js](/Users/alinakahle/Documents/AI%20OFFICE%20D2DOM/open-village-landing-prototype/js/main.js:51) — JS корректно переключает `hidden`, но CSS всё равно оставляет кнопку видимой.
  - Screenshot evidence: `qa-reports/screenshots/2026-06-03/quiz-320.png`, `qa-reports/screenshots/2026-06-03/quiz-390.png`.
  Impact:
  - Пользователь видит одновременно `Далее` и `Отправить` на первом шаге.
  - Ключевой конверсионный сценарий визуально неочевиден и выглядит сломанным.

## Major

- Mobile typography слишком агрессивна в hero и final CTA на `320 / 360 / 375 / 390px`.
  Evidence:
  - [style.css](/Users/alinakahle/Documents/AI%20OFFICE%20D2DOM/open-village-landing-prototype/css/style.css:272)
  - [style.css](/Users/alinakahle/Documents/AI%20OFFICE%20D2DOM/open-village-landing-prototype/css/style.css:277)
  - Screenshots: `hero-320.png`, `hero-360.png`, `hero-390.png`, `final-320.png`, `final-390.png`.
  Why it matters:
  - Заголовки не обрезаются, но занимают слишком много строк и создают ощущение тяжёлой, не до конца отстроенной мобильной верстки.
  - На `320px` финальный H2 уже выглядит как “плакат”, а не как управляемый premium CTA-блок.

- Sticky mobile CTA включается уже на планшете `768px`, хотя по задаче это mobile CTA.
  Evidence:
  - [style.css](/Users/alinakahle/Documents/AI%20OFFICE%20D2DOM/open-village-landing-prototype/css/style.css:944)
  - [style.css](/Users/alinakahle/Documents/AI%20OFFICE%20D2DOM/open-village-landing-prototype/css/style.css:985)
  Why it matters:
  - На tablet fixed-bar ощущается лишней и навязчивой.
  - Это ослабляет визуальный ритм и делает страницу менее “чистой”.

- Mobile header слишком высокий и визуально съедает первый экран на `320–430px`.
  Evidence:
  - [style.css](/Users/alinakahle/Documents/AI%20OFFICE%20D2DOM/open-village-landing-prototype/css/style.css:949)
  - [style.css](/Users/alinakahle/Documents/AI%20OFFICE%20D2DOM/open-village-landing-prototype/css/style.css:1004)
  - Screenshots: `hero-320.png`, `hero-360.png`, `hero-390.png`.
  Why it matters:
  - Шапка визуально доминирует над первым экраном.
  - На мобильном акцент с H1 и CTA смещается вверх слишком медленно, из-за чего hero стартует “тяжело”.

## Minor

- В hero на mobile fixed CTA периодически визуально врезается в QR-зону и нижние карточки первого экрана. Контент не ломается, но композиция выглядит тесной.
- В проектах и команде карточки собраны аккуратно, но на `320px` page density уже ближе к “длинному прототипу”, чем к выверенному выставочному лендингу.

## Mobile typography

- H1:
  - `320–390px` — читаем, но слишком крупный и тяжёлый по вертикали.
  - `430px` — уже ближе к норме.
- H2:
  - Самая заметная проблема в final CTA на `320px`.
  - В остальных секциях H2 держатся лучше, но всё ещё тяжеловаты для компактных экранов.
- H3:
  - В карточках audience / projects / team читаются хорошо.
  - Критичных обрезаний не найдено.
- Длинные заголовки:
  - Не режутся, но на narrow mobile требуют более мягкой типографики.
- Body text:
  - В целом хорошо.
  - Местами на `320px` уже близко к пределу по плотности.
- Lists:
  - Hero bullets и акцентный список читаются стабильно.
- URLs:
  - На странице нет длинных URL, критичных проблем не выявлено.

## Section-by-section check

- Header / top bar — ISSUE
  - На mobile слишком высокий и перегружает первый экран.
- Hero — ISSUE
  - Типографика и вертикальный ритм на `320–390px` слишком тяжёлые.
- Audience / “Для кого” — PASS
  - Карточки читаются, обрезаний не найдено.
- Services — PASS
  - Карточки выглядят стабильно на всех проверенных ширинах.
- Metrics — PASS
  - Блок чистый и читаемый.
- Projects — PASS
  - Карточки стабильны, критичных переполнений нет.
- Open Village special — PASS
  - Визуально сильный блок, читается хорошо.
- Quiz — ISSUE
  - Критический визуальный баг: submit-кнопка видна до последнего шага.
- Team — PASS
  - Карточки держатся аккуратно.
- Final CTA — ISSUE
  - На `320px` H2 слишком крупный и тяжёлый.
- Sticky mobile CTA — ISSUE
  - Слишком активен на tablet и местами давит композицию на mobile.

## Visual consistency

- На desktop `1024 / 1440` страница выглядит цельно и достаточно premium.
- Светлая выставочная подача в целом работает, несмотря на более светлый сценарий относительно части текущих D² DOM-страниц.
- Основная просадка качества — не палитра, а mobile polish: header, CTA-layer и oversized typography.

## Recommendations

- Исправить hidden-state у action-кнопок квиза.
  - Добавить scoped-правило вида `.ov-landing [hidden] { display: none !important; }` или отдельное правило для `.ov-quiz__actions [hidden]`.
- Смягчить mobile typography для H1/H2.
  - Для `<=430px` уменьшить `H1` примерно до `34–36px`.
  - Для `<=430px` уменьшить `H2` примерно до `24–28px`.
  - Чуть ослабить плотность за счёт line-height около `1.02–1.06`.
- Пересобрать mobile header.
  - Уменьшить высоту и внутренние отступы.
  - Свести header-meta к более компактному виду.
- Ограничить sticky mobile CTA только действительно мобильными ширинами.
  - Логичный порог: `<=640px`.
- После правок повторно проверить:
  - `320 / 360 / 375 / 390 / 430`;
  - hero;
  - quiz;
  - final CTA;
  - tablet `768`.

## Evidence

- 320px / quiz / action buttons:
  - visible `Далее` + `Отправить` одновременно;
  - screenshot: `qa-reports/screenshots/2026-06-03/quiz-320.png`;
  - это критическая визуальная ошибка основного конверсионного сценария.

- 390px / quiz / action buttons:
  - проблема повторяется;
  - screenshot: `qa-reports/screenshots/2026-06-03/quiz-390.png`.

- 320px / hero:
  - шапка и крупный H1 визуально перегружают первый экран;
  - screenshot: `qa-reports/screenshots/2026-06-03/hero-320.png`.

- 360px / hero:
  - проблема сохраняется;
  - screenshot: `qa-reports/screenshots/2026-06-03/hero-360.png`.

- 320px / final CTA:
  - H2 не ломается технически, но слишком тяжёлый визуально;
  - screenshot: `qa-reports/screenshots/2026-06-03/final-320.png`.

## Verdict

- not ready

Страница нуждается минимум в одном обязательном исправлении по квизу и в дополнительной mobile-polish с повторным полным UI review после правок.
