// Dependencies
import { TestingModule, Test } from '@nestjs/testing';

// Under testing
import { BaseController } from '../base.api.controller';

/**
 * Test file for {@link BaseController}
 * @author Daniel Mejia
 * @File base.controller.spec.ts
 */
describe('Base Controller: Test suit', () => {
  let baseController: BaseController;
  const mockService = {
    listResources: jest.fn(),
    retrieveResource: jest.fn(),
    createResource: jest.fn(),
    updateResource: jest.fn(),
    deleteResource: jest.fn(),
  };
  const resource = { id: 1 };

  beforeAll(async () => {
    const module: TestingModule = await Test
      .createTestingModule({
        controllers: [BaseController],
      })
      .compile();
    baseController = module.get(BaseController);
    baseController.service = mockService as any;
  });

  it('should get instance fine', () => {
    expect(baseController).toBeTruthy();
  });

  it('should list resources', async () => {
    const data = {
      quantity: 1,
      data: [resource],
    };
    mockService.listResources.mockResolvedValue(data);
    const response = await baseController.list();

    expect(response).toEqual(data);
  });

  it('should retrieve resource', async () => {
    mockService.retrieveResource.mockResolvedValue(resource);
    const response = await baseController.retrieve(resource.id);

    expect(response).toEqual(resource);
  });

  it('should create resource', async () => {
    const createParams = { name: 'resource' };
    mockService.createResource.mockResolvedValue(resource);
    const response = await baseController.create(createParams);

    expect(response).toEqual(resource);
  });

  it('should update resource', async () => {
    const updateParams = { name: 'resource' };
    mockService.updateResource.mockResolvedValue(resource);
    const response = await baseController.update(updateParams, resource.id);

    expect(response).toEqual(resource);
  });

  it('should delete resource', async () => {
    mockService.deleteResource.mockResolvedValue(resource);
    const response = await baseController.delete(resource.id);

    expect(response).toEqual(resource);
  });
});
