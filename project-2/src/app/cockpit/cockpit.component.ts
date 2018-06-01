import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContents: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContents: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({ serverName: this.newServerName, serverContents: this.newServerContent });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({ serverName: this.newServerName, serverContents: this.newServerContent });
  }
}
