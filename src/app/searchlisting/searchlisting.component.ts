import { Component, OnInit } from '@angular/core';
import { GraphmodelService } from '../graphmodels.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './searchlisting.component.html',
  styleUrls: ['./searchlisting.component.css']
})
export class SearchlistingComponent implements OnInit {

  output: boolean = false;
  
  loggedIn: boolean = false;
  
  value: any = null;
  
  listings: number = 0;
  
  searchForm: any;

  searchCity: any;

  allListing: any;

  constructor( private db: GraphmodelService, private router: Router) {
    
  this.searchForm = new FormGroup({

    value: new FormControl("", Validators.required),
 
  })
   }

  ngOnInit(): void {

    if(localStorage.getItem('username') !== null){
    
      this.loggedIn = true;
    
    }
  }

  onSubmit() {
    if(this.searchForm.valid) {
      this.db.getListingBycity(this.searchForm.value.value).subscribe((res: any) => {
       
        this.allListing = res.data.getListingBycity;

        this.listings = res.data.getListingBycity.length;

        this.output = true;

        this.value = this.searchForm.value.value

      });
    }
  }

}