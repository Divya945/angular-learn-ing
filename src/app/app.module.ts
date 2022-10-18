import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ServerComponent } from './server.component';
import { TopBarComponent } from './topBar/topbar.component';
import { AppProductList } from './productlist/productlist.component';
import { AppProductAlert } from './productalert/productalert.component';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ServerComponent,
    TopBarComponent,
    AppProductList,
    AppProductAlert,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
