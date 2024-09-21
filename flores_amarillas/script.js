function createFlower() {
    const flowerContainer = document.querySelector(".flower-container");
    const maxFlowers = 15;

    if (document.querySelectorAll(".flower").length >= maxFlowers) return;

    const flowerSize = 100;
    const existingPositions = [];

    for (let j = 0; j < Math.ceil(Math.random() * 5 + 1); j++) {
        let position;
        do {
            position = {
                x: Math.random() * (window.innerWidth - flowerSize),
                y: Math.random() * (window.innerHeight - flowerSize),
            };
        } while (existingPositions.some(pos => 
            Math.sqrt(Math.pow(pos.x - position.x, 2) + Math.pow(pos.y - position.y, 2)) < 100
        ));

        existingPositions.push(position);

        const flower = document.createElement("div");
        flower.className = "flower";
        flower.style.cssText = `
            position: fixed;
            left: ${position.x}px;
            top: ${position.y}px;
            animation: fadeInFlower 1s ease-in-out both;
        `;

        for (let i = 1; i <= 10; i++) {
            const petal = document.createElement("div");
            petal.className = `petal p${i}`;
            petal.style.animation = `fadeOutPetal 0.5s ease-in-out both ${i * 0.1}s, fadeOutFlower 0.5s ease-in-out both ${Math.random() * 3000 + 2000}s`;
            flower.appendChild(petal);
        }

        flowerContainer.appendChild(flower);

        setTimeout(() => {
            flowerContainer.removeChild(flower);
            existingPositions.splice(existingPositions.indexOf(position), 1);
        }, Math.random() * 3000 + 2000);
    }
}
setInterval(createFlower, 1000);
