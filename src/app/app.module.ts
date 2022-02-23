import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { appReducer } from './store/app.state';
import { counterReducer } from './counter/state/counter-reducer';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // StoreModule.forRoot(appReducer),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      // maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    // StoreModule.forRoot({ counter: counterReducer, posts: postsReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
