function getRandomValues() {
    let values1 = ["Супермутант", "Супермутант-бестия", "Супермутант-мастер", "Супермутант-босс", "Супермутант-бегемот"];
    let values2 = ["Гуль", "Гуль-бродяга", "Святящийся гуль", "Гуль-потрошитель", "Гангренозный гуль"];
    let values3 = ["Яо-гай", "Радтаракан", "Коготь смерти", "Гигантский муравей", "Брамин"];
   
    document.getElementById("value1").innerHTML = getRandomValue(values1);
    document.getElementById("value2").innerHTML = getRandomValue(values2);
    document.getElementById("value3").innerHTML = getRandomValue(values3);
   }
   
   function getRandomValue(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
   }