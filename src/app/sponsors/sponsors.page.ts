import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.page.html',
  styleUrls: ['./sponsors.page.scss'],
})
export class SponsorsPage implements OnInit {

  public sponsors = [
    {
      name: "Alexander, Thompson & Arnold, CPA"
    },
    {
      name: "Bank of Ripley"
    },
    {
      name: "Benefits First, Lexington"
    },
    {
      name: "Central Distributors & Volunteer Distributing"
    },
    {
      name: "Ms. Shannon Cotter"
    },
    {
      name: "Davis Wealth Services"
    },
    {
      name: "First Bank, Lexington"
    },
    {
      name: "HTL Advantage"
    },
    {
      name: "Haywood County / City of Brownsville"
    },
    {
      name: "Mr. & Mrs. Jack Matthis"
    },
    {
      name: "Northwest Tennessee Development District/Human Resource Agency"
    },
    {
      name: "RFW Construction Group, Dyersburg"
    },
    {
      name: "Safelite AutoGlass"
    },
    {
      name: "Southwest Tennessee Development District"
    },
    {
      name: "Tennessee District of the TRANE Company"
    },
    {
      name: "TLM Associates, Inc."
    },
    {
      name: "The University of Tennessee at Martin"
    },
    {
      name: "USDA Rural Development"
    },
    {
      name: "Mr. Cary Vaughn"
    },
    {
      name: "Weakley County Government"
    },
    {
      name: "Wendall Alexander Realty"
    },
    {
      name: "West Tennessee Healthcare"
    },
    {
      name: "West Tennessee Healthcare Foundation"
    },
    {
      name: "West Tennessee Industrial Association"
    },
    {
      name: "Westan Insurance Group, Inc."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
