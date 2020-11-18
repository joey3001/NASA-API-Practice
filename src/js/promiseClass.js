export default class NasaAPI {
  static getEpic() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.nasa.gov/EPIC/api/enhanced/date/2015-10-31?api_key=Jvd2fxxfc6Fc8u43oshUShji42Vd7y2eM50MMx3L`;
  
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        }
        else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send(); 
    });
  }
  static getWeather(city) {
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        }
        else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}