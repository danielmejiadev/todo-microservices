// Dependencies
import { Repository, DeepPartial, DeleteResult, FindManyOptions } from 'typeorm';

/**
 * Base service for resources.
 * @author Daniel Mejia
 */
export class BaseService<T> {
  /**
   * Creates an instance of {@link BaseService}
   * @param repository The repository instance.
   */
  constructor(public repository: Repository<T>) { }

  /**
   * List the resources.
   * @return The list of resources.
   */
  async listResources(options?: FindManyOptions<T>): Promise<{ data: T[], quantity: number }> {
    const [data, quantity] = await this.repository.findAndCount(options);
    return { data, quantity };
  }

  /**
   * Retrieve a resource by id.
   * @param id The identifier of the resource.
   * @return A resource found.
   */
  retrieveResource(id: number): Promise<T> {
    return this.repository.findOne(id);
  }

  /**
   * Create a resource.
   * @param resource The resource params to create.
   * @return A resource created.
   */
  createResource(resource: DeepPartial<T>): Promise<T> {
    return this.repository.save(resource);
  }

  /**
   * Updates a resource.
   * @param id The identifier of the resource.
   * @param resource The resource params to update.
   * @return A resource updated.
   */
  async updateResource(id: number, resource: T): Promise<T> {
    const foundResource = await this.retrieveResource(id);
    if (foundResource) {
      return this.repository.save({ ...foundResource, ...resource, id });
    }

    return undefined;
  }

  /**
   * Deletes a resource.
   * @param id The identifier of the resource.
   * @return A resource deleted.
   */
  async deleteResource(id: number): Promise<DeleteResult> {
    const foundResource = await this.retrieveResource(id);
    if (foundResource) {
      return this.repository.delete(id);
    }

    return undefined;
  }
}
