# **Проект: тестовое задание для компании [Media Works](https://mworks.ru/)**

* * *
Разработчик: 
**[Роман Демин - профиль на htmlacademy.ru](https://htmlacademy.ru/profile/id219593)**
**[Роман Демин - CV на career.habr.com](https://career.habr.com/andromman)**

* * *
Ссылка на Github Pages **[Авто Лизинг](https://demindesign/autoleasing/)**

Ссылка на хостинг **[Авто Лизинг](https://demindesign/autoleasing/)**

* * *


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
