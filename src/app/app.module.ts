import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
         MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import {Route, RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
