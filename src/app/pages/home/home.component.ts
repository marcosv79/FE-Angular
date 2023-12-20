import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RemoverComponent } from 'src/app/componentes/remover/remover.component';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  funcionarios: Funcionario[] = [];
  funcionariosGeral: Funcionario[] = [];

  colunas = ['Situacao', 'Nome', 'Apelido', 'Departamento', 'Ações', 'Excluir']

  constructor(private funcionarioService : FuncionarioService, public dialog: MatDialog){}

  ngOnInit(): void {
    
    this.funcionarioService.GetFuncionarios().subscribe(data => {
      const dados = data.dados;

      dados.map((item) => {
        item.dataCriacao = new Date(item.dataCriacao!).toLocaleDateString('pt-PT')
        item.dataAlteracao = new Date(item.dataAlteracao!).toLocaleDateString('pt-PT')
      })

      this.funcionarios = data.dados;
      this.funcionariosGeral = data.dados;

    });

  }

  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.funcionarios = this.funcionariosGeral.filter(funcionario => {
      return funcionario.nome.toLowerCase().includes(value);
    })
  }

  OpenDialog(id: number){
    this.dialog.open(RemoverComponent, {
      width: '450px',
      height: '450px',
      data: {
        id: id
      }
    });
  }

}
