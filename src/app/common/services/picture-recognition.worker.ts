/// <reference lib="webworker" />
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import {DetectedObject, ObjectDetection, ObjectDetectionBaseModel} from '@tensorflow-models/coco-ssd';

let model: ObjectDetection;

async function loadModel(baseModel?: ObjectDetectionBaseModel): Promise<any> {
  model = await cocoSsd.load({base: baseModel || 'lite_mobilenet_v2'});
}

async function distinguish(img: ImageData, baseModel?: ObjectDetectionBaseModel): Promise<DetectedObject[]> {
  // 加载模型
  if (!model) {
    await loadModel(baseModel);
  }
  // 对图片进行分类
  return await model.detect(img);
}

addEventListener('message', ({data}) => {

  distinguish(data).then(
    value => {
      postMessage(value);
    }
  );
});
