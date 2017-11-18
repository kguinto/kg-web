import {Component} from '@angular/core';

@Component({
  selector: 'kg-footer',
  template: `
<footer class="container-fluid text-white" style="background-color: #111111; overflow: hidden">
      <div class="container row pt-1 pb-1">
        <div class="col-md-4 col-lg-4 px-2">
          <img src="assets/kirk.jpg" class="rounded-circle img-fluid mx-auto px-2 d-block" alt="..." style="max-width: 15%; min-width: 10rem; height: auto;">
        </div>
        <div class="col-md-4 col-lg-4">
          <div class="mx-auto d-block">
            <p>
              Kirk Louie Guinto
              <br>kirk<lml-shaka></lml-shaka>
              <br>
              <a href={{email}} target="_blank"><i class="fa fa-envelope" aria-hidden="true"></i></a>
              <a href="https://twitter.com/kirklouiie" target="_blank"> <i class="fa fa-twitter-square" aria-hidden="true"></i></a>
              <a href="https://github.com/kguinto" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
              <a href="https://www.linkedin.com/in/kirklouieguinto/" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
              <br>
              	&#169; 2017
            </p>
          </div>
        </div>
         
      </div>
      
    </footer>
`,
})
export class KGFooterComponent {
  email = 'mailto:kirklouieguinto@gmail.com';
}
