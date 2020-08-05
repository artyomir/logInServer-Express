import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';
import { RequestHandler } from 'express';

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middlewaresArray =
      Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];

    middlewaresArray.push(middleware);

    Reflect.defineMetadata(
      MetadataKeys.middleware,
      middlewaresArray,
      target,
      key
    );
  };
}
