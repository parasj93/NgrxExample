import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {
  RouterStateSerializer,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import {EffectsModule} from '@ngrx/effects';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatSidenavModule} from '@angular/material/';
import {CustomSerializer} from './shared/utils';
import {reducers, metaReducers} from './reducer';
import {environment} from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    MatSidenavModule,
    MatButtonModule,
  ],
  providers: [{provide: RouterStateSerializer, useClass: CustomSerializer}],
  bootstrap: [AppComponent],
})
export class AppModule {}
