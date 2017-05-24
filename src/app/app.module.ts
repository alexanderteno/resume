import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Custom Modules */
import { AppRoutingModule } from './app-routing.module';
import { ResumeModule } from './resume/resume.module';
import { SnippetsModule } from './snippets/snippets.module';

/* Components */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

/* Classes */
import { NavigationRoutes } from './navigation-routes';
import { ResumeBaseComponent } from './resume-base/resume-base.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResumeBaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ResumeModule,
    SnippetsModule
  ],
  providers: [NavigationRoutes],
  bootstrap: [AppComponent]
})
export class AppModule { }
