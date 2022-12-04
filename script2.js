const api = '618f5df1d66c4ae555140ecb6052f6b3';

  $(document).ready(function() {
    $('input').keydown(function(e) {
      if(e.keyCode === 13) {
        let city = $(this).val();
        console.log(city);
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${api}`;
        // Отправляем запрос с помощью axios, подключила его в ссылках
        axios.get(url).then(res => {
        // Выводим результат в консоль браузера
        var arr = res.data;
        console.log(arr);
        })
      

        // Отправка GET запроса
        axios.get(url).then(res => {
        // Вывод города
        document.querySelector('.city').innerHTML = res.data.name
        // Вывод температуры
        document.querySelector('.temp').innerHTML = res.data.main.temp
        // Вывод погоды: ветренно, снег и тд
        document.querySelector('.main').innerHTML = res.data.weather[0].main
        })        
      }
    });
  });