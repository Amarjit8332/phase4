import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditemComponent } from './additem/additem.component';
import { SearchdeleteComponent } from './searchdelete/searchdelete.component';
import { AdditemserviceService } from './additemservice.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { WeightPipe } from './weight.pipe';

const routes:Routes=[
  {path:"", component: AdditemComponent},
  {path: "additem", component: AdditemComponent},
  {path: "searchdelete", component: SearchdeleteComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AdditemComponent,
    SearchdeleteComponent,
    WeightPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [AdditemserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
