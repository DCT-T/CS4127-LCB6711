/*Dark*/
const themeToggle = document.getElementById("themeToggle");

/*ON toggle for darkmode*/
const savedTheme = localStorage.getItem("webTheme");
if (savedTheme == "dark"){
    document.body.classList.add("dark-mode")
}

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

         /*keep on*/
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("webTheme", "dark");
    } else {
        localStorage.setItem("webTheme", "light");
    }
    })
}

/*searching function*/
const locationSearch = document.getElementById("destinationSearch");
const locationCard = document.querySelectorAll(".attraction-card");

if (locationSearch) {
    locationSearch.addEventListener("input", function () {
        const searchText = locationSearch.value.toLowerCase();

        locationCard.forEach(function (card) {
            const cardText = card.textContent.toLowerCase();

            if (cardText.includes(searchText)) {
                card.style.display ="";
            } else {
                card.style.display = "none";
            }
        });
    });
}

/*Location details*/
const destinations = {
    mosque: {
        name: "Omar Ali Saifuddien Mosque",
        description: "Discover one of the most recognisable mosques in Brunei known for its golden dome and elegant design and peaceful surroundings.",
        image: "https://live.staticflickr.com/8123/8619950181_60409278cb_b.jpg",
        attractions: [
            "Exploring the mosque's exterior design",
            "Viewing the surrounding gardens and man-made lagoon",
            "Enjoy the scenery around the mosque"
        ],
    },
    kampong: {
        name: "Kampong Ayer",
        description: "Explore the world's largest water village in Brunei Darussalam!",
        image: "https://news.cgtn.com/news/3d3d414f7855544e34457a6333566d54/img/9cf02eb3f36d4d16948065f54deddb4d/9cf02eb3f36d4d16948065f54deddb4d.jpg",
        attractions: [
            "Take a water taxi and tour the village",
            "Visit the Kampong Ayer Cultural and Tourism Gallery",
            "Walk the boardwalks and meet the locals"
        ],
    },
    temburong: {
        name: "Ulu Temburong National Park",
        description: "Discover Brunei's 'Green Jewel' where ancient rainforest teeming with vibrant wildlife.",
        image: "https://i0.wp.com/borneoadventure.com/v3/wp-content/uploads/2012/01/BRN_DK_5221.jpg?fit=2000%2C1331&quality=60&strip=all&ssl=1",
        attractions: [
            "Walk the iconic canopy walkway",
            "Take a longboat up the Temburong River",
            "Relax at the river and waterfalls"
        ]
    },
    museum: {
        name: "Royal Regalia Museum",
        description: "Discover the Royal Regalia Museum, home to the sultan's heirlooms and regalia.",
        image: "https://cms.brightsun.co.uk/uploads/files/Royal-Regalia-Museum.jpg",
        attractions: [
            "See the Royal Chariot",
            "Browse royal gifts and regalia",
            "Explore the Sultan's life and reign"
        ]
    },
    monument: {
        name: "Billionth Barrel Monument",
        description: "Built in 1991, the Billionth Barrel Monument resides along the beach in Seria and is a symbol of achievement in Brunei's oil production.",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/75/32/b3/photo0jpg.jpg?w=1200&h=1200&s=1",
        attractions: [
            "See the Monument itself and take pictures",
            "Visit the Oil and Gas Discovery Centre (OGDC)",
            "Look for the nearby oil heritage sites"
        ]
    },
    waterfall: {
        name: "Teraja Waterfall",
        description: "Visit Teraja Waterfall by hiking through the dense jungle and crossing a few streams to one of Brunei's natural beauty.",
        image: "https://www.bruneitourism.com/wp-content/uploads/2024/10/teraja-waterfall-06.webp",
        attractions: [
            "Trek through the jungle to the waterfall",
            "Take a dip in the waterfall",
            "Visit the Longhouse at Teraja"
        ]
    },
    ambog: {
        name: "Bukit Ambog",
        description: "Lace up your hiking boots and hit the trail at Bukit Ambog in Tutong. You can take it easy on this beginner-friendly trail and enjoy the natural surroundings as you hike.",
        image: "https://www.bruneitourism.com/wp-content/uploads/2025/02/bukit-ambog-alltrails-LeroyJunior.webp",
        attractions: [
            "Hike the beginner friendly trail",
            "Take in the view of Tutong Town",
            "Look for any wildlife along the way" //as a local from tutong i once almost stepped on a snake while trying to climb some sections. almost fell back and hit my friend who was also climbing
        ]
    },
    merimbun: { // this place is very beautiful and very quite. tbh not really a lot of stuff to do there but personally i like it
        name: "Tasek Merimbun",
        description: "Visit Brunei's largest natural lake and designated ASEAN heritage park. Renowned for its blackwater, it is also a ideal place for wildlife photographer to take pictures.",
        image: "https://www.vacationstravel.com/wp-content/uploads/2022/01/Tasek-Merimbun-1024x683.jpg",
        attractions: [
            "Go birdwatching and wildlife spotting",
            "Walk the boardwalks and forest trails",
            "Take a boat out on the lake (This may need to be arranged in advance)"
        ]
    },
    freme: {
        name: "Freme Rainforest Lodge & Adventure Park",
        description: "Visit Freme Rainforest Lodge & Adventure Park for a relaxing time in Brunei's green jewel!",
        image: "https://www.bruneitourism.com/wp-content/uploads/2025/02/freme-rainforest-gmaps-chiew-weecheng.webp",
        attractions: [
            "Try some exhilarating activities like rafting, kayaking and tubing",
            "Cross the suspension bridge and try the zipline",
            "Use the lodge as a base for Ulu Temburong National Park"
        ]
    },
    cruise: {
        name: "Abode River Cruise",
        description: "Explore Brunei's flora and fauna while enjoying the cool river of the breeze of the Labu River on our exclusive pontoon boat.",
        image: "https://travel.asean.or.jp/wp-content/uploads/2023/07/TheAbode_RiverCruise-scaled.jpg",
        attractions: [
            "Take a daytime or sunset cruise through the mangroves",
            "Join the night cruise and look at fireflies",
            "Enjoy Brunei Fauna and try to spot the Proboscis monkey"
        ]
    },
    kenangan: {
        name: "Pantai Seri Kenangan",
        description: "The Seri Kenangan beach is a straight stretch of beach where you can park yourself in one of the shelters and have a BBQ.",
        image: "https://wallpapers.com/images/hd/brunei-pantai-seri-kenangan-beach-qgqxs0z6cucwj55b.jpg",
        attractions: [
            "Stroll on a narrow strip",
            "Eat at a local beachside restauraunt",
            "See the nearby Istana Pantai"
        ]
    },
    batu: {
        name: "Tanjong Batu Beach",
        description: "hidden gem at the end of a long, narrow road, Tanjong Batu Beach is a fairly new spot for sunset chasers and exercise buffs..",
        image: "https://www.bruneitourism.com/wp-content/uploads/2024/10/tanjungbatu-05.webp",
        attractions: [
            "Walk the sunset from the seawall",
            "Exercise along the shore",
            "Take photos and use the picnic huts"
        ]
    }
};

/*Destination details interactive page*/
/*Read location URL*/
const urlPar = new URLSearchParams(window.location.search);

const attractionKey = (
    urlPar.get("attraction") || urlPar.get("destination") || ""
).toLowerCase();

const attraction = destinations[attractionKey];

/*finding the elements*/ 
const attractionName =document.getElementById("attractionName");
const attractionDescription = document.getElementById("attractionDescription");
const attractionImage = document.getElementById("attractionImage");
const attractionsList = document.getElementById("attractionList")
const favouriteButton = document.getElementById("favouriteButton");

/*load location info*/ 
if (attraction && attractionName) {
    attractionName.textContent = attraction.name;

    if (attractionDescription) {
        attractionDescription.textContent = attraction.description;
    }

    if (attractionImage) {
        attractionImage.src = attraction.image;
        attractionImage.alt = attraction.name;
    }
    if (attractionsList) {
        attractionsList.replaceChildren();

        attraction.attractions.forEach(function(attraction) {
            const listItem = document.createElement("li");

            listItem.textContent = attraction;
            attractionsList.appendChild(listItem);
        });
    } else if (attractionName) {
        attractionName.textContent = "Select a location from Destinations to see details and add to favourites!";
    }
}

/*fav storage*/
function getFavourites () {
    const saved = localStorage.getItem("explorelyFavourites");

    return saved ? JSON.parse(saved) : [];
}

function saveFavourites(favourites) {
    localStorage.setItem(
        "explorelyFavourites",
        JSON.stringify(favourites)
    );
}

function isFavourite(attractionKey) {
    return getFavourites().includes(attractionKey);
}

/*add/remove favs*/
function updateFavouriteBtn() {
    if (!favouriteButton || !attraction) {
        return;
    }

    if (isFavourite(attractionKey)) {
        favouriteButton.textContent = "♥ Remove from Favourites";
    } else {
        favouriteButton.textContent = "♡ Add to Favourites";
    }
}

if (favouriteButton && attraction) {
    updateFavouriteBtn();

    favouriteButton.addEventListener("click", function () {
        let favourites = getFavourites();

        if (favourites.includes(attractionKey)) {
            favourites = favourites.filter(function(item) {
                return item !== attractionKey;
            });
        } else {
            favourites.push(attractionKey);
        }
        saveFavourites(favourites);
        updateFavouriteBtn();
    });
}

/*Display fav page*/
const favouritesGrid = document.getElementById("favouritesGrid");
const emptyFavourites = document.getElementById("emptyFavourites");

function displayFavourites() {
    if (!favouritesGrid) {
        return;
    }

    favouritesGrid.replaceChildren();
    const favourites = getFavourites();

    /*shows msg if no saved*/
    if (favourites.length === 0) {
        if (emptyFavourites) {
            emptyFavourites.style.display = "block";
        }
        return;
    }
    if (emptyFavourites) {
        emptyFavourites.style.display = "none";
    }
    favourites.forEach(function (key) {
        const destination = destinations[key];

        if (!destination) {
            return;
        }

        /*makes destination card*/ 
        const card = document.createElement("article");
        card.className = "destination-card";

        const image = document.createElement("img");
        image.src = destination.image;
        image.alt = destination.name

        const content = document.createElement("div");
        content.className = "card-content";

        const heading = document.createElement("h3");
        heading.textContent = destination.name;

        const description = document.createElement("p");
        description.textContent = destination.description;

        const detailsLink = document.createElement("a");
        detailsLink.href = "destinationsDetails.html?destination=" + key;

        detailsLink.className = "btn";
        detailsLink.textContent = "Learn More →";

        /*remove button*/
        const removeButton = document.createElement("button");
        removeButton.className = "btn";
        removeButton.type = "button";
        removeButton.textContent = "❤︎ Remove";
        removeButton.style.marginLeft = "8px";

        removeButton.addEventListener("click", function () {
            const updatedFavourites = getFavourites().filter(
                function (item) {
                    return item !== key;
                }
            );
            saveFavourites(updatedFavourites);
            displayFavourites();
        });
        content.append(
            heading,
            description,
            detailsLink,
            removeButton
        );
        card.append(image, content);
        favouritesGrid.appendChild(card);
    });
}
displayFavourites();

/*contact form*/
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (send) {
        send.preventDefault();
        alert("Thanks! Your email has been sent to us!");
        contactForm.reset();
    });
}