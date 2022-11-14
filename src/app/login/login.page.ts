import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-provider';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  adminID: string;
  adminPass: string;

  adminTest: any;
  name: string;


  constructor(
  	private router: Router,
  	private postPvdr: PostProvider,
    public toastCtrl: ToastController,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  async login(){
    if(this.adminID != "" && this.adminPass != "")
    {

      console.log(this.adminID);
      console.log(this.adminPass);

      let body = {
        adminID: this.adminID,
        adminPass: this.adminPass,
        aksi: 'login'
      };

      this.postPvdr.postData(body, 'process-api.php').subscribe(async data =>{
        var alertpesan = data.msg;
        if(data.success){
          this.storage.set('session', data.result);
          
          this.router.navigate(['/home-admin']);
          const toast = await this.toastCtrl.create({
		    message: 'Login Succesfully.',
		  	duration: 2000
		  });
		  toast.present();
		  this.adminID = "";
		  this.adminPass = "";

        }else{
          const toast = await this.toastCtrl.create({
		    message: alertpesan,
		    duration: 2000
		  });
    	  toast.present();
        }
      });
  }
else{
  const toast = await this.toastCtrl.create({
message: 'AdminID and Password cannot be empty',
duration: 2000
});
toast.present();
}

  }

}
