
  fetch('https://api.openweathermap.org/data/2.5/forecast?q=Austin,US&units=imperial&APPID=e64ad6bb3e187568a4a6dc2e3d973671')  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {

  for (var i = 0; i <= data.list.length; i += 8) {
      console.log(data.list[i].main.temp);
  }
    
    // for loop incrementing by 8 seems to work for dividing into 5 days

  })
  .catch(function() {
    // catch any errors
  });
