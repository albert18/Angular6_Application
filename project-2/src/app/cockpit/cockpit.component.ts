import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContents: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContents: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    // console.log(this.serverContentInput);
    // console.log(nameInput.value);
    this.serverCreated.emit({ serverName: nameInput.value, serverContents: this.serverContentInput.nativeElement.value });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({ serverName: nameInput.value, serverContents: this.serverContentInput.nativeElement.value });
  }
}
