import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateBenefits(){
    this.router.navigate(['/benefits'])
  }

  navigatePrime(){
    this.router.navigate(['/prime'])
  }

  navigateBia(){
    this.router.navigate(['/bia'])
  }

  navigateHome(){
    this.router.navigate([''])
  }
}
