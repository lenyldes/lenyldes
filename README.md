<div align="center">

  <img src="image.jpeg" alt="Header Banner" width="100%" />

  ## Рома Мищенко (@lenyldes)
  <p align="center">
    Начинающий DevOps / SRE-специалист.<br>
    Студент «Школы 21» (образовательная платформа от Сбера).
  </p>
  
  [![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/lenyldes_s21)
  [![Email](https://img.shields.io/badge/Email-roma__mishenko%40mail.ru-005FF9?style=for-the-badge&logo=mail.ru&logoColor=white)](mailto:roma_mishenko@mail.ru)

</div>

> TG: https://t.me/lenyldes_s21
> GitHub: https://github.com/lenyldes

> Рассматриваю работу на позициях Junior DevOps / SRE / системного инженера.<br>
> Готов быстро влиться в команду и решать реальные задачи.<br>
> Хочу учиться и прокачивать навыки — берусь за сложные вещи и не боюсь разбираться в новом.

---

### 🛠 Стек технологий и инструментов

- **Инфраструктура и ОС:** Linux (Ubuntu Server), Bash.
- **Контейнеризация и оркестрация:** Docker, Docker Compose, Multi-stage builds, CIS Docker Benchmark (Dockle).
- **CI/CD и автоматизация:** GitLab CI/CD, GitHub Actions, ChatOps (Telegram Bot API), Makefile.
- **Observability (мониторинг):** Prometheus, Grafana, Node Exporter, GoAccess.
- **Веб‑серверы и безопасность:** Nginx (Reverse Proxy, Rate Limiting), Caddy (TLS/Let’s Encrypt), FastCGI.
- **Языки и СУБД:** Go, C, Python, PostgreSQL, SQLite.

---

### 📂 Проекты и практический опыт

| 🚀 Личные пет‑проекты | 🎓 Учебные проекты (Школа 21) |
| :--- | :--- |
| **[SimpleCloud](https://github.com/lenyldes/SimpleCloud)**<br><sub>*Self‑hosted облачное хранилище файлов (текущий проект, в стадии тестирования).*</sub><br><br>**Стек:** Go, PostgreSQL, Nginx, Docker Compose, GitHub Actions, Caddy, TDD.<br>**Задача:** сделать лёгкое и безопасное self‑hosted хранилище для домашнего сервера — альтернативу тяжёлому Nextcloud. Параллельно отработал CI/CD, харденинг и модульную архитектуру.<br>**Что получилось:** настроил CI/CD‑пайплайн в GitHub Actions с PostgreSQL в сервисном контейнере и SSH‑деплоем на VPS. Внедрил Spec‑Driven Development (OpenSpec) и спроектировал хранилище с двухуровневым шардированием файлов по UUID и защитой в Nginx. | **[Linux & Networks](https://github.com/lenyldes/s21_DevOps)**<br><sub>*Администрирование Linux, маршрутизация и сетевая безопасность.*</sub><br><br>**Стек:** Linux (Ubuntu), Bash, systemd, Netplan, iptables, isc‑dhcp‑server, tcpdump, OpenSSH.<br>**Чему научился:**<br>• Администрировать ОС: работать со службами `systemd`, настраивать права и sudo, размечать диски, использовать cron;<br>• Настраивать статическую маршрутизацию (CIDR), фильтровать пакеты и делать трансляцию адресов (SNAT/DNAT, iptables);<br>• Диагностировать сеть: использовать `tcpdump`, `iperf3`, настраивать DHCP‑сервер и SSH‑туннелирование портов. |
| **[SimpleScreen](https://github.com/lenyldes/SimpleScreen)**<br><sub>*Нативная статус‑бар утилита macOS для мгновенного захвата экрана и создания скриншотов.*</sub><br><br>**Стек:** Swift, SwiftUI, ScreenCaptureKit, Carbon API, SMAppService.<br>**Задача:** обойти ограничения macOS и сохранять скриншот на диск с одновременным копированием в буфер обмена в один клик или по хоткею — без тяжёлых сторонних утилит, подписок и сетевой активности.<br>**Что получилось:** разобрался в системной разработке под macOS (ScreenCaptureKit, Carbon API, Swift Concurrency) и добавил SRE‑наблюдаемость через Unified Logging (`os.Logger`). Реализовал устойчивый дисковый ввод‑вывод с защитой от коллизий и довёл утилиту до ежедневного использования. | **[Linux Monitoring](https://github.com/lenyldes/s21_DevOps)**<br><sub>*Мониторинг, стресс‑тестирование и инструменты наблюдения за системой.*</sub><br><br>**Стек:** Prometheus, Grafana, Node Exporter, Bash, AWK, Docker Compose.<br>**Чему научился:**<br>• Разворачивать и настраивать стек Node Exporter + Prometheus + Grafana в Docker Compose;<br>• Защищать диск от переполнения при стресс‑тестах файловой системы;<br>• Делать высокопроизводительный потоковый парсинг и аналитику логов Nginx на AWK. |
| **Telegram Bots**<br><sub>*Комплекс сервисных ботов для автоматизации кампусных процессов и помощи в учёбе.*</sub><br><br>**Стек:** Python, Keycloak OAuth2, GraphQL, Docker Compose, SQLite, Systemd.<br>**Задача:** автоматизировать рутину в кампусе: безопасный онбординг студентов через Out‑of‑band 2FA ([s21_welcome.bot](https://github.com/lenyldes/s21_welcome.bot_Public)), аудит учётных записей через Keycloak API ([s21_peerchecker.bot](https://github.com/lenyldes/s21_peerchecker.bot_Public)) и мониторинг/бронирование слотов на код‑ревью с выдачей QR‑пропусков ([s21_helpers.bot](https://github.com/lenyldes/s21_helpers.bot_Public)).<br>**Что получилось:** запустил отказоустойчивые фоновые демоны (более 400 пользователей) с ротацией логов, graceful shutdown и SQLite в режиме WAL. Поработал с недокументированными API (GraphQL, Keycloak OAuth2) и контейнеризацией в Docker Compose. | **[Simple Docker](https://github.com/lenyldes/DO5_SimpleDocker)**<br><sub>*Контейнеризация сервисов и безопасность микросервисов.*</sub><br><br>**Стек:** Docker, Docker Compose, Nginx, FastCGI (C), Dockle, CIS Benchmark.<br>**Чему научился:**<br>• Поднимать простой FastCGI‑микросервис на C и связывать его со `spawn‑fcgi`;<br>• Оптимизировать слои Dockerfile и усиливать безопасность по CIS Docker Benchmark (non‑root `USER nginx`, исправлять уязвимости через Dockle);<br>• Делать двухуровневую оркестрацию в Compose с внутренней bridge‑сетью. |
| **[PS_Games_Parser](https://github.com/lenyldes/PS_Games_Parser)**<br><sub>*Многопоточный парсер каталога PlayStation Store и витрина данных.*</sub><br><br>**Стек:** Go (горутины, каналы, sync.Mutex), goquery, Vanilla JS.<br>**Задача:** ускорить поиск выгодных скидок в PS Store и фильтровать игры по русской локализации (озвучка и субтитры).<br>**Что получилось:** сделал конкурентный ETL‑пайплайн на Go с пулом горутин, синхронизацией через `sync` и обходом rate‑limiting. Собрал автономный SPA‑интерфейс на чистом JS для фильтрации и сортировки датасетов больше 4 МБ без сторонних библиотек. | **[CI/CD Pipeline](https://github.com/lenyldes/s21_DevOps)**<br><sub>*Автоматизация жизненного цикла доставки ПО в production.*</sub><br><br>**Стек:** GitLab CI/CD, GitLab Runner, Bash, SSH/SCP, Clang‑format, Telegram API.<br>**Чему научился:**<br>• Собирать 4‑стадийный пайплайн (`build`, `style_check`, `test`, `deploy`) с принципом Fail‑Fast;<br>• Реализовывать беспарольную атомарную доставку по SSH/SCP на удалённый хост с ручным гейтом (`when: manual`);<br>• Добавлять ChatOps‑оповещения о статусе джоб через Telegram Bot API. |
| **[CompPrice](https://github.com/lenyldes/CompPrice)**<br><sub>*Кросс‑платформенное приложение для расчёта и сравнения удельной цены товаров на Flutter.*</sub><br><br>**Стек:** Flutter, Dart, Material 3, OpenSpec, Lints.<br>**Задача:** быстро сравнивать реальную удельную стоимость товаров («цена за единицу/объём») в супермаркетах в удобном оффлайн приложении без рекламы, подписок и лишних разрешений.<br>**Что получилось:** освоил мобильную разработку на Flutter/Dart с реактивным интерфейсом Material 3 и без внешних runtime‑зависимостей. Отработал Spec‑Driven Development (OpenSpec) для формализации требований и детерминированной сборки. | **Системное программирование & SQL**<br><sub>*Инженерный фундамент: разработка на Си, Go и углублённый PostgreSQL.*</sub><br><br>**Стек:** Go (CSP, Clean Architecture), C (POSIX, GNU Make), PostgreSQL (ACID, MVCC).<br>**Чему научился:**<br>• **[C (s21_C)](https://github.com/lenyldes/s21_C):** изучил язык с нуля: освоил синтаксис, структуры данных, указатели и ручное управление памятью (`malloc`/`free`) без утечек (проверял через Valgrind). Написал консольные утилиты (аналоги `cat`, `grep`), написал `Makefile'ы` и модульные тесты;<br>• **[Go (s21_Go)](https://github.com/lenyldes/s21_Go):** изучил язык с нуля: работал со срезами, мапами, структурами и интерфейсами, реализовывал алгоритмы и структуры данных, использовал стандартную библиотеку, осваивал конкурентность (горутины, каналы) и строил сервисы;<br>• **[SQL (s21_SQL)](https://github.com/lenyldes/s21_SQL):** разобрался в реляционных БД: проектировал таблицы и связи, писал сложные запросы (`JOIN`, группировки, оконные функции, CTE). Изучил индексы, транзакции (ACID) и процедуры/триггеры на PL/pgSQL. |

---
