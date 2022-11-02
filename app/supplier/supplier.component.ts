import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SupplierDetails } from '../Interface/Supplier';



@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {


  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }
  objSup:SupplierDetails={supplierId:'',supplierName:"",Email:"",PhoneNumber:""};

  

   Save()
  {
    this.saveSup().subscribe(response => {
      alert("supplier Details Added successfully")
      return response;
    });
  }

  saveSup() 
  {
    // var body = JSON.stringify(this.objSup);
    var body = {SupplierName:this.objSup.supplierName,Email:this.objSup.Email,PhoneNumber:this.objSup.PhoneNumber};
    console.log(body);

    const headers= new HttpHeaders().set('content-type','application/json');
     return this._http.post("https://localhost:44369/Purchase/supplier" ,body,{headers})
  }

}
