// display 

let apiKey="b57cbf2b1b4c513d8186e7d674b73c73";
let apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
let input=document.getElementById('city-input');
let search=document.getElementById('search');
let image=document.getElementById('climate');
let error=document.querySelector('.error');
let details=document.getElementById('details');

async function checkweather(city){
    let response=await fetch(apiUrl+city+`&appid=${apiKey}`)
    if(response.status == "404"){
       error.style.display="block";
       details.style.display="none";
    }
    else if(response.status == "400"){
        error.innerHTML="City name is empty";
        console.log(error)
        error.style.display="block";
        details.style.display="none";
    }
    else{
        let data=await response.json();
        console.log(data)
         
        document.querySelector('#city-name').innerHTML=data.name;
        document.querySelector('#temp').innerHTML=`Temp : ${Math.round(data.main.temp)}°C`;
        document.querySelector('#humidity').innerHTML=`Humidity : ${data.main.humidity}%`;
        document.querySelector('#wind').innerHTML=`Wind : ${data.wind.speed}km/h`;
        document.querySelector('#weather-type').innerHTML=`Weather : ${data.weather[0].main}`;

        if(data.weather[0].main == "Clouds"){
            image.src="Weather/clouds.png"
        }
        
        else if(data.weather[0].main == "Clear"){
            image.src="Weather/clear.png"
        }
    
        else if(data.weather[0].main == "Rain"){
            image.src="Weather/rain.png"
        }
    
        else if(data.weather[0].main == "Drizzle"){
            image.src="Weather/drizzle.png"
        }
    
        else if(data.weather[0].main == "Mist"){
            image.src="Weather/mist.png"
        }

        error.style.display="none";
        details.style.display="block";
    }

}

search.addEventListener('click',()=>{
    checkweather(input.value);
    setTimeout(()=>{
        error.style.display="none"
    },5000)
})

// toggle

let weatherIcon=document.getElementById('weather');
let weatherDisplay=document.querySelector('.weather-container');
let weatherClose=document.getElementById('api-close');

weatherIcon.addEventListener('dblclick',()=>{
    weatherDisplay.classList.add('display')
 })
 
 weatherClose.addEventListener('click',()=>{
    weatherDisplay.classList.remove('display')
  })
 

