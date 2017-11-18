import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { KGHeaderComponent } from './kg-header.component';
import { KGCarouselComponent } from './kg-carousel.component';
import { KGFooterComponent } from './kg-footer.component';
import { ShakaComponent} from './shaka.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    KGHeaderComponent,
    KGCarouselComponent,
    KGFooterComponent,
    ShakaComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
