import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../../services/trainer.service';
import { Entrenador } from '../../../models/gym.models';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.scss']
})
export class TrainerListComponent implements OnInit {
  trainers: Entrenador[] = [];

  constructor(private trainerService: TrainerService) { }

  ngOnInit(): void {
    this.loadTrainers();
  }

  loadTrainers(): void {
    // Datos de ejemplo
    this.trainers = [
      { id: 1, nombre: 'Alejandro Rivera', especialidad: 'Musculación', biografia: 'Experto en hipertrofia muscular y Fuerza.', fotoUrl: 'https://i.pravatar.cc/150?u=alex' },
      { id: 2, nombre: 'Sara Chene', especialidad: 'Yoga & Pilates', biografia: 'Coach de flexibilidad y mindfulness en Malabo.', fotoUrl: 'https://i.pravatar.cc/150?u=sarah' },
      { id: 3, nombre: 'Marcos Ondo', especialidad: 'CrossFit', biografia: 'Especialista en entrenamiento de alta intensidad.', fotoUrl: 'https://i.pravatar.cc/150?u=marcus' }
    ];

    // Real API call (commented out until backend is running and connected)
    /*
    this.trainerService.getAllTrainers().subscribe(data => {
      this.trainers = data;
    });
    */
  }
}
