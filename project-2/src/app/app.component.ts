import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test!'}];

  onServerAdded(serverData: {serverName: string, serverContents: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContents
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContents: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverName
    });
  }

  onChangeFirst () {
    this.serverElements[0].name = 'Changed';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 2);
  }

}
