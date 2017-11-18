import {Component} from '@angular/core';

@Component({
  selector: 'kg-carousel',
  template: `
<div class="fluid row" style="overflow: hidden">
    
    <div class="col-md-4 pr-0" style="overflow: hidden;">
      <h1 class="fluid text-center text-white" style="background-color: #444444;">SKILLS</h1>
      
      <div class="container">
        <ul class="list-unstyled">
          <li><p>Coding Languages: C | C++ | C# | Java | JavaScript | HTML | CSS | SQL | Common Lisp | x86Assembly | Prolog | Swift | Kotlin</p></li>
          <li><p>Toolsets/OS: Windows | MacOS | Ubuntu | Elementary OS | iOS | Android | Git | GitHub | Bootstrap | Semantic UI | Angular 4 | IDEA || </p></li>
          <li><p>Human Languages: English (Native) | Korean (Intermediate) | Japanese (Beginner) | Tagalog (Beginner) </p></li>
        </ul>
      </div>
      
    </div>
  
  <div class="col-md-4 px-0">
  
    <div class="container-fluid px-0 mx-0" style="overflow: hidden;">
      <h1 class="text-center text-white mx-0" style="background-color: #444444;">EXPERIENCE</h1>
      
      <div class="container">
        <h2><strong>Computer Support Specialist</strong></h2>
        <h3>University of Hawai'i at Manoa</h3>
        <ul class="list-unstyled">
          <li><p>Solved network, application, operating system, and other technical issues for a system of 50+ computers and several printers and servers and 200+ end users.</p></li>
          <li><p>Maintained and updated the department website using HTML, CSS and Wordpress.</p></li>
        </ul>
      </div>
      
      <div class="container">
        <h2>Database Programmer</h2>
        <h3>University of Hawai'i at Manoa</h3>
        <ul class="list-unstyled">
          <li><p>Ensured integrity and functionality of Microsoft Access relational database containing academic data for 200+ student athletes, mentors, tutors and advisors, including tutor session and study hall hour data.</p></li>
          <li><p>Repaired, updated, and implemented features for data report generating applications using Visual Basic for Access and Structured Query Language.</p></li>
        </ul>
      </div>
      
    </div>
  </div>
  <div class="col-md-4 pl-0">
    <div class="container-fluid px-0 mx-0" style="overflow: hidden;">
      <h1 class="text-center text-white" style="background-color: #444444; ">EDUCATION</h1>
      
      <div class="container">
        <h2>Information & Computer Science, Bachelor's</h2>
        <h3>University of Hawai'i at Manoa</h3>
        <ul class="list-unstyled">
          <li><p>ICS Coursework: Data Structures | Program Structure | Algorithms | Machine Level & Systems Programming | Data Storage & Retrieval | AI Programming | Human Computer Interaction | Design for Mobile Devices</p></li>
          <li><p>Other Coursework: General Linguistics | Articulatory Phonetics | Intro to Grammatical Analysis | Second Language Learning | Calculus I&II | Physics I&II | Chemistry I</p></li>
        </ul>
      </div>
      
      <div class="container">
        <h2>Computer Science & Engineering, International Exchange</h2>
        <h3>University of Seoul</h3>
        <ul class="list-unstyled">
          <li><p>Coursework: Formal Languages & Compilers | Upper Intermediate Korean Language</p></li>
        </ul>
      </div>
      
    </div>
  </div>
</div>
     
  
`,
})
export class KGCarouselComponent {
}
