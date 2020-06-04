import {Injectable} from '@angular/core';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import {DetectedObject, ObjectDetection, ObjectDetectionBaseModel} from '@tensorflow-models/coco-ssd';


@Injectable({
  providedIn: 'root'
})
export class PictureRecognitionService {

  model: ObjectDetection;
  worker: Worker;

  constructor() {

  }

  async distinguish(img: HTMLImageElement | ImageData,
                    modal?: ObjectDetectionBaseModel): Promise<DetectedObject[]> {

    if (typeof Worker !== 'undefined') {
      if (!this.worker) {
        this.worker = new Worker('./picture-recognition.worker', {type: 'module'});
      }

      return await new Promise((resolve, reject) => {
        this.worker.onmessage = ({data}) => {
          resolve(data);
        };
        this.worker.postMessage(img);
      });
    } else {
      // 加载模型
      if (!this.model) {
        await this.loadModel(modal);
      }
      // 对图片进行分类
      return await this.model.detect(img);
    }
  }

  async loadModel(model?: ObjectDetectionBaseModel): Promise<any> {
    this.model = await cocoSsd.load();
  }
}
