import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AirplaneService } from "src/services/airplane.service";
import { Airplane } from "src/interfaces";
import { Socket } from "ngx-socket-io";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-details",
  templateUrl: "./details.page.html",
  styleUrls: ["./details.page.scss"]
})
export class DetailsPage implements OnInit {
  constructor(
    private airplaneService: AirplaneService,
    private activatedRoute: ActivatedRoute,
    private socket: Socket,
    private toastCtrl: ToastController
  ) {}

  departure: string;
  destination: string;
  // tslint:disable-next-line: ban-types
  duration: Number;
  // tslint:disable-next-line: ban-types
  price: Number;
  idAirplane: string;
  airplane: Airplane;

  async ngOnInit() {
    this.departure = this.activatedRoute.snapshot.params.departure;
    this.destination = this.activatedRoute.snapshot.params.destination;
    this.duration = this.activatedRoute.snapshot.params.duration;
    this.price = this.activatedRoute.snapshot.params.price;
    this.idAirplane = this.activatedRoute.snapshot.params.idAirplane;

    this.airplane = await this.airplaneService.getAirplaneById(this.idAirplane);
    this.socket.connect();

    this.socket.emit("set-airplane", this.airplane);

    this.socket.fromEvent("airplane-changed").subscribe(async data => {
      this.airplane = await this.airplaneService.getAirplaneById(
        this.airplane._id
      );
      this.showToast(data["event"]);
    });
  }

  ionViewWillLeave() {
    this.socket.disconnect();
  }

  async showToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      position: "top",
      duration: 2000
    });
    toast.present();
  }
}
