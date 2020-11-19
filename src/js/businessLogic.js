import fetchService from './fetch.js';
import $ from 'jquery';

export default class BusinessLogic {
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
    BusinessLogic.getElements(response);
  }
}