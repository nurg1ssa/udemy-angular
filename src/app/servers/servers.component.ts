import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false
  serverCreationStatus = 'No server was created'
  serverName = ''
  username: string
  serverCreated = false

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true
    },2000)
  }
  
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  
  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.serverCreated = true
  }
  resetUsername(){
    this.username = ''
  }
}
