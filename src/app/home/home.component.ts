import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../product-interface';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productservice:ProductService,private router:ActivatedRoute) { }
  public products:ProductInterface[]=[]

  ngOnInit(): void {
    this.productservice.getalldata().subscribe((i) =>{
        this.products=i
    })
  }

  delete(id:number)
  {
    this.productservice.deletedata(id).subscribe(j =>{
      this.ngOnInit()
    })
  }

}
