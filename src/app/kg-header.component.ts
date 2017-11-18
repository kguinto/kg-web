import {Component} from '@angular/core';

@Component({
  selector: 'kg-header',
  template: `
<header class="container-fluid text-white"
  style="overflow: hidden;
  
  background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 1) 100%), url('9.jpg') no-repeat;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(59%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 0.65))), url('9.jpg') no-repeat;
  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 59%, rgba(0, 0, 0, 1) 100%), url('9.jpg') no-repeat;
  background: -o-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 1) 100%), url('9.jpg') no-repeat;
  background: -ms-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 59%, rgba(0, 0, 0, 1) 100%), url('assets/9.jpg') no-repeat;
  background: linear-gradient(to bottom, rgba(8, 8, 8, .7) 10%, rgba(8, 8, 8, .8) 50%, rgba(8, 8, 8, .95) 100%), url('assets/9.jpg') repeat;
  
  ">
  
  <p>kirk<lml-shaka></lml-shaka>

  <br>


  </p>
  <img src="assets/kirk.jpg" class="rounded-circle img-fluid mx-auto d-block" alt="..." style="max-width: 15%; min-width: 20rem; height: auto;">
  
  <br>
  <h3 class="text-center">
    <a href={{email}} target="_blank"><i class="fa fa-envelope" aria-hidden="true"></i></a>
    <a href="https://twitter.com/kirklouiie" target="_blank"> <i class="fa fa-twitter-square" aria-hidden="true"></i></a>
    <a href="https://github.com/kguinto" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
    <a href="https://www.linkedin.com/in/kirklouieguinto/" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
  </h3>
  <p class="text-center">
    Software-Engineer-in-training.<br>
    In love with tech, language, and Marvel movies.<br>
    <i class="fa fa-map-marker" aria-hidden="true"></i> Honolulu, HI, USA
  </p>
  
<h1 class="text-center display-1"><strong>KIRK LOUIE GUINTO</strong></h1>
</header>
`,
})
export class KGHeaderComponent {
  email = 'mailto:kirklouieguinto@gmail.com';
}
