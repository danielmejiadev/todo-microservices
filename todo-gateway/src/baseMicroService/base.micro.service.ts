// Dependencies
import { NotFoundException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

/**
 * Base service for resources.
 * @author Daniel Mejia
 */
export class BaseMicroService {
  /**
   * Creates an instance of {@link BaseMicroService}
   * @param repository The repository instance.
   */
  constructor(public clientProxy: ClientProxy) { }

  /**
   * List the resources.
   * @return { Promise<T[]> } The list of resources.
   */
  listResources<T>(options?: object): Promise<{ data: T[], quantity: number }> {
    return this.clientProxy
      .send<{ data: T[], quantity: number }>({ type: 'list' }, { ...options })
      .toPromise();
  }

  /**
   * Retrieve a resource by id.
   * @param { number } id The identifier of the resource.
   * @return { Promise<T> } A resource found.
   */
  retrieveResource<T>(id: number): Promise<T> {
    return this.clientProxy.send<T>({ type: 'retrieve'}, id).toPromise();
  }

  /**
   * Create a resource in.
   * @param { any } resource The resource params to create.
   * @return { Promise<T> } A resource created.
   */
  createResource<T>(resource: unknown): Promise<T> {
    return this.clientProxy.send<T>({ type: 'save'}, resource).toPromise();
  }

  /**
   * Updates a resource.
   * @param { number } id The identifier of the resource.
   * @param { T } resource The resource params to update.
   * @return { Promise<T> } A resource updated.
   */
  async updateResource<T>(id: number, resource: T): Promise<T> {
    const foundResource = await this.retrieveResource<T>(id);

    if (foundResource) {
      return this.clientProxy
        .send({ type: 'save'}, { ...foundResource, ...resource, id })
        .toPromise();
    }

    throw new NotFoundException();
  }

  /**
   * Deletes a resource.
   * @param { number } id The identifier of the resource.
   * @return { Promise<T> } A resource deleted.
   */
  async deleteResource<T>(id: number): Promise<T> {
    const foundResource = await this.retrieveResource(id);
    if (foundResource) {
      return this.clientProxy
        .send<T>({ type: 'delete'}, id)
        .toPromise();
    }

    throw new NotFoundException();
  }
}
