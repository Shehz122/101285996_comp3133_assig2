import { Component, OnInit } from '@angular/core';
import { GraphmodelService } from '../graphmodels.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './bookinghome.component.html',
  styleUrls: ['./bookinghome.component.css']
})
export class BookinghomeComponent implements OnInit {
  allListing:any=[];

  loginStatus: boolean = false;

  constructor( private db: GraphmodelService, private router : Router) { }

  ngOnInit(): void {

    this.db.getListing().subscribe((allListing: any) => {
    
      this.allListing = allListing.data.getListing;
    
      console.log(allListing)
    });
    
    if(localStorage.getItem('token')){

      this.db.getCurrentUser().subscribe((res: any) => {

        localStorage.setItem('type', res.data?.getCurrentUser.type)

        console.log(res.data.getCurrentUser.type)
     
      })

      this.loginStatus = true;

    }
  }
}