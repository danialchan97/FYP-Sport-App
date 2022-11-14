import { Component, OnInit } from '@angular/core';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-cuba',
  templateUrl: './cuba.page.html',
  styleUrls: ['./cuba.page.scss'],
})
export class CubaPage implements OnInit {

  sportID : any;

  constructor(private launchNavigator: LaunchNavigator,
    private route: ActivatedRoute, private storage: Storage,) {

      this.storage.get('sportID').then((res)=>{
        
        this.sportID = res;
        console.log(this.sportID);
      })

     }

  navme(address)
  {
    this.launchNavigator.navigate(address);
  }

  ngOnInit() {
    
  }



}
