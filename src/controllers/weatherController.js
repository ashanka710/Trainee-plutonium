const axios = require('axios')

let getWeather = async function(req, res) {
    try {
        let city = req.query.q
        let key = req.query.appid
        if (city && key) {
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
            }
            let result = await axios(options)
            res.status(200).send({ status: true, msg: result.data })
        } else {
            res.status(400).send({ status: false, msg: "Please provide valid city or key" })
        }

    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

let tempOfLondon = async function(req, res) {
    try {
        let city = "London"
        let key = req.query.appid
        if (key) {
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
            }
            let result = await axios(options)
            res.status(200).send({ status: true, msg: result.data.main.temp })
        } else {
            res.status(400).send({ status: false, msg: "Please provide valid  key" })
        }

    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}
cd




let tempOfCities = async function(req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let key = req.query.appid
        if (key) {

            let temp = []
            for (let i = 0; i < cities.length; i++) {

                let options = {
                    method: "get",
                    url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${key}`
                }
                let result = await axios(options)
                let tempOfCity = result.data.main.temp
                temp.push([cities[i], tempOfCity])

            }
            console.log(temp)
            let sortAccordingToTemp = (temp.sort((a, b) => (a[1] - b[1])))
                // let citiesAccordingToTemp = sortAccordingToTemp.map(x => x[0])

            res.status(200).send({ status: true, msg: sortAccordingToTemp })
        } else {
            res.status(400).send({ status: false, msg: "please provide valid key" })
        }

    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}



let getSortedCities = async function(req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray = []
            // better to use for ..of here
        for (i = 0; i < cities.length; i++) {
            let Obj = {
                    city: cities[i]
                } //{city:"bengaluru"}
            let resp = await axios.get("http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=6b02cfd5e241a90f0daf709f7ee5439c")
            console.log(resp.data.main.temp)
            Obj.temp = resp.data.main.temp //{city:"Bengaluru", temp:301.2}
            cityObjArray.push(Obj)
        }
        let sorted = cityObjArray.sort(function(a, b) {
            return a.temp - b.temp
        })

        res.status(200).send({ status: true, data: sorted })

    } catch (error) {
        console.log(error)
        res.status(500).send({ status: false, msg: "server error" })
    }

}


module.exports.getWeather = getWeather
module.exports.tempOfLondon = tempOfLondon
module.exports.tempOfCities = tempOfCities
module.exports.getSortedCities = getSortedCities