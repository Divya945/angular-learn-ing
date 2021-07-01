import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'App-Server', // It shouuld be string and unique name
  templateUrl: './server.component.html',
  styleUrls: ['./app.component.css']
})
export class ServerComponent implements OnInit {
  allowNewServer = false;
  serverID: number = 10;
  serverStatus: string = 'offline';
  onServerCreationStatus = 'NO Servers are created';
  getServerStatus() {
    return this.serverStatus;
  }
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {}
  onCreateServer() {
    return (this.onServerCreationStatus = 'server was Created !');
  }
}
