import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ApiService]
})
export class HomeComponent implements OnInit {

  constructor(public apiService: ApiService) {

    this.apiService.getAllProduct().subscribe(data => {
      console.log(data);
    });

   }

  ngOnInit() {
  }

}
