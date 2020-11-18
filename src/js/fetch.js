export default class fetchService {
  static async showPicture (date) {
    try {
      const response = await fetch (`https://api.nasa.gov/EPIC/api/enhanced/${date}?api_key=Jvd2fxxfc6Fc8u43oshUShji42Vd7y2eM50MMx3L`)
      if (!response.ok) {
        throw Error (response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}





// async function sendApiRequest(date) {
//   //let API_KEY = `https://api.nasa.gov/EPIC/api/enhanced/date/${date}?api_key=Jvd2fxxfc6Fc8u43oshUShji42Vd7y2eM50M`;
//   let response = await fetch(`https://api.nasa.gov/EPIC/api/enhanced/date/${date}?api_key=Jvd2fxxfc6Fc8u43oshUShji42Vd7y2eM50MMx3L`)
//   let data = response.json();
//   return data;
// }