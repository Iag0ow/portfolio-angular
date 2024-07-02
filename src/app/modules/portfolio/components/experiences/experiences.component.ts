import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'FullStack | Delphi | Angular',
        p: 'DevIt | Set 2023 - Atualmente',
      },
      text: '<p>Criação de apis para integrações a ERP e MarketPlaces B2B.</p>',
    },
    {
      summary: {
        strong: 'Fullstack | Laravel | Vue',
        p: 'Everis | Abril 2023 - set 2023',
      },
      text: '<p>● Criação e desenvolvimento de sites com Laravel e Vue;</p><p>● Utilização de metodologias ágeis como Kanban e Scrum para gerenciar as tarefas de forma eficiente.</p><p>● Manutenção e melhorias do produto principal. Prefiro Delivery uma plataforma de delivery;</p><p>● Organização e controle de códigos usando Git;</p>',
    }
  ]);
}
