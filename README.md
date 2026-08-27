<div align="center">

  <img src="image.jpeg" alt="Header Banner" width="100%" />

  ## Рома Мищенко (@lenyldes)
  <p align="center">
    Начинающий <b>DevOps / SRE специалист</b>.<br>
    Студент «Школы 21» (образовательная платформа от Сбера).
  </p>
  
  [![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/lenyldes_s21)
  [![Email](https://img.shields.io/badge/Email-roma__mishenko%40mail.ru-005FF9?style=for-the-badge&logo=mail.ru&logoColor=white)](mailto:roma_mishenko@mail.ru)

</div>

---

### 🛠 Стек технологий и инструментов

- **Инфраструктура и ОС:** Linux (Ubuntu Server), Bash.
- **Контейнеризация и оркестрация:** Docker, Docker Compose, Multi-stage builds, CIS Docker Benchmark (Dockle).
- **CI/CD и автоматизация:** GitLab CI/CD, GitHub Actions, ChatOps (Telegram Bot API), Makefile.
- **Observability (Мониторинг):** Prometheus, Grafana, Node Exporter, GoAccess.
- **Веб-серверы и безопасность:** Nginx (Reverse Proxy, Rate Limiting), Caddy (TLS/Let's Encrypt), FastCGI.
- **Языки и СУБД:** Go, C, Python, PostgreSQL, SQLite.

---

### 📂 Проекты и практический опыт

| 🚀 Личные пет-проекты | 🎓 Учебные проекты (Школа 21) |
| :--- | :--- |
| **[SimpleCloud](https://github.com/lenyldes/SimpleCloud)**<br><sub>*Self-hosted облачное хранилище файлов (текущий проект, в стадии тестирования).*</sub><br><br>**Стек:** Go, PostgreSQL, Nginx, Docker Compose, GitHub Actions, Caddy, TDD.<br>**Чему научился:**<br>• **CI/CD:** Полная автоматизация тестирования и доставки (GitHub Actions: линтинг, тесты с сервисным контейнером PostgreSQL, автодеплой на VPS по SSH);<br>• **Агентская разработка:** Практика Spec-Driven Development с использованием инструмента [OpenSpec](https://github.com/Fission-AI/openspec);<br>• **Проектирование ПО:** Проектирование модульной архитектуры, 2-уровневое шардирование файлов по UUID, rate-limiting и безопасность в Nginx. | **[DO1 & DO2: Linux & Networks](https://github.com/lenyldes/s21_DevOps)**<br><sub>*Администрирование Linux, маршрутизация и сетевая безопасность.*</sub><br><br>**Стек:** Linux (Ubuntu), Bash, systemd, Netplan, iptables, isc-dhcp-server, tcpdump, OpenSSH.<br>**Чему научился:**<br>• Администрирование ОС: службы `systemd`, разграничение прав/sudo, разметка дисков и cron;<br>• Статическая маршрутизация (CIDR), пакетная фильтрация и трансляция адресов (SNAT/DNAT, iptables);<br>• Сетевая диагностика (`tcpdump`, `iperf3`), DHCP-сервер и SSH-туннелирование портов. |
| **[SimpleScreen](https://github.com/lenyldes/SimpleScreen)**<br><sub>*Нативная статус-бар утилита macOS для мгновенного захвата экрана и создания скриншотов.*</sub><br><br>**Стек:** Swift, SwiftUI, ScreenCaptureKit, Carbon API, SMAppService.<br>**Чему научился:**<br>• **Разработка под macOS:** Создание нативного menu-bar приложения по официальной документации Apple (Swift, SwiftUI, ScreenCaptureKit, Carbon API);<br>• **Системная интеграция:** Перехват глобальных хоткеев ОС, прозрачный оконный оверлей и регистрация сервиса автозапуска (`SMAppService`). <br>• 🚀 **Production-опыт:** Уже более 6 месяцев пользуюсь им практически каждый день. Полностью заменил им стандартную утилиту. | **[DO3 & DO4: Linux Monitoring](https://github.com/lenyldes/s21_DevOps)**<br><sub>*Мониторинг, стресс-тестирование и стек Observability.*</sub><br><br>**Стек:** Prometheus, Grafana, Node Exporter, Bash, AWK, Docker Compose.<br>**Чему научился:**<br>• Развёртывание и настройка стека Node Exporter + Prometheus + Grafana в Docker Compose;<br>• Защита от аварийного переполнения диска при стресс-тестах ФС;<br>• Высокопроизводительный потоковый парсинг и аналитика логов Nginx на AWK. |
| **Telegram Bots Ecosystem**<br><sub>*Экосистема сервисных ботов для автоматизации кампусных процессов и помощи в учебе.*</sub><br><br>**Стек:** Python, Keycloak OAuth2, GraphQL, Docker Compose, SQLite, Systemd.<br>**Чему научился:**<br>• **[s21_helpers.bot](https://github.com/lenyldes/s21_helpers.bot_Public):** Сервис-помощник и автоматизация рутинных задач студентов;<br>• **[s21_welcome.bot](https://github.com/lenyldes/s21_welcome.bot_Public):** Онбординг, верификация через Rocket.Chat/Keycloak OAuth2 и защита от фрода;<br>• **[s21_peerchecker.bot](https://github.com/lenyldes/s21_peerchecker.bot_Public):** Мониторинг проверок с исследованием GraphQL API через DevTools / F12;<br>• 🚀 **Production-опыт:** В проде с мая 2025 года, 400+ пользователей, упаковка в Docker Compose, ротация логов и systemd. | **[DO5: Simple Docker](https://github.com/lenyldes/DO5_SimpleDocker)**<br><sub>*Контейнеризация сервисов и безопасность микросервисов.*</sub><br><br>**Стек:** Docker, Docker Compose, Nginx, FastCGI (C), Dockle, CIS Benchmark.<br>**Чему научился:**<br>• Разработка FastCGI-микросервиса на C и связывание со `spawn-fcgi`;<br>• Оптимизация слоёв Dockerfile и харденинг по CIS Docker Benchmark (non-root `USER nginx`, устранение уязвимостей через Dockle);<br>• Двухуровневая оркестрация в Compose с внутренней bridge-сетью. |
| **[PS_Games_Parser](https://github.com/lenyldes/PS_Games_Parser)**<br><sub>*Многопоточный парсер каталога PlayStation Store и витрина данных.*</sub><br><br>**Стек:** Go (горутины, каналы, sync.Mutex), goquery, Vanilla JS.<br>**Чему научился:**<br>• **Многопоточный парсинг:** Конкурентный сбор каталога PlayStation Store на Go (пул горутин, `sync.WaitGroup`, обход rate-limit с джиттером);<br>• **Визуализация данных:** Построение клиентского интерфейса на чистом JS для интерактивной фильтрации, сортировки и пагинации датасетов >4 МБ. | **[DO6: CI/CD Pipeline](https://github.com/lenyldes/s21_DevOps)**<br><sub>*Автоматизация жизненного цикла доставки ПО в production.*</sub><br><br>**Стек:** GitLab CI/CD, GitLab Runner, Bash, SSH/SCP, Clang-format, Telegram API.<br>**Чему научился:**<br>• 4-стадийный пайплайн (`build`, `style_check`, `test`, `deploy`) по принципу Fail-Fast;<br>• Беспарольная атомарная доставка по SSH/SCP на удалённый хост с ручным гейтом (`when: manual`);<br>• ChatOps-оповещения о статусе джоб через Telegram Bot API. |
| **[CompPrice](https://github.com/lenyldes/CompPrice)**<br><sub>*Кросс-платформенное приложение для расчета и сравнения удельной цены товаров на Flutter.*</sub><br><br>**Стек:** Flutter, Dart, Material 3, OpenSpec, Lints.<br>**Чему научился:**<br>• **Мобильная разработка:** Создание кроссплатформенного приложения на Flutter / Dart с реактивным интерфейсом;<br>• **Spec-Driven Development:** Реализация бизнес-логики и сценариев по методологии [OpenSpec](https://github.com/Fission-AI/openspec) на основе формализованных требований. | **Системное программирование & SQL**<br><sub>*Инженерный фундамент: разработка на Си, Go и углубленный PostgreSQL.*</sub><br><br>**Стек:** Go (CSP, Clean Architecture), C (POSIX, GNU Make), PostgreSQL (ACID, MVCC).<br>**Чему научился:**<br>• **[C (s21_C)](https://github.com/lenyldes/s21_C):** Изучение языка с нуля: базовый синтаксис, структуры данных, указатели и ручное управление памятью (`malloc`/`free`) без утечек (Valgrind); разработка консольных утилит (аналоги `cat`, `grep`), написание `Makefile` и модульных тестов;<br>• **[Go (s21_Go)](https://github.com/lenyldes/s21_Go):** Изучение языка с нуля: синтаксис, срезы, мапы, структуры и интерфейсы; реализация алгоритмов и структур данных, работа со стандартной библиотекой, основы конкурентности (горутины, каналы) и построение сервисов;<br>• **[SQL (s21_SQL)](https://github.com/lenyldes/s21_SQL):** Изучение реляционных БД с нуля: проектирование таблиц и связей, составление запросов любой сложности (`JOIN`, группировки, оконные функции, CTE); базовое понимание индексов, транзакций (ACID) и процедур/триггеров на PL/pgSQL. |

---

<br>
<div align="left">
  Открыт к предложениям на позиции <b>Junior DevOps / SRE / Системный инженер</b><br>
  Готов к интересным задачам и быстрому погружению в инфраструктурный стек команды! 
  Есть огромное желание работать и впитывать неограниченный объем информации!
</div>
