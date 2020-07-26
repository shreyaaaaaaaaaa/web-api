
const request = require("request")
const process = require("process")
const dotenv = require("dotenv").config()
const address = process.argv[2]


    const url = `http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=8280059bb875d4e78a8d0624e2df0dd1`;

    request(url, (error, response, body) => {

        const data = JSON.parse(body);

        console.log(`City =${data.name}`);
        console.log(`Country=${data.sys.country}`);
        /*console.log(`Weather= ${data.weather.main}`)
        console.log(`Description= ${data.weather.description}`) */
        console.log(`Minimum Temperature= ${data.main.temp_min}`);
        console.log(`Current Temperature=${data.main.temp}`);
        console.log(`Maximum Temperature= ${data.main.temp_max}`);
        console.log(`Minimum Temperature= ${data.main.temp_min}`);
        console.log(`Pressure= ${data.main.pressure}`);
        console.log(`Humidity= ${data.main.humidity}`);
        console.log(`Visibility= ${data.visibility}`);

    })
