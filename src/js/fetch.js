import $ from 'jquery';
export default class fetchService {
  static async showPicture (date) {
    try {
      const response = await fetch (`https://api.nasa.gov/EPIC/api/enhanced/date/${date}?api_key=Jvd2fxxfc6Fc8u43oshUShji42Vd7y2eM50MMx3L`)
      if (!response.ok) {
        throw Error (response.statusText);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
  static getElements(response) {
    if (response[0].date) {
      let array = response[1].date.split(" ")[0].split("-");
      let image = `https://epic.gsfc.nasa.gov/archive/enhanced/${array[0]}/${array[1]}/${array[2]}/png/${response[0].image}.png`
      let captions = response[0].caption
      let date = response[0].date
      $('.output').append('<img src="' + image + '"</img>' + captions + date);
    } else {
      $('.output').text('There was an error.')
    }
  }
  static async makeApiCall(date) {
    const response = await fetchService.showPicture(date);
    fetchService.getElements(response);
  }
}





// async function sendApiRequest(date) {
//   //let API_KEY = `https://api.nasa.gov/EPIC/api/enhanced/date/${date}?api_key=Jvd2fxxfc6Fc8u43oshUShji42Vd7y2eM50M`;
//   let response = await fetch(`https://api.nasa.gov/EPIC/api/enhanced/date/${date}?api_key=Jvd2fxxfc6Fc8u43oshUShji42Vd7y2eM50MMx3L`)
//   let data = response.json();
//   return data;
// }