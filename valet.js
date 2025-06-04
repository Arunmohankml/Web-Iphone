function valetGoBack(curscreen) {
    // Show the home screen
    if (curscreen=== 'valet') {
    document.getElementById('home-screen').style.display = 'grid';
    // Hide the app screen
    document.getElementById('valet-app').style.display = 'none';
    }
 }

const carinfo = [
  ["Admiral", 25000, 1264341792, "Sedan", 195],
  ["Banshee", 160000, 3253274834, "Sports", 275],
  ["Blista", 15000, 3950024287, "Compact", 160],
  ["Bobcat", 25000, 1075851868, "Pick-Up", 165],
  ["Buccaneer", 18000, 3612755468, "Muscle", 200],
  ["Burrito", 22000, 2948279460, "Van", 160],
  ["Cavalcade", 70000, 2006918058, "SUV", 195],
  ["Chavos", 20000, 4227685218, "Compact", 160],
  ["Cognoscenti", 90000, 2264796000, "Sedan", 230],
  ["Comet", 500000, 1063483177, "Sports", 270],
  ["Coquette", 350000, 108773431, "Sports", 260],
  ["Dilettante", 20000, 3164157193, "Compact", 160],
  ["Dukes", 22000, 723973206, "Muscle", 210],
  ["Contender", 25000, 2323011842, "SUV", 200],
  ["Emperor", 25000, 3609690755, "Sedan", 190],
  ["Esperanto", 18000, 4018066781, "Muscle", 180],
  ["Faction", 18000, 2175389151, "Muscle", 180],
  ["Feltzer", 30000, 3197138417, "Sports", 267],
  ["Feroci", 18000, 974744810, "Compact", 261],
  ["Fortune", 16000, 627033353, "Sedan", 275],
  ["Futo", 14000, 2016857647, "Sports", 248],
  ["Cavalcade_FXT", 55000, 675415136, "SUV", 195],
  ["Habanero", 22000, 884422927, "SUV", 230],
  ["Hakumai", 15000, 3953074643, "Sedan", 247],
  ["Huntley_Sport", 80000, 486987393, "SUV", 270],
  ["Infernus", 450000, 418536135, "Super", 322],
  ["Ingot", 10000, 3005245074, "Sedan", 230],
  ["Intruder", 25000, 886934177, "Sedan", 247],
  ["Landstalker", 30000, 1269098716, "SUV", 257],
  ["Lokus", 13000, 4257937240, "Compact", 248],
  ["Manana", 12000, 2170765704, "Compact", 240],
  ["Marbella", 15000, 1304597482, "Compact", 240],
  ["Merit", 18000, 3034085758, "Sedan", 265],
  ["Minivan", 20000, 3984502180, "Van", 234],
  ["Moonbeam", 22000, 525509695, "Van", 230],
  ["Oracle", 25000, 1348744438, "Sedan", 230],
  ["Patriot", 50000, 3486509883, "SUV", 280],
  ["Perennial", 20000, 2217223699, "Compact", 240],
  ["Peyote", 25000, 1830407356, "Sports", 200],
  ["Pinnacle", 20000, 131140572, "Compact", 210],
  ["PMP_600", 32000, 1376298265, "Sports", 260],
  ["Pony", 18000, 4175309224, "Van", 160],
  ["Premier", 18000, 2411098011, "Sedan", 195],
  ["Presidente", 25000, 2332896166, "Sedan", 190],
  ["Primo", 18000, 3144368207, "Sedan", 230],
  ["Rancher", 25000, 1390084576, "SUV", 200],
  ["Rebla", 35000, 83136452, "SUV", 230],
  ["Ruiner", 19000, 4067225593, "Sports", 210],
  ["Sabre", 20000, 3845944409, "Muscle", 220],
  ["Sabre_GT", 50000, 2609945748, "Muscle", 270],
  ["Schafter", 25000, 3972623423, "Sedan", 210],
  ["Sentinel", 25000, 1349725314, "Sports", 230],
  ["Solair", 20000, 1344573448, "Sedan", 230],
  ["Stallion", 22000, 1923400478, "Muscle", 230],
  ["Stratum", 18000, 1723137093, "Sedan", 210],
  ["Sultan", 35000, 970598228, "Sports", 210],
  ["Sultan_RS", 250000, 3999278268, "Sports", 280],
  ["Super_GT", 200000, 1821991593, "Super", 260],
  ["Turismo", 200000, 2398307655, "Super", 300],
  ["Uranus", 15000, 1534326199, "Sports", 240],
  ["Vigero", 18000, 3469130167, "Muscle", 210],
  ["Vincent", 20000, 3711685889, "Sedan", 220],
  ["Virgo", 18000, 3796912450, "Muscle", 200],
  ["Voodoo", 20000, 2006667053, "Muscle", 220],
  ["Washington", 22000, 1777363799, "Sedan", 210],
  ["Willard", 18000, 1937616578, "Sedan", 210],
  ["Freeway", 20000, 2464508460, "Motorcycle", 195],
  ["Faggio", 7000, 2452219115, "Scooter", 95],
  ["Hellfury", 25000, 584879743, "Motorcycle", 280],
  ["NRG_900", 25000, 1203311498, "Motorcycle", 230],
  ["PCJ_600", 20000, 3385765638, "Motorcycle", 220],
  ["Sanchez", 12000, 788045382, "Motorcycle", 130],
  ["Zombie", 25000, 3724934023, "Motorcycle", 180],
  ["APC", 1000000, 562680400, "Armored", 195],
  ["Bati", 15000, 4180675781, "Motorcycle", 230],
  ["Bati_Custom", 20000, 3403504941, "Motorcycle", 230],
  ["Buffalo", 65000, 3990165190, "Sports", 230],
  ["Bullet_GT", 800000, 2598821281, "Super", 300],
  ["Double_T", 12000, 2623969160, "Motorcycle", 160],
  ["Double_T_Custom", 15000, 2535109211, "Motorcycle", 170],
  ["Hakuchou", 82000, 1265391242, "Motorcycle", 250],
  ["Hakuchou_C", 85000, 4039289119, "Motorcycle", 250],
  ["Hexer", 15000, 301427732, "Motorcycle", 200],
  ["Schafter_II", 30000, 3039514899, "Sedan", 210],
  ["Serrano", 60000, 1337041428, "SUV", 230],
  ["Slamvan", 20000, 729783779, "Muscle", 220],
  ["Super_Drop", 500000, 1638119866, "Super", 280],
  ["Tampa", 75000, 972671128, "Muscle", 250],
  ["Rhapsody", 20000, 841808271, "Compact", 180],
  ["Lycan", 18000, 802082487, "Sports", 240],
  ["Nightblade", 22000, 2688780135, "Motorcycle", 210],
  ["Revenant", 20000, 3935799761, "Muscle", 230],
  
    ["Diabolus", 25000, 3886915065,"Motorcycle", 210],
   
    ["Wolfsbane", 25000, 3676349299, "Motorcycle", 210],
    ["Daemon", 22000, 2006142190, "Motorcycle", 190],
    ["Angel", 20000, 3723957976, "Motorcycle", 190],
    ["Wayfarer", 20000, 4217198264, "Motorcycle", 200],
    ["Regina", 10000, 4280472072, "Sedan", 180],
    ["Stretch", 25000, 2333339779, "Limousine", 140],
    ["DF8-90", 18000, 162883121, "Sports", 250],
    ["Akuma", 50000, 0x63ABADE7, "Motorcycle", 260],
    ["F620", 200000, 0xDCBCBE48, "Sports", 250],
    ["Faggio_Classic", 5000, 0x0350D1AB, "Scooter", 80],
    ["Stretch_E", 40000, 0xF92AEC4D, "Limousine", 140],
    ["Schafter_II_C", 50000, 0xA774B5A6, "Sedan", 220],
    ["Serrano_Custom", 80000, 0x3EA948D6, "SUV", 220],
    ["Vader", 25000, 0xF79A00F7, "Motorcycle", 210]
];

let cars = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1
];

// Function to display owned cars
// Function to display owned cars
// Function to display owned cars
function displayOwnedCars() {
    const ownedCarsContainer = document.getElementById('owned-cars');
    ownedCarsContainer.innerHTML = ''; // Clear any existing content

    let expandedBox = null; // Track the currently expanded car box

    for (let i = 0; i < carinfo.length; i++) {
        if (cars[i] === 1) {
            // Create a new car box for owned car
            const carBox = document.createElement('div');
            carBox.classList.add('car-box');

            // Create a container for the car details (name, type, top speed)
            const carDetailsContainer = document.createElement('div');
            carDetailsContainer.classList.add('car-details-container');

            // Create car name element
            const carName = document.createElement('p');
            carName.classList.add('car-name');
            carName.textContent = carinfo[i][0];
            carName.style=`color: white;`

            // Create car type element
            const carType = document.createElement('p');
            carType.textContent = `Type: ${carinfo[i][3]}`;

            // Create car top speed element
            const carTopSpeed = document.createElement('p');
            carTopSpeed.textContent = `Top Speed: ${carinfo[i][4]} km/h`;

            // Append car name, type, and top speed to the details container
            carDetailsContainer.appendChild(carName);
            carDetailsContainer.appendChild(carType);
            carDetailsContainer.appendChild(carTopSpeed);

            // Create a container for the car image
            const carImageContainer = document.createElement('div');
            carImageContainer.classList.add('car-image-container');

            // Create car image element
            const carImage = document.createElement('img');
            carImage.src = `Vehicles/${carinfo[i][0].toUpperCase()}.png`; // Adjust path as needed
            carImage.alt = carinfo[i][0];
            carImage.classList.add('car-image');

            // Append the image to the car image container
            carImageContainer.appendChild(carImage);

            // Append the car details container and image container to the car box
            carBox.appendChild(carDetailsContainer);
            carBox.appendChild(carImageContainer);

            // Create the "Spawn" button (hidden by default)
            const spawnButton = document.createElement('button');
            spawnButton.textContent = 'Spawn';
            spawnButton.classList.add('spawn-button');
            spawnButton.style.display = 'none';

            // Append the "Spawn" button to the car box
            
          carDetailsContainer.appendChild(spawnButton);

            // Append the car box to the container
            ownedCarsContainer.appendChild(carBox);

            // Add event listener to the car box after it's created
            carBox.addEventListener('click', function() {
                // Close the previously expanded box if it exists and is not the current box
                if (expandedBox && expandedBox !== carBox) {
                    expandedBox.style.height = ''; // Reset height
                    expandedBox.querySelector('.spawn-button').style.display = 'none'; // Hide the button
                }

                // Toggle the current box's expansion
                if (expandedBox === carBox) {
                    // If the clicked box is already expanded, collapse it
                    carBox.style.height = '';
                    spawnButton.style.display = 'none';
                    expandedBox = null;
                } else {
                    // Expand the clicked box
                    carBox.style.height = '300px'; // Adjust height as needed
                    spawnButton.style.display = 'block';
                    expandedBox = carBox;
                }
            });

            // Add event listener to the "Spawn" button
            spawnButton.addEventListener('click', function(event) {
                event.stopPropagation(); // Prevent the event from bubbling up to the car box click
                const carNameText = carName.textContent;
                const carId = carinfo[i][2]; // Get the model ID for the clicked car
                console.log('Car Name:', carNameText, 'Model ID:', carId);
            });
        }
    }
}

// Call the function to display the cars when the page loads
document.addEventListener("DOMContentLoaded", () => {
    displayOwnedCars();
});

// Filter Cars Based on Search
function filterCars() {
    const searchTerm = document.getElementById("car-search").value.toLowerCase();
    const carBoxes = document.querySelectorAll(".car-box");

    carBoxes.forEach(box => {
        const carName = box.querySelector(".car-name").textContent.toLowerCase();
        
        // Show or hide car boxes based on search term
        if (carName.includes(searchTerm)) {
            box.style.display = "block";
            box.style.margin = "10px"; // Optional: add some space between boxes
        } else {
            box.style.display = "none";
        }
    });

    // Reposition or reorder elements, if necessary (e.g., for grid layout)
    const container = document.querySelector(".car-container"); // Assuming a parent container
    const visibleBoxes = Array.from(carBoxes).filter(box => box.style.display === "block");
    
    // Reorder visible boxes (if needed, e.g., based on some criteria)
    container.innerHTML = ""; // Clear the container

    visibleBoxes.forEach(box => {
        container.appendChild(box); // Append each visible car box back to the container
    });
}
