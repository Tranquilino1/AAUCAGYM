import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  stats = [
    { label: 'Miembros Activos', value: '1,284', icon: 'people', color: '#6366f1' },
    { label: 'Nuevos (Este Mes)', value: '+42', icon: 'person_add', color: '#22d3ee' },
    { label: 'Clases Hoy', value: '12', icon: 'event', color: '#a855f7' },
    { label: 'Ingresos Mensuales', value: '7.5M XAF', icon: 'payments', color: '#10b981' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
