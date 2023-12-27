let totalDistance = 0;

// Add event listeners to input fields
const inputFields = document.querySelectorAll('input');
inputFields.forEach(inputField => {
    inputField.addEventListener('input', handleInput);
});

function handleInput() {
    const distance = parseFloat(document.getElementById("distance").value);
    const mileage = parseFloat(document.getElementById("mileage").value);
    const fuelPrice = parseFloat(document.getElementById("fuelPrice").value);
    const maintenanceCost = parseFloat(document.getElementById("maintenanceCost").value);
    const earning = parseFloat(document.getElementById("earning").value);

    if (!isNaN(distance) && !isNaN(mileage) && !isNaN(fuelPrice)) {
        calculateFuelCost(distance, mileage, fuelPrice);
    }

    if (!isNaN(maintenanceCost)) {
        calculateMaintenanceCost(maintenanceCost);
    }

    if (!isNaN(earning)) {
        calculateNetProfit();
    }
}

function calculateFuelCost(distance, mileage, fuelPrice) {
    totalDistance = distance; // Update totalDistance
    const totalFuelCost = (distance / mileage) * fuelPrice;
    const fuelCostPerKm = totalFuelCost / distance;

    document.getElementById("fuelResult").innerText = `Total Fuel Cost: RM ${totalFuelCost.toFixed(2)}`;
    document.getElementById("fuelResultPerKm").innerText = `Fuel Cost per km: RM ${fuelCostPerKm.toFixed(2)}`;
}

function calculateMaintenanceCost(maintenanceCostPer10Km) {
    const maintenanceCostPerKm = maintenanceCostPer10Km / 10000;
    const totalMaintenanceCost = maintenanceCostPerKm * totalDistance;

    document.getElementById("maintenanceResult").innerText = `Total Maintenance Cost: RM ${totalMaintenanceCost.toFixed(2)}`;
    document.getElementById("maintenanceResultPerKm").innerText = `Maintenance Cost per km: RM ${maintenanceCostPerKm.toFixed(2)}`;
}

function calculateNetProfit() {
    const earning = parseFloat(document.getElementById("earning").value);

    const fuelCost = parseFloat(document.getElementById("fuelResult").innerText.split("RM ")[1]);
    const maintenanceCost = parseFloat(document.getElementById("maintenanceResult").innerText.split("RM ")[1]);

    const netProfit = earning - fuelCost - maintenanceCost;

    document.getElementById("netProfitResult").innerText = `Net Profit: RM ${netProfit.toFixed(2)}`;
}

// Initial calculations on page load
handleInput();
