import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.page.html',
  styleUrls: ['./competition.page.scss'],
})
export class CompetitionPage implements OnInit {


  comps: any = [];
  limit: number = 13; // LIMIT GET PERDATA
  start: number = 0;

  constructor(private router: Router,
  	private postPvdr: PostProvider,) { }

  ngOnInit() {
  }

  ionViewWillEnter(){

  	this.comps = [];
  	this.start = 0;
  	this.loadComp();
  }

  loadData(event:any){
  	this.start += this.limit;
  	setTimeout(() =>{
  	this.loadComp().then(()=>{
  		event.target.complete();
  	});
  	}, 500);
  }

  loadComp(){
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'viewComp',
  		};

  		this.postPvdr.postData(body, 'competitionModel.php').subscribe(data => {
  			for(let comp of data.result){
  				this.comps.push(comp);
  			}
  			resolve(true);
  		});
  	});
  }

}
