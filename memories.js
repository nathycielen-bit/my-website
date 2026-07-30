const buttons = document.querySelectorAll(".category-btn");
const gallery = document.getElementById("gallery");

const memories = {

    family: [
        {
            image: "IMG_0052.jpeg",
            title: "Family Picnic"
        }
    ],

    friends: [],

    food: [],

    travel: [],

    school: [],

    sports: []

};

function showGallery(category) {

    gallery.innerHTML = "";

    const selectedMemories = memories[category];

    selectedMemories.forEach(function(memory) {

        const card = document.createElement("div");

        card.classList.add("memory-card");

        card.innerHTML = `
            <img src="${memory.image}" alt="${memory.title}">

            <div class="overlay">
                <h3>${memory.title}</h3>
            </div>
        `;

        gallery.appendChild(card);

    });

} 

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const category = button.dataset.category;

        showGallery(category);

    });

});

showGallery("family");