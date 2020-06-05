import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PictureRecognitionService} from '@services/picture-recognition.service';

@Component({
  selector: 'app-garbage-classification',
  templateUrl: './garbage-classification.component.html',
  styleUrls: ['./garbage-classification.component.css']
})
export class GarbageClassificationComponent implements OnInit {

  @ViewChild('c') c: ElementRef;
  ctx: CanvasRenderingContext2D;
  img: HTMLImageElement;
  status = false;
  fileStatus = false;
  file: any;

  constructor(
    private pictureRecognition: PictureRecognitionService,
  ) {
  }

  ngOnInit() {
  }

  async btnClick() {
    if (!this.fileStatus) {
      return;
    }
    const result = await this.pictureRecognition.distinguish(this.ctx.getImageData(0, 0, 200, 200), 'mobilenet_v1');
    if (!this.status) {
      result.forEach(
        value => {
          const {bbox} = value;
          bbox[0] = bbox[0];
          bbox[1] = bbox[1];
          bbox[2] = bbox[2];
          bbox[3] = bbox[3];
          this.ctx.fillText(value.class, bbox[0] + bbox[2] / 2, bbox[1] + bbox[3] / 2);
          this.ctx.strokeText(value.class, bbox[0] + bbox[2] / 2, bbox[1] + bbox[3] / 2);
          this.ctx.strokeRect(...bbox);
          this.status = true;
        }
      );
      this.ctx.stroke();
    }

  }

  /**
   * 文件上传
   */
  fileUpdate(param) {
    if (param.target.files.length !== 0) {
      this.fileStatus = true;
      if (!this.ctx) {
        this.ctx = this.c.nativeElement.getContext('2d');
      }

      this.status = false;
      this.img = new Image();
      this.file = param.target.files[0];
      this.img.src = URL.createObjectURL(param.target.files[0]);
      this.img.onload = () => {
        this.ctx.drawImage(this.img, 0, 0, 200, 200);
        this.ctx.font = '10px serif';
        this.ctx.strokeStyle = '#ff2c2a';
      };
    } else {
      this.fileStatus = false;
      this.ctx.drawImage(new Image(), 0, 0, 200, 200);
    }
  }

}
