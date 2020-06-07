// Dependencies
import { MessagePattern, Payload } from '@nestjs/microservices';

/**
 * Base controller to reuse the endpoints for CRUD resources.
 * @author Daniel Mejia
 */
export class BaseMicroController {
  /**
   * Creates an instance of {@link BaseMicroController}
   * @param service The service manager.
   */
  constructor(public service: any) { }

  /**
   * List all the resources.
   * @return The list of resources.
   */
  @MessagePattern({ type: 'list' })
  list(@Payload() options?: unknown): Promise<{data: unknown[], quantity: number}> {
    return this.service.listResources(options);
  }

  /**
   * Retrieve a resource by id.
   * @param id The identifier of the resource.
   * @return A resource found.
   */
  @MessagePattern({ type: 'retrieve' })
  retrieve(@Payload() id: number): Promise<unknown> {
    return this.service.retrieveResource(id);
  }

  /**
   * Create a resource.
   * @param resource The resource params to create.
   * @return A resource created.
   */
  @MessagePattern({ type: 'save' })
  create(@Payload() resource: unknown): Promise<unknown> {
    return this.service.createResource(resource);
  }

  /**
   * Delete a resource.
   * @param id The identifier of the resource.
   * @return A resource deleted.
   */
  @MessagePattern({ type: 'delete' })
  delete(@Payload() id: number): Promise<unknown> {
    return this.service.deleteResource(id);
  }
}
