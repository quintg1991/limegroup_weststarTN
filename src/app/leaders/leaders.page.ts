import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.page.html',
  styleUrls: ['./leaders.page.scss'],
})
export class LeadersPage implements OnInit {

  public leaders = [
    {
      id: 1,
      fname: "Charly",
      lname: "Deal",
      title: "Executive Director",
      company: "WestStar Leadership",
      email: "cdeal@utm.edu",
      phone: "7318117611"
    },
    {
      id: 2,
      fname: "Jordan",
      lname: "Gardner",
      title: "Office Manager",
      company: "WestStar Leadership",
      email: "jgardner@utm.edu",
      phone: "7318817005"
    },
    {
      id: 3,
      fname: "Virginia",
      lname: "Grimes",
      title: "Program Coordinator",
      company: "WestStar Leadership",
      email: "vgrimes@utm.edu",
      phone: "7318817298"
    }
  ]

  constructor(private nav: NavController, public router: Router) { }

  pushPage(leader) {
    // Everything is going through fine
    // console.log(leader);

    let dataString = JSON.stringify(leader);

    this.router.navigate(["leaders-detail", dataString]);
  }

  ngOnInit() {
  }

}
