import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'people-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public peoples = [];
  public activePeople: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/data/people-list.json')
      .subscribe((resp: any) => {
        this.peoples = resp.People.map(p => {
          p.isActive = false;
          return p;
        });
        this.activePeople = this.peoples[0];
      });
  }

  public setActive(people) {
    this.peoples.forEach(p => {
        p.isActive = false;
    });
    this.activePeople = people;
    people.isActive = true;
  }
}
