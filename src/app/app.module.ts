import { NgModule,isDevMode  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//NGRX
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './contador/contador.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
///
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
     //Como ya habíamos visto en la teoría el Reduce esta dentro de mi Store.
    //forRoot: registra el estado global de la aplicación 
    StoreModule.forRoot({ count: counterReducer }),
    AppRoutingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

