import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leaders-detail',
  templateUrl: './leaders-detail.page.html',
  styleUrls: ['./leaders-detail.page.scss'],
})
export class LeadersDetailPage implements OnInit {

  constructor(public activatedRoute: ActivatedRoute) { }

  leader = null;

  ngOnInit() {
    let dataRetrieve = this.activatedRoute.snapshot.paramMap.get("leader");

    this.leader = JSON.parse(dataRetrieve);
    console.log(this.leader);
  }

}
