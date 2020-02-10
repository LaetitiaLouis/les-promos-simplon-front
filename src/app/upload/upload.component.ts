import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  photo: File;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  onFileSelected(files: FileList) {
    this.photo = files.item(0);
  }

  uploadPhoto() {
    if(this.photo) {
      const formData: FormData = new FormData();
      formData.append('file', this.photo, this.photo.name);
      this.http.post('http://localhost:8080/api/photos/upload', formData).subscribe(
        success => console.log(success)
      );
    }
  }
}
