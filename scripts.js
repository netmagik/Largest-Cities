
const app = document.getElementById('root')
// const logo = document.createElement('img')
// logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

// app.appendChild(logo)
app.appendChild(container)

const cities = [];
fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
.then((response) => {
        return response.json()
    })
    .then((data) => {cities.push(...data)
        return cities.forEach((location) => {
            // Create a div with a card class
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            // Create H2 and set the text content to the state's name
            const h2 = document.createElement('h2')
            h2.textContent = location.state

            // Create a p and set the text content to the city's state
            const city = document.createElement('p')
            
            // location.state
            city.textContent = `${location.city}` // 
            city.setAttribute('class', 'city')

            //Add commas function
            function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }

            // Add population
            const population = document.createElement('div')
            population.textContent = `Population: ${numberWithCommas(location.population)}`
            population.setAttribute('class', 'population')

            // Add Longitude & Latitude
            const longLat = document.createElement('div')
            longLat.textContent = `Latitude: ${location.latitude},  Longitude: ${location.longitude}`
            longLat.setAttribute('class', 'longlat')
            
            // Sort by rank
            // const inOrder = cities.sort((a,b) => {
            // return (a.rank - b.rank)
            // })
            // console.table({inOrder})

            // Append the cards to the container element
            container.appendChild(card)

            //Each card will have h1 and p
            card. appendChild(h2)
            card. appendChild(city)
            card. appendChild(longLat)
            card.appendChild(population)
  

        });
    })
    .catch((err) => {
        const errorMsg = document.createElement('div')
        errorMsg.setAttribute('class', 'error')
        errorMsg.textContent = 'ERROR! NOT WORKING'

        app.appendChild(errorMsg)
        console.log('ERROR!')
    })

