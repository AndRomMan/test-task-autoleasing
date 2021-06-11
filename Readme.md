# **Проект: тестовое задание для компании [Media Works](https://mworks.ru/)**

* * *
Разработчик: **Роман Демин**

- **[Профиль на htmlacademy.ru](https://htmlacademy.ru/profile/id219593)**
- **[CV на career.habr.com](https://career.habr.com/andromman)**

* * *
Ссылка на Github Pages **[Авто Лизинг](https://demindesign.ru/autoleasing/)**

Ссылка на хостинг **[Авто Лизинг](https://demindesign/autoleasing/)**

* * *
## Задача
 - Сверстать макет страницы по методологии БЭМ и сделать адаптив
 - Использовать препроцессор SCSS
 - При нажатии на кнопку Войти должна открываться форма авторизации
 - По завершении загрузить на Github Pages

* * *
### Общие технические требования

1. Стандарты вёрстки: **HTML5**, **CSS3**
2. Семантически правильная вёрстка (каждый html-элемент используется осмысленно и по назначению)
3. Адаптивность сетки: мобильная, планшетная и десктопная версии по принципу **Desktop First**
На всех промежуточных разрешениях используется резиновая вёрстка
4. Методология: **БЭМ**
5. Фреймворки и сторонние библиотеки: **не используются**
6. Препроцессор: **SCSS**
7. Инструмент автоматизации: **Gulp**
8. Нестандартные шрифты подключены **локально**.
9. Модальное окно с формой авторизации на сайте: **JavaScript**
10. Система управления версиями: **Git**
    * Папка build со всем её содержимым должна попадать в репозиторий на github.
11. Сборка проекта: **Gulp**
12. Тестировать страницу на Goggle PageSpeed Insights 

### Ссылки на материалы

- **[Макет Figma](https://www.figma.com/file/zTzATxQojcX5hO0sr5jzel/Test-Landing)**

- **Шрифты**
  - **[Whitney](https://webfonts.pro/base-web-fonts/sans-serif-grotesque/898-whitney.html)**
  - **[Segoe UI](https://webfonts.pro/base-web-fonts/sans-serif-grotesque/525-segoe-ui.html)**

### Краткая инструкция по развертыванию проекта

#### Подготовка системы автоматизации сборки

**Установите**
  * [Node.js](https://nodejs.org/ru/) - последнюю версию LTS
  * NPM - установка включена в установку Node.js
    * Проверьте корректность установки Node и NPM:
        ```bash
            node --version
            npm --version
        ```
  * Gulp-cli - v4.x: 
    ```bash
        npm install --global gulp-cli
    ```
    * Проверьте корректность установки Gulp:
    ```bash
        gulp --version
    ```

### Порядок работы с проектом:
* Запустите терминал из корневой директории проекта
* Установите npm-пакеты плагинов сборки и тестирования (devDependencies из файла package.json) 
  ```bash
      npm i
  ```
* Протестируйте код на соответствия style-guides
  ```bash 
      npm test
  ```
* Соберите проект без запуска локального сервера
  ```bash
      npm run build
  ```
* Запустите локальный сервер
  ```bash
      npm start
  ```
