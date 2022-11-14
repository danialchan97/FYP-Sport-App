import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

	comps: any = [];
	limit: number = 13; // LIMIT GET PERDATA
	start: number = 0;

  constructor(
    private router: Router,
	  private postPvdr: PostProvider,
	  public navCtrl: NavController,
	  public navParams: NavParams,
	  ) { }
	  
	  

  ngOnInit() {
  }

  ionViewWillEnter() {
	this.comps = [];
	this.start = 0;
	this.loadComp();
}

loadData(event: any) {
	this.start += this.limit;
	setTimeout(() => {
		this.loadComp().then(() => {
			event.target.complete();
		});
	}, 500);
}

loadComp() {
	return new Promise(resolve => {
		let body = {
			aksi: 'viewComp',
		};

		this.postPvdr.postData(body, 'process-api.php').subscribe(data => {
			for (let comp of data.result) {
				this.comps.push(comp);
			}
			resolve(true);
		});
	});
}

}
