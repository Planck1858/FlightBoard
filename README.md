<h1>Задания</h1>
<h2>1.Табло Аэропорта</h2>
<p>Разработайте клиентское приложение(сайт), где будет табло аэропорта.
У табло должны быть следующие функции:
просмотр только вылетающий рейсов
просмотр только прилетающих рейсов
просмотр задержанных рейсов
поиск по номеру рейса
В качестве примера можно посмотреть на http://www.svo.aero/.
Ограничений на использование шаблонизаторов и библиотек нет.
Выложите готовый код в репозиторий на гитхаб.
Плюсом будет, если данные для табло вы получите из публичных api. Если решите их не использовать,
то положите данные в отдельный файл в репозитории.</p>

<h3>Запуск проекта</h3>
<pre>
npm install nodejs
npm install express
npm node server
</pre>

Откройте http://127.0.0.1:8000/

При разработке использовал: HTML, CSS, JS, JQuery, Bootstrap, Nodejs

<h2>2.Ticket</h2>
<div class="highlight highlight-source-js">
<pre class="highlight highlight-source-js">Почему this._i не увеличивается. Как исправить?

function Ticker() {
this._i = 0
};
Ticker.prototype = {
 tick: function() {
 console.log(this._i++);
 }
};
var ticker = new Ticker();
setInterval(ticker.tick, 1000);</pre>
</div>
