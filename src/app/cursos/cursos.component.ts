import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos!: any[];
  pagina!: number;
  isncricao!: Subscription;

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    this.isncricao = this.route.queryParams.subscribe(
      (queryParams: any) => { 
        this.pagina = queryParams ['pagina'];
      }
    );
  }

  ngOnDestroy() {
    this.isncricao.unsubscribe();
  }
proximaPagina(){
  //this.pagina++;
  this.router.navigate(['/cursos'],
  {queryParams: {'pagina': ++this.pagina}}
  );
}
  }


