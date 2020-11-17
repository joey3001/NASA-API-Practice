export default class DinoWeather {
  static getDino(paragraphs, words){
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${paragraphs}&words=${words}`;
      
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        }
        else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send(); 
    });
  }
  static getWeather(city) {
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6e1ee1b15240e185403d97d0b7d66145`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        }
        else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

}