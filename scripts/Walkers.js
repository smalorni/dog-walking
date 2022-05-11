import { getWalkers } from "./database.js"

const walkers = getWalkers()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        
        /* Mistake no s on walker*/
    walkerHTML += `<li>${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML
}

