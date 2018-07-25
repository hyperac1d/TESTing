import { Component, ViewChild, ElementRef} from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google: any;


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage { 
 	@ViewChild('map') mapRef: ElementRef;
 	constructor(public navCtrl: NavController) {}

 	ionViewDidLoad() {
 		this.showMap();
 	}

 	showMap() {
 		//Location = lat long 
 		const location = new google.maps.LatLng
 		(51.507351, -0.127758);


 		//Map Optons 
 		const options = { 
 			center: location,
 			zoom: 15,
 			streetViewControl: false,
 			mapTypeId: 'roadmap'
 		}

 		const map = new google.maps.Map(this.mapRef.nativeElement, options);
 		
 		this.addMarker(location, map);
 	}



 	addMarker(position, map){
 		return new google.maps.Marker({
 			position, 
 			map
 		}); 
 	}
}



