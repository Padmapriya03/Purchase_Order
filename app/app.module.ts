import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DemoMaterialModule } from './material';
import { SupplierComponent } from './supplier/supplier.component';
import { RouterModule, Routes } from '@angular/router';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import { FirstPageComponent } from './first-page/first-page.component';


const routes: Routes =[

  {path: 'Open',  component:SupplierComponent},
  {path: 'ADD',  component:BillDetailsComponent},
  {path: '',  component:FirstPageComponent},
  
];
const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    SupplierComponent,
    BillDetailsComponent,
    FirstPageComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,FormsModule,HttpClientModule,
    DemoMaterialModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
