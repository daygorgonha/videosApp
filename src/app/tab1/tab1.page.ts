import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Vídeos';

  listaVideos: IFilme [] = [
    {
      nome: 'Trem-Bala (2022)',
      lancamento: '04/08/2022',
      duracao: '2h 6m',
      classificacao: 75,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/77zENVKgbc4bhmlLfHRUbVZ99N5.jpg',
      generos: ['Ação', 'Comédia', 'Thriller']
    },
    {
      nome: 'Adão Negro (2022)',
      lancamento: '20/10/2022',
      duracao: '2h 5m',
      classificacao: 70,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9z256FFPDsL7kSVJ9oyLELaN1ph.jpg',
      generos: ['Ação', 'Fantasia', 'Ficção científica']
    },
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController) {}

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          }
        },
        {
          text: 'SIM, favoritar!',
          handler: () => {
            this.apresentarToast();
          },
        },
      ],
    });
   await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }
 }
