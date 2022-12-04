const api = '618f5df1d66c4ae555140ecb6052f6b3';
if ("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(
        function(position) {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            console.log(lat);
            console.log(lon);
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=metric`;
            // Отправляем запрос с помощью axios, подключила его в ссылках
            axios.get(url).then(res => {
            // Выводим результат в консоль браузера
            console.log(res.data);
            })

            // Отправка GET запроса
            axios.get(url).then(res => {
            // Вывод города
            document.querySelector('.city').innerHTML = res.data.name
            // Вывод температуры
            document.querySelector('.temp').innerHTML = res.data.main.temp
            // Вывод влажности
            document.querySelector('.humidity').innerHTML = res.data.main.humidity
            // Вывод скорости ветра
            document.querySelector('.wind').innerHTML = res.data.wind.speed
            })
        }
    );
} else {
    console.error('Ваш браузер не поддерживает геолокацию!');
}