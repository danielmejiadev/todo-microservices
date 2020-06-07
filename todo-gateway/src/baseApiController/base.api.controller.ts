// Dependencies
import { Get, Param, Post, Body, ParseIntPipe, Delete, Patch } from '@nestjs/common';

/**
 * Base controller to reuse the endpoints for CRUD resources.
 * @author Daniel Mejia
 */
export class BaseController {
  /**
   * Creates an instance of {@link BaseController}
   * @param service The service manager the base entity.
   */
  constructor(public service: any) { }

  /**
   * List all the resources.
   * @return { Promise<T[]> } The list of resources.
   */
  @Get()
  list(): Promise<{data: unknown[], quantity: number}> {
    return this.service.listResources();
  }

  /**
   * Retrieve a resource by id.
   * @param { string } id The identifier of the resource.
   * @return { Promise<T> } A resource found.
   */
  @Get(':id')
  retrieve(@Param('id', ParseIntPipe) id: number): Promise<unknown> {
    return this.service.retrieveResource(id);
  }

  /**
   * Create a resource in.
   * @param { any } resource The resource params to create.
   * @return { Promise<T> } A resource created.
   */
  @Post()
  create(@Body() resource: unknown): Promise<unknown> {
    return this.service.createResource(resource);
  }

  /**
   * Update a resource.
   * @param { unknown } resource The resource params to update.
   * @param { number } id The identifier of the resource.
   * @return { Promise<T> } A resource updated.
   */
  @Patch(':id')
  update(@Body() resource: unknown, @Param('id', ParseIntPipe) id: number): Promise<unknown> {
    return this.service.updateResource(id, resource);
  }

  /**
   * Delete a resource.
   * @param { string } id The identifier of the resource.
   * @return { Promise<T> } A resource deleted.
   */
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<unknown> {
    return this.service.deleteResource(id);
  }
}
