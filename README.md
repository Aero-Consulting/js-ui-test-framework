### Проект тестов для UI

#### Запуск тестов
Перейти в директорию проекта и выполнить команду

`docker compose -f docker-compose.ui-tests.yaml up --exit-code-from codecept`

#### Генерация отчета
Перейти в директорию проекта и выполнить команду

`allure serve allure-results`