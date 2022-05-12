import { getPets, getWalkers } from "./database.js"
import { walkerCitiesArray, cityArray } from "./Walkers.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalker) => {
    let petWalker = null

    for (const walker of walkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}


export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        //added functions from Walkers.js to invoke
        const assignmentServices = walkerCitiesArray(currentPetWalker)
        const cityNames = cityArray(assignmentServices)
    /* Mistake to fix Current Assignment List */
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${cityNames}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

