const image = document.querySelector("#myImage");
const text = document.querySelector("h2");
const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#btnTwo");

btnOne.addEventListener("click", outerSpace);
btnTwo.addEventListener("click", oldTreasures);

function outerSpace() {
    image.setAttribute("src", "https://img.freepik.com/free-vector/planets-solar-system-infographic_1308-53035.jpg?w=1380&t=st=1686558094~exp=1686558694~hmac=4af50be784f42412e73e6c685c2cd48c2b327f8e72463a5a106c0182f5d7f56e");
    text.textContent = "What planet we will fly to?";
    btnOne.textContent = "Mars";
    btnTwo.textContent = "Saturn";

    btnOne.addEventListener("click", mars);
    btnTwo.addEventListener("click", saturn);

    function mars() {
        image.setAttribute("src", "https://img.freepik.com/free-vector/mars-landscape-with-craters-red-rocky-surface_107791-17669.jpg?w=1480&t=st=1686558316~exp=1686558916~hmac=655438bdbe0a2b592453cfa25e6b34d9019c3c18ba5b677285edd4ba728d78ee");
        text.textContent = "What will we see there?";
        btnOne.textContent = "a big volcano";
        btnTwo.textContent = "a long canyon";

        btnOne.addEventListener("click", volcano);
        btnTwo.addEventListener("click", canyon);

        function volcano() {
            image.setAttribute("src", "https://img.freepik.com/free-vector/volcanic-eruption-illustration_107791-6493.jpg?w=1480&t=st=1686558547~exp=1686559147~hmac=235a27599976fd55943f1e20775d583e7de1a13bf3c327f64e6d8a7a371a3e96");
            text.textContent = "Will we ground the volcano?";
            btnOne.textContent = "Yes";
            btnTwo.textContent = "No";

            btnOne.addEventListener("click", volcanoYes);
            btnTwo.addEventListener("click", volcanoNo);

            function volcanoYes() {
                image.setAttribute("src", "https://img.freepik.com/free-vector/colorful-composition-with-fantasy-red-planet-landscape-aliens-inviting-earthlings-visit-their-planet-cartoon_1284-60108.jpg?w=1380&t=st=1686559029~exp=1686559629~hmac=eaea4caf6791ae20b95da943f6a1efc3cfe09d86f73aa3c0dde7615e05b6eac7");
                text.textContent = "And we will see aliens bathing and relaxing there.";
                btnOne.style = "display: none";
                btnTwo.style = "display: none";
            }

            function volcanoNo() {
                image.setAttribute("src", "https://img.freepik.com/free-vector/space-colorful-cartoon-game-with-red-planet-surface-night-sky-sparkling-stars-asteroids_1284-60624.jpg?w=1060&t=st=1686559718~exp=1686560318~hmac=5484ee58810da6c0e5067c31e51b5c73c1d5defef2061f60ebf316707eba7f81");
                text.textContent = "We will only examin it from our spaceship.";
                btnOne.style = "display: none";
                btnTwo.style = "display: none";
            }
        }

        function canyon() {
            image.setAttribute("src", "https://img.freepik.com/free-vector/space-planet-background-scene_1308-32546.jpg?w=1480&t=st=1686558740~exp=1686559340~hmac=6644e321761e9f84e2424b62c813df6e9c648efd48b2a87b7709fcb0eacfc1f9");
            text.textContent = "Will we ground the canyon?";
            btnOne.textContent = "Yes";
            btnTwo.textContent = "No";

            btnOne.addEventListener("click", canyonYes);
            btnTwo.addEventListener("click", canyonNo);

            function canyonYes() {
                image.setAttribute("src", "https://img.freepik.com/free-vector/soccer-ball-fire-black-background_1284-13593.jpg?w=1060&t=st=1686559901~exp=1686560501~hmac=6ac69512cb301be01aaaa8427621c80432a965dbf1d228500795c5de41eb0b85");
                text.textContent = "And we will play football there!";
                btnOne.style = "display: none";
                btnTwo.style = "display: none";
            }

            function canyonNo() {
                image.setAttribute("src", "https://img.freepik.com/free-vector/isolated-space-background-scene-background_1308-31951.jpg?w=1480&t=st=1686574109~exp=1686574709~hmac=d16ac0781810666852b2dcd2be3b643635645fd4b2a498d4a12797080a4da05c");
                text.textContent = "There will be a strong hurricane. So, we will just enjoy the canyon from our spaceship.";
                btnOne.style = "display: none";
                btnTwo.style = "display: none";
            }
        }
    }

    function saturn() {
        image.setAttribute("src", "https://img.freepik.com/free-vector/rocket-space-scene_1308-32421.jpg?w=1480&t=st=1686574260~exp=1686574860~hmac=025dd8f1c2f6ca761c3be2f7e7acf4bb8ffabeb9946bc4a691e9514c7fd6f21d");
        text.textContent = "What will we see there?";
        btnOne.textContent = "Saturn rings";
        btnTwo.textContent = "the Hexagon";

        btnOne.addEventListener("click", saturnRings);
        btnTwo.addEventListener("click", theHexagon);

        function saturnRings() {
            image.setAttribute("src", "https://img.freepik.com/free-vector/science-fiction-vector-illustration-giant-ring-planet-with-sun_604196-4.jpg?w=1380&t=st=1686575865~exp=1686576465~hmac=5d22ed6be48360e54ff6765abd2647c123ee29e354924e1b9d26b7c54ec70818");
            text.textContent = "Will we play on the rings?";
            btnOne.textContent = "Yes";
            btnTwo.textContent = "No";

            btnOne.addEventListener("click", ringsYes);
            btnTwo.addEventListener("click", ringsNo);

            function ringsYes() {
                image.setAttribute("src", "https://img.freepik.com/free-vector/astronauts-cycle-around-saturn-view-scenery-explore-minerals-flat-vector-illustration-design_1150-56743.jpg?w=1060&t=st=1686575589~exp=1686576189~hmac=05a5da99f659c6c43fc72429d235032a48846ed881476d283e4305735efde7a9");
                text.textContent = "We will play a catch-up game!";
                btnOne.style = "display: none";
                btnTwo.style = "display: none";
            }

            function ringsNo() {
                image.setAttribute("src", "https://img.freepik.com/free-vector/gradient-galaxy-background_23-2148990348.jpg?w=1060&t=st=1686574444~exp=1686575044~hmac=4c381bf0154eef9bff55c4ec066ba9cf63fbf8ad9a5141a8569f17e98aca6661");
                text.textContent = "No, we will just take a small piece of one ring for our friends.";
                btnOne.style = "display: none";
                btnTwo.style = "display: none";
            }
        }

        function theHexagon() {
            image.setAttribute("src", "https://img.freepik.com/premium-vector/life-near-event-horizon_42859-569.jpg?w=1380");
            text.textContent = "Will we fly inside this gigantic hexagonal storm?";
            btnOne.textContent = "Yes";
            btnTwo.textContent = "No";

            btnOne.addEventListener("click", hexagonYes);
            btnTwo.addEventListener("click", hexagonNo);

            function hexagonYes() {
                image.setAttribute("src", "https://img.freepik.com/free-vector/psychedelic-optical-illusion-background_52683-38957.jpg?w=1060&t=st=1686577272~exp=1686577872~hmac=071646fd167679207ff7b8d353a78f9aae549950b39300a7f2ba59dfd89855da");
                text.textContent = "It will be the fastest carousel we've ever ridden!";
                btnOne.style = "display: none";
                btnTwo.style = "display: none";
            }

            function hexagonNo() {
                image.setAttribute("src", "https://img.freepik.com/free-vector/hand-painted-watercolor-galaxy-background_52683-63441.jpg?w=1060&t=st=1686577737~exp=1686578337~hmac=8966a42ea03397e06675c60361d0ed67bbe4a7031a3d0072f4e4d137a4cb1a14");
                text.textContent = "The speed of the Hexagon is so high that we will just look at it from the distance.";
                btnOne.style = "display: none";
                btnTwo.style = "display: none";
            }
        }
    }
}

function oldTreasures() {
    image.setAttribute("src", "https://img.freepik.com/free-vector/yachting-cartoon-composition-with-open-sea-scenery-rainy-weather-with-red-sail-yacht_1284-62692.jpg?w=1380&t=st=1686577977~exp=1686578577~hmac=8f9e28c6a45023cac5f331df462b91860ddce56328bef71b941a397b18e4865e");
    text.textContent = "Will we get caught in a storm?";
    btnOne.textContent = "Yes";
    btnTwo.textContent = "No";

    btnOne.addEventListener("click", stormYes);
    btnTwo.addEventListener("click", stormNo);

    function stormYes() {
        image.setAttribute("src", "https://img.freepik.com/free-vector/waterfall-cartoon-background-with-river-stream-flowing-throw-rocks-mountain-lake-flat-illustration_1284-62764.jpg?w=1380&t=st=1686578259~exp=1686578859~hmac=74a3655efa881d29e7312fa567093a4b7ba1a015a75914a7ae822ba50cdd6a57");
        text.textContent = "Our ship will be severely damaged but still we will reach an island. What will we find there?";
        btnOne.textContent = "a large waterfall";
        btnTwo.textContent = "a deep cave";

        btnOne.addEventListener("click", waterfall);
        btnTwo.addEventListener("click", cave);

        function waterfall() {
            image.setAttribute("src", "https://img.freepik.com/premium-vector/nature-scene-with-many-trees-waterfall_1308-100678.jpg?size=626&ext=jpg&uid=R86882888&ga=GA1.2.748415115.1670098303");
            text.textContent = "Will old treasures be hidden inside this waterfall?";
            btnOne.textContent = "Yes";
            btnTwo.textContent = "No";

            btnOne.addEventListener("click", waterfallYes);
            btnTwo.addEventListener("click", waterfallNo);

            function waterfallYes() {
                image.setAttribute("src", "https://img.freepik.com/premium-vector/treasure-chest-sun-cave-background_510308-317.jpg?w=1380");
                text.textContent = "We will be surprised to find lots of golden things of different shapes.";
                btnOne.style = "display: none";
                btnTwo.style = "display: none";
            }

            function waterfallNo() {
                image.setAttribute("src", "https://img.freepik.com/free-vector/tropical-beach-landscape-scene-sunset-time_1308-58364.jpg?w=1480&t=st=1686578696~exp=1686579296~hmac=bdb3daba46420c2185800e4c9def686f154c87c273f580c1c355a36ac0928cb0");
                text.textContent = "We will continue exploring the island.";
                btnOne.style = "display: none";
                btnTwo.style = "display: none";
            }
        }

        function cave() {
            image.setAttribute("src", "https://img.freepik.com/free-vector/entrance-cave-mountain-with-scenery-landscape-view-green-grass-river-rocks-blue-sky-grotto-hidden-underground-tunnel-cavern-summer-nature-background-cartoon-vector-illustration_107791-9188.jpg?w=1380&t=st=1686579203~exp=1686579803~hmac=48982175cf9210f4c4a8c30d3d00aea7fdc5cc88dd183873767d1289aa63bf12");
            text.textContent = "Will old treasures be hidden inside this cave?";
            btnOne.textContent = "Yes";
            btnTwo.textContent = "No";

            btnOne.addEventListener("click", caveYes);
            btnTwo.addEventListener("click", caveNo);

            function caveYes() {
                image.setAttribute("src", "https://img.freepik.com/free-vector/cave-with-treasure-pile-gold-coins-jewelry-gem_107791-3742.jpg?w=1380&t=st=1686578513~exp=1686579113~hmac=bef3464606e627a3f48606be53a2ffc27dc060c338e043a0f12672f43f48f0b9");
                text.textContent = "We will go deep into the cave and find lots of treasures!";
                btnOne.style = "display: none";
                btnTwo.style = "display: none";
            }

            function caveNo() {
                image.setAttribute("src", "https://img.freepik.com/free-vector/dark-cave-landscape_1308-16279.jpg?w=1380&t=st=1686579290~exp=1686579890~hmac=de7735211e0cb6b8c114a2db3b50418e56fe611a69c2522b09930f67420e9d00");
                text.textContent = "We will examine the cave but find only stones there.";
                btnOne.style = "display: none";
                btnTwo.style = "display: none";
            }
        }
    }

    function stormNo() {
        image.setAttribute("src", "https://img.freepik.com/free-vector/volcanic-eruption-outdoor-scene-illustration_1308-51962.jpg?w=1060&t=st=1686578074~exp=1686578674~hmac=0503135b92f29fb811826612edeec97053e5c28afa9a51db518450689b9b1a81");
        text.textContent = "We will sail for many hours and reach an island. What will we see on it?";
        btnOne.textContent = "a big volcano";
        btnTwo.textContent = "a rainforest";

        btnOne.addEventListener("click", volcano);
        btnTwo.addEventListener("click", rainforest);

        function volcano() {
            image.setAttribute("src", "https://img.freepik.com/free-vector/volcanic-eruption-outdoor-scene-illustration_1308-51944.jpg?size=626&ext=jpg&uid=R86882888&ga=GA1.2.748415115.1670098303&semt=sph");
            text.textContent = "Will we go on its top?";
            btnOne.textContent = "Yes";
            btnTwo.textContent = "No";

            btnOne.addEventListener("click", topVolcanoYes);
            btnTwo.addEventListener("click", topVolcanoNo);

            function topVolcanoYes() {
                image.setAttribute("src", "https://img.freepik.com/free-vector/egyptian-tomb-interior-with-deceased-ibis-bird-doll-mummies_1284-59375.jpg?w=1380&t=st=1686579704~exp=1686580304~hmac=c1633bae318e8bb5317236b42dc602afcc86f3609f1d6378c3614d529135ff7c");
                text.textContent = "Our way will be long and difficult but finally, on the volcano top, we will find treasures!";
                btnOne.style = "display: none";
                btnTwo.style = "display: none";
            }

            function topVolcanoNo() {
                image.setAttribute("src", "https://img.freepik.com/premium-vector/treasure-cave-fantasy-game-location-cartoon-mine-with-old-gold-coins-wooden-chest-ancient-magical-pirate-cache-recent-vector-illustration_53562-17532.jpg?w=1060");
                text.textContent = "No, we will meet a local tribe and they will show us a cave with treasures.";
                btnOne.style = "display: none";
                btnTwo.style = "display: none";
            }
        }

        function rainforest() {
            image.setAttribute("src", "https://img.freepik.com/free-vector/game-landscape-with-tropical-plants_105738-732.jpg?w=1380&t=st=1686579869~exp=1686580469~hmac=ff072eb5bcd8707f31c07ea53e332d75221addcbda4f1b6d0b5f6e1f96819438");
            text.textContent = "Will we go through this rainforest?";
            btnOne.textContent = "Yes";
            btnTwo.textContent = "No";

            btnOne.addEventListener("click", rainforestYes);
            btnTwo.addEventListener("click", rainforestNo);

            function rainforestYes() {
                image.setAttribute("src", "https://img.freepik.com/free-vector/cartoon-game-treasure-trophies_1284-40112.jpg?w=1060&t=st=1686579993~exp=1686580593~hmac=6cd248228c793fe6fec7583a0f86465b67f784b4b700b9ddbc76ae2a3e6811d0");
                text.textContent = "And we will be attacked by big carnivorous plants but will be lucky to escape from them and come across old treasures!";
                btnOne.style = "display: none";
                btnTwo.style = "display: none";
            }

            function rainforestNo() {
                image.setAttribute("src", "treasures.jpg");
                text.textContent = "We will see old treasures on the island shore, take them and sail back home.";
                btnOne.style = "display: none";
                btnTwo.style = "display: none";
            }
        }
    }
}



