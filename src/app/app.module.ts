import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MapService, NgxMapboxGLModule} from "ngx-mapbox-gl";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

let ngxMapboxConfig = NgxMapboxGLModule.withConfig({
	accessToken: 'pk.eyJ1IjoiZ2Vvcmdla2VwaGFydCIsImEiOiJjanQ4cmdmYjkwYnZnNDNwNDF4NXFiMTJmIn0.MwDDiyszR0QFmMYMNvzi1Q',

});

@NgModule({
	declarations: [AppComponent,   ],
	imports: [BrowserModule, ngxMapboxConfig, FontAwesomeModule],
	providers: [MapService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
