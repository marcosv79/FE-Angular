import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

funcionario?: Funcionario;
id!: number

constructor(private funcionarioService : FuncionarioService, private route : ActivatedRoute, private router : Router){

}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.funcionarioService.GetFuncionario(this.id).subscribe((data) => {

      const dados = data.dados;

      dados.dataCriacao = new Date(dados.dataCriacao!).toLocaleDateString('pt-PT');
      dados.dataAlteracao = new Date(dados.dataAlteracao!).toLocaleDateString('pt-PT');

      this.funcionario = data.dados;
    })
  }

  InativaFuncionario(){
    this.funcionarioService.InativaFuncionario(this.id).subscribe((data) => {
      this.router.navigate(['/']);
    })
  }

}
