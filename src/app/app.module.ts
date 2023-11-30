import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { MainComponent } from './main.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { CharactersComponent } from './pages/characters/characters.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CharactersComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // MatToolbarModule,
    // MatIconModule,
    // MatButtonModule,
    // MatCardModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatSelectModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
