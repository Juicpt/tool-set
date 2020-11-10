import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PictureRecognitionService} from '@services/picture-recognition.service';
import {ObjectDetectionBaseModel} from '@tensorflow-models/coco-ssd';
import {NzUploadFile} from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-garbage-classification',
  templateUrl: './garbage-classification.component.html',
  styleUrls: ['./garbage-classification.component.css']
})
export class GarbageClassificationComponent implements OnInit {

  @ViewChild('c') c: ElementRef;
  ctx: CanvasRenderingContext2D;
  img: HTMLImageElement;
  file;
  width = 400;
  height = 300;
  spinning = false;
  baseModel: ObjectDetectionBaseModel = 'lite_mobilenet_v2';

  ngOnInit() {
  }

  constructor(
    private pictureRecognition: PictureRecognitionService,
  ) {
  }


  beforeUpload = (file: NzUploadFile): boolean => {
    this.file = file;
    if (file) {
      this.fileUpdate(file);
    } else {
      this.ctx.drawImage(new Image(), 0, 0, this.width, this.height);
    }
    return false;
  };

  async btnClick() {
    if (!this.file) {
      return;
    }
    this.spinning = true;
    this.ctx.drawImage(this.img, 0, 0, this.width, this.height);
    const result = await this.pictureRecognition.distinguish(this.ctx.getImageData(0, 0, this.width, this.height), this.baseModel);
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
      }
    );
    this.ctx.stroke();
    this.spinning = false;

  }

  /**
   * 文件上传
   */
  fileUpdate(file) {
    if (!this.ctx) {
      this.ctx = this.c.nativeElement.getContext('2d');
    }

    this.img = new Image();
    this.img.src = URL.createObjectURL(file);
    this.img.onload = () => {
      this.ctx.drawImage(this.img, 0, 0, this.width, this.height);
      this.ctx.font = '20px serif';
      this.ctx.strokeStyle = '#ff2c2a';
    };
  }

}
