
/* import getCities and store returned values */
import { getCities } from "./database.js"

//invoke function
const cities = getCities()

export const CityList = () => {
    let citiesHTML = "<ol>"
/* update for of loop to iterate the array value of "cities" */
    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}


