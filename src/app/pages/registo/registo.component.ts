import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-registo',
  templateUrl: './registo.component.html',
  styleUrls: ['./registo.component.css']
})
export class RegistoComponent {

  btnAcao = "Registar"
  btnTitulo = "Registar Funcionario"

  constructor(private funcionarioService: FuncionarioService, private router: Router) {
    
  }

  createFuncionario(funcionario : Funcionario){
    this.funcionarioService.CreateFuncionario(funcionario).subscribe((data) => {
      this.router.navigate(['/'])
    }) 
  }

}
