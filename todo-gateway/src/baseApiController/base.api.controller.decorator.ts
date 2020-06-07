// Utils
import { setParams, setParamTypes } from './utils/api.reflection.util';
import { ROUTE_ARGS_METADATA, PARAMTYPES_METADATA } from '@nestjs/common/constants';

// Controllers
import { BaseController } from './base.api.controller';

/**
 * Interface to represents the options available for the controller decorator.
 * @author Daniel Mejia
 * @interface ControllerOptions
 */
export interface ControllerOptions {
  exclude?: string[];
  paramTypes?: {
    list?: unknown[];
    retrieve?: unknown[];
    create?: unknown[];
    update?: unknown[];
    delete?: unknown[];
  };
}

/**
 * Decorator to generate the base endpoints for a given controller with the options available.
 * @param { ControllerOptions } options The options available to generate the endpoints.
 * @returns { (target: any) => void } The class decorator to use in any @Controller class.
 */
export function BaseControllerApi(options: ControllerOptions): (target: { prototype: unknown }) => void {
  return (target: { prototype: unknown }): void => {
    const { prototype } = target;
    const { exclude, paramTypes } = options;

    const endpointsOverrided = Object.getOwnPropertyNames(prototype);
    const exclusions = endpointsOverrided.concat(exclude);
    const routes = Object.getOwnPropertyNames(BaseController.prototype);
  
    routes
      .filter((route) => !exclusions.includes(route))
      .forEach((route) => {
        prototype[route] = BaseController.prototype[route];
        const routeArgsMetadata = Reflect.getMetadata(ROUTE_ARGS_METADATA, BaseController, route);
        const routeParamTypes = Reflect
          .getMetadata(PARAMTYPES_METADATA, BaseController.prototype, route)
          .map((type: any, index: number) => paramTypes[route]?.[index] || type);
    
        setParams(routeArgsMetadata, target, route);
        setParamTypes(prototype, route, routeParamTypes);
      });
  };
}
