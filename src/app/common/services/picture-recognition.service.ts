import {Injectable} from '@angular/core';
import {DetectedObject, ObjectDetectionBaseModel} from '@tensorflow-models/coco-ssd';


@Injectable({
  providedIn: 'root'
})
export class PictureRecognitionService {

  worker: Worker;

  constructor() {

  }

  async distinguish(img: ImageData, modal?: ObjectDetectionBaseModel): Promise<DetectedObject[]> {

    if (typeof Worker !== 'undefined') {
      if (!this.worker) {
        this.worker = new Worker('./picture-recognition.worker', {type: 'module'});
      }

      return await new Promise((resolve) => {
        this.worker.onmessage = ({data}) => {
          resolve(data);
        };
        this.worker.postMessage({img, modal});
      });
    } else {
      console.log('不支持worker');
    }
  }
}
