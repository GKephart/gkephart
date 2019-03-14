import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxMapboxGLModule} from "ngx-mapbox-gl";

let ngxMapboxConfig = NgxMapboxGLModule.withConfig({
	accessToken: 'pk.eyJ1IjoiZ2Vvcmdla2VwaGFydCIsImEiOiJjanQ4cmdmYjkwYnZnNDNwNDF4NXFiMTJmIn0.MwDDiyszR0QFmMYMNvzi1Q',

});

@NgModule({
	declarations: [AppComponent ],
	imports: [BrowserModule, ngxMapboxConfig],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
