const api = '618f5df1d66c4ae555140ecb6052f6b3';

if (navigator.geolocation){
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
            // Вывод погоды: ветренно, снег и тд
            document.querySelector('.main').innerHTML = res.data.weather[0].description
            })
        },
        function (){
            console.error('Ваш браузер не поддерживает геолокацию!');
            console.log("Error");
            let apiKey = 'd9e53816d07345139c58d0ea733e3870';
            $.getJSON('https://api.bigdatacloud.net/data/ip-geolocation?key=' + apiKey, function(data) {
                let city1 = JSON.stringify(data.location.principalSubdivision);
                    let city = city1.replace(/['"]+/g, '');
                    console.log(city1);
                    let url2 = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${api}`;
                    axios.get(url2).then(res => {
                    // Выводим результат в консоль браузера
                    var arr = res.data;
                    console.log(arr);
                    })
                    axios.get(url2).then(res => {
                    // Вывод города
                    document.querySelector('.city').innerHTML = res.data.name
                    // Вывод температуры
                    document.querySelector('.temp').innerHTML = res.data.main.temp
                    // Вывод погоды: ветренно, снег и тд
                    document.querySelector('.main').innerHTML = res.data.weather[0].description
                    })
            });
            // $.getJSON('https://json.geoiplookup.io/?callback=?', function(data) {

            //     });
        }
    );
}