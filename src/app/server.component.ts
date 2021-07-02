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
  serverName = 'TestServer';
  serverCteated = false;
  getServerStatus() {
    return this.serverStatus;
  }
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {}
  onCreateServer() {
    this.serverCteated = true;
    return (this.onServerCreationStatus =
      'server was Created !' + this.serverName);
  }
  onUpdateServerEvent(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
