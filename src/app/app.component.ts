import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  uploadedFiles: any[] = [];

  items: MenuItem[];

  home: MenuItem;

  ngOnInit() {
    this.items = [
        {label:'Categories'},
        {label:'Sports'},
        {label:'Football'},
        {label:'Countries'},
        {label:'Spain'},
        {label:'F.C. Barcelona'},
        {label:'Squad'},
        {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi', icon: 'pi pi-external-link'}
    ];
    
    this.home = {icon: 'pi pi-home'};
}

  constructor() {}

  onUpload(event) {
      for(let file of event.files) {
          this.uploadedFiles.push(file);
      }
  }
}
