import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoClass from './js/dinoClass.js';

$('#dinoform').submit(function () {
  event.preventDefault();
  const paragraphs = $('#1').val();
  $('#1').val('');
  const words = $('#2').val();
  $('#2').val('');
  DinoClass(paragraphs, words);

  /*let request = new XMLHttpRequest();
  const url = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${paragraphs}&words=${words}`;

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      getElements(response);
    }
  };

  request.open("GET", url, true);
  request.send();*/
});

export default function getElements(response) {
  for (let i = 0; i < response.length; i++) {
    $('.displaydiv').append('<p>' + response[i] + '</p>');
  }
  console.log(response);
}
