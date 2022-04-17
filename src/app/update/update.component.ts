import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../product-interface';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private productservice:ProductService,private actroute:ActivatedRoute,private router:Router) { }
  id:number=this.actroute.snapshot.params["id"]
  public product:ProductInterface={id:0,name:"",price:0,quantity:0,description:""}
  ngOnInit(): void {
    this.productservice.getdatabyname(this.id).subscribe(i =>
      {
        this.product=i
      })
  }

  update()
  {
    this.productservice.updatedata(this.id,this.product).subscribe( pdata => {
      this.router.navigate(["home/"])
    }
      )
  }



}
