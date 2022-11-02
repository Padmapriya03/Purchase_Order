import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { itemDetails, POModel } from './Interface/itemDetails';
import { DatePipe, } from '@angular/common';
import { SupplierDetails } from './Interface/Supplier';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  index:any;
  poid:any;
  

  pipe=new DatePipe('en-US');
  
  now=Date.now();
  mySimpleFormat=this.pipe.transform(this.now,'YYYY-MM-DD');


  objPO:POModel={
    id:0,date:this.mySimpleFormat? this.mySimpleFormat?.toString():"",
    supplierid:"",itemDetails:[]
  };
  objItem:itemDetails={id:'',quantity:'',unitprice:'',total:'',itemId:''};

  objSup:SupplierDetails={supplierId:'',supplierName:"",Email:"",PhoneNumber:""};

  editFlag:boolean=false;
  

  Add()
  {
    if(this.editFlag==false)
    {
      this.objPO.itemDetails.push(JSON.parse(JSON.stringify(this.objItem)));
    }
    else{
      this.objPO.itemDetails[this.index]=(JSON.parse(JSON.stringify(this.objItem)));
      this.editFlag=false;
    }
  }

  Edit(i: number)
  {
    this.objItem=JSON.parse(JSON.stringify(this.objPO.itemDetails[i]));
    this.editFlag=true;
    this.index=i;
  }
  Delete(i:number)
  {
    this.objPO.itemDetails.splice(i,1);
  }

  
  
  ngOnInit(): void {
    
  }
  title = 'PurchaseOrder';

  constructor(private _http: HttpClient){
  
  }

  Submit()
  {
    this.saveSupplier().subscribe(response => {
      alert("Items Added successfully")
      return response;
    });
  }

  saveSupplier()
  {
    var body = JSON.stringify(this.objPO);
    console.log(body);

    const headers= new HttpHeaders().set('content-type','application/json');
     return this._http.post("https://localhost:44369/Purchase" ,body,{headers})
  }

  
  // Save()
  // {
  //   this.saveSup().subscribe(response => {
  //     alert("suppliers Added successfully")
  //     return response;
  //   });
  // }

  // saveSup() 
  // {
  //   // var body = JSON.stringify(this.objSup);
  //   var body = {SupplierName:this.objSup.SupplierName,Email:this.objSup.Email,PhoneNumber:this.objSup.PhoneNumber};
  //   console.log(body);

  //   const headers= new HttpHeaders().set('content-type','application/json');
  //    return this._http.post("https://localhost:44369/Purchase/supplier" ,body,{headers})
  // }

}
  
  
  



