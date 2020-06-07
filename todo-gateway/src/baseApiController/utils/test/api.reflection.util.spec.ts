// Dependencies
import 'reflect-metadata';
import { PARAMTYPES_METADATA, ROUTE_ARGS_METADATA } from '@nestjs/common/constants';

// Under testing
import * as reflection from '../api.reflection.util';

/**
 * Utils test file for {@link api.reflection.util.ts}
 * @author Daniel Mejia
 * @File api.reflection.util.spec.ts
 */
describe('Api Reflection: Test suit', () => {
  beforeEach(() => jest.spyOn(Reflect, 'defineMetadata').mockImplementation());

  it('should set param', () => {
    const metadata = {};
    const target = Object.prototype;
    const name = 'myMethod';
    reflection.setParams(metadata, target, name);

    expect(Reflect.defineMetadata).toHaveBeenCalledWith(ROUTE_ARGS_METADATA, metadata, target, name);
  });

  it('should set param types', () => {
    const types = [String];
    const target = Object.prototype;
    const name = 'myMethod';
    reflection.setParamTypes(target, name, types);

    expect(Reflect.defineMetadata).toHaveBeenCalledWith(PARAMTYPES_METADATA, types, target, name);
  });
});
