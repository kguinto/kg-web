import {Component} from '@angular/core';
import {$} from "protractor";

@Component({
  selector: 'my-app',
  template: `
<div class="content" style="background-color: #eeeeee; min-height: 100vh">


  <div class="col-sm-12 col-md-11 col-lg-10 px-0 mx-auto" style="
    background-color: #ffffff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
  >
  
    <kg-header>
    </kg-header>
    
    <!--
    <div class="container-fluid px-0 mx-0" style="overflow: hidden;  height: 30rem;">
          <h1 class="text-center text-white" style="background-color: #444444;">PROJECTS</h1>
          <div class="container">
            <p>stuff stuff stuff</p>
          </div>
  
    </div> -->
    
    <ul class="nav justify-content-center text-white" style= "background-color: #333333">
        <li class="nav-item">
          <a class="nav-link active" href="#" (click)="showProjects = true; showResume = false;" style="text-align: center">
            <div class="text-center" style="text-align:center;">
              <i class="fa fa-code" aria-hidden="true" style="font-size: 2rem;"></i>
              <p class="mb-0">Projects</p>
            </div>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" (click)="showProjects = false; showResume = true;">
            <div class="text-center" style="text-align:center;">
              <i class="fa fa-id-card-o" aria-hidden="true" style="font-size: 2rem;"></i>
              <p class="mb-0">Resume</p>
            </div>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" (click)="showProjects = true; showResume = false;">
            <div class="text-center" style="text-align:center;">
              <i class="fa fa-book" aria-hidden="true" style="font-size: 2rem;"></i>
              <p class="mb-0">Posts</p>
            </div>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" (click)="showProjects = true; showResume = false;">
            <div class="text-center" style="text-align:center;">
              <i class="fa fa-camera-retro" aria-hidden="true" style="font-size: 2rem;"></i>
              <p class="mb-0">Pics</p>
            </div>
          </a>
        </li>
    </ul>
    
    <div class="container mx-auto" *ngIf="showProjects">
      <p>
        This section is under construction. ごめん!
      </p>
      <!--
      <h2 class="important">Projects</h2>
        <a class="important" href="/projects/corpus-tagger"><i>CorpusTagger</i></a>
        <p>Analyze lexical diversity and density of ESL essays.<br><span class="important">C#, .NET, Natural Language Processing.</span> </p>
        
        <a class="important" href="/projects/mov"><i>MOV</i></a>
        <p>Mobile-oriented video editing.<br><span class="important">Swift, iOS.</span> </p>
        
        <a class="important" href="/projects/manoa-student-kitchen"><i>Manoa Student Kitchen</i></a>
        <p>Recipe sharing between students.<br><span class="important">Web, HTML, Javascript, Meteor.</span> </p>

        <a class="important" href="/projects/cabulary"><i>Cabulary</i></a>
        <p>Vocab lists for travelers.<br><span class="important">Kotlin, Android.</span> </p>
        -->
    </div>
    
    <div id="resume" class="container mx-auto" *ngIf="showResume">
      <iframe class="mx-auto" id="resume-frame" style="width:100%; height:110em" src="https://docs.google.com/viewer?srcid=0B1pWeVDEPkHOTTVPaExWYnRNbWM&pid=explorer&efh=false&a=v&chrome=false&embedded=true" frameborder="0"><i class="fa fa-cog fa-spin fa-3x fa-fw" aria-hidden="true"></i>
            ちょっと待ってください。잠깐만요. One sec.</iframe>
    </div>
    
    <kg-footer></kg-footer> 
  
  </div>

</div>

`,
})
export class AppComponent {

  showProjects = false
  showResume = false

  resumeLoaded = false

}
