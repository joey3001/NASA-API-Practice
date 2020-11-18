import fetchService from './fetch.js';
import $ from 'jquery';

export default class BusinessLogic {
  static getElements(response) {
    console.log(response);
    if (response) {
      let array = response[1].date.split("-")
      array[2] = array[2].split(" ");
      let image = `https://epic.gsfc.nasa.gov/archive/enhanced/${array[0]}/${array[1]}/${array[2][0]}/png/${response[0].image}.png`
      $('.output').append('<img src="' + image + '"</img>');
    } else {
      $('.output').text('There was an error.')
    }
  }
  static async makeApiCall(date) {
    const response = await fetchService.showPicture(date);
    BusinessLogic.getElements(response);
  }
}