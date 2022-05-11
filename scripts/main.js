import { Walkers } from "./Walkers.js"
import { CityList } from "./CityList.js"
import { Assignments } from "./Assignments.js"
/* Mistake to fix Pet List -- needed to be imported */
import { RegisteredPets } from "./RegisteredPets.js"

/* Mistake at bottom, below h2, RegisteredPets needed to be added and invoked */
const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>DeShawns Dog Walking</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Cities with Service</h2>
        ${CityList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Walkers</h2>
        ${Walkers()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Pets</h2>
        ${RegisteredPets()}
    </section>
</article>

<article class="assignments">
    <h2>Current Assignments</h2>
    ${Assignments()}
</article>
`

mainContainer.innerHTML = applicationHTML

