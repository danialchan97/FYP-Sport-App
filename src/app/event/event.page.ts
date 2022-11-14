import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostProvider } from '../../providers/post-provider';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-event',
	templateUrl: './event.page.html',
	styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

	events: any = [];
	limit: number = 13; // LIMIT GET PERDATA
	start: number = 0;

	constructor(
		private router: Router,
		private postPvdr: PostProvider,
	) { }

	ngOnInit() {
	}

	ionViewWillEnter() {
		this.events = [];
		this.start = 0;
		this.loadEvent();
	}

	loadData(event: any) {
		this.start += this.limit;
		setTimeout(() => {
			this.loadEvent().then(() => {
				event.target.complete();
			});
		}, 500);
	}

	loadEvent() {
		return new Promise(resolve => {
			let body = {
				aksi: 'viewEvent',
			};

			this.postPvdr.postData(body, 'eventModel.php').subscribe(data => {
				for (let event of data.result) {
					this.events.push(event);
				}
				resolve(true);
			});
		});
	}


}
