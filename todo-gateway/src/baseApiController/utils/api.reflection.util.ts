// Dependencies
import { PARAMTYPES_METADATA, ROUTE_ARGS_METADATA } from '@nestjs/common/constants';

/**
 * Utilities for reflection uses.
 * @author Daniel Mejia
 * @file api.reflection.util.ts
 */

/**
 * Set the metadata for a endpoint param decorators as {@link https://github.com/nestjs/nest/blob/master/packages/common/enums/route-paramtypes.enum.ts}.
 * @param { any } metadata The metadata to set.
 * @param { object } target The target to set.
 * @param { string } name The name of target property.
 */
export function setParams(metadata: unknown, target: unknown, name: string): void {
  Reflect.defineMetadata(ROUTE_ARGS_METADATA, metadata, target, name);
}

/**
 * Set the param types for params as {@link https://github.com/nestjs/nest/blob/master/packages/common/enums/route-paramtypes.enum.ts}.
 * @param { any } prototype The propotype.
 * @param { string } name The name of property of the prototype.
 * @param { any[] } types The types definition sorted by index of definition.
 */
export function setParamTypes(prototype: unknown, name: string, types: unknown[]): void {
  Reflect.defineMetadata(PARAMTYPES_METADATA, types, prototype, name);
}
