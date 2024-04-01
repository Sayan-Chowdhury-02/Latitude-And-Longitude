const x = document.getElementById('demo')
function getLocation(){
    try{
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    catch(error){
        x.innerHTML = "Your browser is unable to fetch data from our server"
    }
}
function showPosition(position){
    x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude
}