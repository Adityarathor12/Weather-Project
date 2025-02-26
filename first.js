document.querySelector("button").addEventListener("click",() =>{
    const place= document.getElementById("city-input").value;
    function updateplace(data){
        const city= document.getElementById("city-name");
        city.textContent=`Weather in ${data.location.name}`;
        const temp= document.getElementById("temperature");
        temp.textContent= `Temperature: ${data.current.temp_c}°C`;
        const condition= document.getElementById("condition");
        condition.textContent= `Condition: ${data.current.condition.text}`
    }
    const promise= fetch(`http://api.weatherapi.com/v1/current.json?key=0068930d087d479d91c123601251601&q=${place}&aqi=yes`);
    promise.then(data1=> data1.json())
    .then(data2=> updateplace(data2));
})