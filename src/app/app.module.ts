import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './public/layout/components/sidebar/sidebar.component';
import { HeaderComponent } from './public/layout/components/header/header.component';
import { MenuComponent } from './public/layout/components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './secure/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
