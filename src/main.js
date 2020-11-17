import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
//import Dino from './js/promiseClass.js';
//import DinoClass from './js/dinoClass.js';
import Dino from './js/promiseClass.js';

$('#dinoform').submit(function () {
  event.preventDefault();
  const paragraphs = $('#1').val();
  $('#1').val('');
  const words = $('#2').val();
  $('#2').val('');
  let promise = Dino.getDino(paragraphs, words);
  //DinoClass(paragraphs, words);
    //let promise = new Promise(function(resolve, reject){
    //let request = new XMLHttpRequest();
    //const url = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${paragraphs}&words=${words}`;
    /*request.onload = function(){
      if (this.status == 200) {
        resolve(request.response);
      } else {
        reject(request.response);
      }
    };
    request.open("GET", url, true);
    request.send();
    */
  promise.then(function(resolvedResponse) {
    const body = JSON.parse(resolvedResponse);
    for (let i = 0; i < body.length; i ++) {
      $('.displaydiv').append('<p>' + body[i] + '</p>');
    } 
  }, function(rejectedResponse) {
      console.log('rejected');
      console.log(rejectedResponse);
      console.log('hi');
  });
});
/*export default function getElements(response) {
  for (let i = 0; i < response.length; i++) {
    $('.displaydiv').append('<p>' + response[i] + '</p>');
  }
  console.log(response);
}
*/
