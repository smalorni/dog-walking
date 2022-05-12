import { getWalkers, getWalkerCities, getCities } from "./database.js"

//invoked imported functions
const walkerCities = getWalkerCities()
const newCities = getCities()

/* Declare two new functions:

Define a function that will get all objects in the walkerCities array that are for the walker that was clicked on. It should return an array of all matching objects. */

export const walkerCitiesArray = (walker) => {
    //needs empty array
    let currentAssignment = [];
        //for of loop to iterate through array of walkerCities
        for (const walkerCity of walkerCities) {
           //Check to see if primary key of walker matches foreign key of assignment
           if(walker.id === walkerCity.walkerId) {
               //if true, adds to empty array
               currentAssignment.push(walkerCity)
           }
        }
    //return new array
    return currentAssignment
}

/* Define a function that take in the array of matching objects, and use the cityId property on each one to find the matching city name. It should return a string containing all the city names. */

export const cityArray = (currentAssignment) => {
    //needs empty string
    let cityString = "";
        //for of loop to iterate the array of assignment matching objects
        for (const assignment of currentAssignment) {
            //for each assignment, iterate the cities
            for(const city of newCities) {
                if(city.id === assignment.cityId) {
                    cityString += `${city.name} `
                }
            }
            
        }
        return cityString
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    //invoke both functions
                    const assignmentServices = walkerCitiesArray(walker)
                    const cityNames = cityArray(assignmentServices)
                    //to invoke cityNames, click on it for alert message to appear
                    window.alert(`${walker.name} services ${cityNames}`)
                    
                }
            }
        }
    }
)

const walkers = getWalkers()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML
}

