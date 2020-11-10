/// <reference lib="webworker" />
import '@tensorflow/tfjs-backend-cpu';
import {DetectedObject, load, ObjectDetection, ObjectDetectionBaseModel} from '@tensorflow-models/coco-ssd';

let model: ObjectDetection;
let baseModelCache;

async function loadModel(baseModel?: ObjectDetectionBaseModel): Promise<any> {
  baseModelCache = baseModel;
  model = await load({base: baseModel || 'lite_mobilenet_v2'});
}

async function distinguish(img: any, baseModel?: ObjectDetectionBaseModel): Promise<DetectedObject[]> {
  // 加载模型
  if ((!model) || (baseModel !== baseModelCache)) {
    await loadModel(baseModel);
  }
  // 对图片进行分类
  return await model.detect(img);
}

addEventListener('message', async ({data}) => {

  const value = await distinguish(data.img, data.modal);
  postMessage(value);
});
