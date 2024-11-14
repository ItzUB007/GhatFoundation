import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './home/home.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"ghatfoundation-31872","appId":"1:692774486182:web:bd62163de82c7fbf0cf467","storageBucket":"ghatfoundation-31872.appspot.com","apiKey":"AIzaSyAeCQFhlCCJ5vLslPoIFbCWmOsohYxrGoI","authDomain":"ghatfoundation-31872.firebaseapp.com","messagingSenderId":"692774486182","measurementId":"G-1NRPS013EQ"})),
    provideAnalytics(() => getAnalytics())
  ],
  providers: [
    ScreenTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
