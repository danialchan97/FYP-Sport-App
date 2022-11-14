import { Component, OnInit } from '@angular/core';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/Storage';
import { PostProvider } from 'src/providers/post-provider';

@Component({
  selector: 'app-view-sport-center',
  templateUrl: './view-sport-center.page.html',
  styleUrls: ['./view-sport-center.page.scss'],
})
export class ViewSportCenterPage implements OnInit {

  sportID : number;
  sportName: string;

  sCenter: any = [];
  badmintons: any = [];
	limit: number = 13; // LIMIT GET PERDATA
  start: number = 0;
 

  constructor(private launchNavigator: LaunchNavigator,
    private route: ActivatedRoute, private storage: Storage, private router: Router,
		private postPvdr: PostProvider,) {

      storage.get('sportName').then((name) => {
        this.sportName = name;
        console.log('Received Parameter: ' + this.sportName);
      });

      storage.get('sportID').then((id) => {
        this.sportID = id;
        console.log('Received Parameter: ' + this.sportID);
      });

     }

     navme(address)
  {
    this.launchNavigator.navigate(address);
  }

     ionViewWillEnter() {
      this.badmintons = [];
      this.start = 0;
      this.loadSportsCenter();
    }
    
    loadData(event: any) {
      this.start += this.limit;
      setTimeout(() => {
        this.loadSportsCenter().then(() => {
          event.target.complete();
        });
      }, 500);
    }
    
    loadSportsCenter() {
      return new Promise(resolve => {
        let body = {
          sportID: this.sportID,
          aksi: 'getSportsCenter',
        };
  
        this.postPvdr.postData(body, 'viewSportsCenterModel.php').subscribe(data => {
          for (let sc of data.result) {
            this.sCenter.push(sc);
          }
          resolve(true);
        });
      });
    }

  ngOnInit() {
  }




  

}
