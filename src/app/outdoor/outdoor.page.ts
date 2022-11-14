import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-outdoor',
  templateUrl: './outdoor.page.html',
  styleUrls: ['./outdoor.page.scss'],
})
export class OutdoorPage implements OnInit {

  sukans: any = [];
	limit: number = 13; // LIMIT GET PERDATA
  start: number = 0;
  
  constructor(
    private router: Router,
	private postPvdr: PostProvider,
	public navCtrl: NavController,
	private storage: Storage,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

		this.sukans = [];
		this.start = 0;
		this.loadSport();
	}

	loadData(event: any) {
		this.start += this.limit;
		setTimeout(() => {
			this.loadSport().then(() => {
				event.target.complete();
			});
		}, 500);
	}

	loadSport() {
		return new Promise(resolve => {
			let body = {
				aksi: 'getOutdoor',
			};

			this.postPvdr.postData(body, 'outdoorModel.php').subscribe(data => {
				for (let sukan of data.result) {
					this.sukans.push(
            sukan
            );
				}
				resolve(true);
			});
		});
	}

	sportID: any;
sportName: string;

 async goToSportCenterPage(id,name)
  {
      console.log(id);
      console.log(name);
      await this.storage.set('sportName', name);
      await this.storage.set('sportID', id);
      
      this.router.navigate(['/view-sport-center']);
  }

}
