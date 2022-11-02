import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { itemDetails, POModel } from '../Interface/itemDetails';
import { SupplierDetails } from '../Interface/Supplier';

@Component({
  selector: '',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit {
  
  constructor(private _http: HttpClient) { }
  ngOnInit(): void {this.GetSupplierList()
  }
  GetSupplierList()
  {
    const headers= new HttpHeaders().set('content-type','application/json');
     return this._http.get<SupplierDetails[]>("https://localhost:44369/Purchase/Getsupplier").subscribe(Response=>{
      console.log(Response)
      this.objSup=Response;
     });
  }
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

 // objSup:SupplierDetails={SupplierId:'',SupplierName:"",Email:"",PhoneNumber:""};
 objSup:SupplierDetails[]=[];


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

 

}
