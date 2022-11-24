import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('FileRef') fileDropEl: ElementRef;
  src: any = '';

  readURL(e) {
    const input: any = this.fileDropEl.nativeElement;
    if (input.files && input.files[0]) {
         const  reader = new FileReader();
      reader.onload = (e) => {
        this.src = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
}
