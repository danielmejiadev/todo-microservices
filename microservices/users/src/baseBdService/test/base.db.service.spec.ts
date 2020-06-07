// Dependencies
import { TestingModule, Test } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

// Services
import { BaseService } from '../base.db.service';

/**
 * Test file for {@link BaseService}
 * @author Daniel Mejia
 * @File base.service.spec.ts
 */
describe('Base Service: Test suit', () => {
  let service: BaseService<unknown>;
  const mockRepository = {
    findAndCount: jest.fn(),
    findOne: jest.fn(),
    save: jest.fn(),
    delete: jest.fn(),
  } as unknown as Repository<unknown>;
  const resource = { id: 1, nameCase: 'name' };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BaseService,
      ],
    }).compile();

    service = module.get(BaseService);
    service.repository = mockRepository;
  });

  it('should list resources', async () => {
    const data = [resource];
    const quantity = 1;

    jest.spyOn(mockRepository, 'findAndCount').mockResolvedValue([data, quantity]);
    const response = await service.listResources();

    expect(response.data).toEqual(data);
    expect(response.quantity).toEqual(quantity);
  });

  it('should retrieve resource', async () => {
    jest.spyOn(mockRepository, 'findOne').mockResolvedValue(resource);
    const response = await service.retrieveResource(resource.id);

    expect(response).toEqual(resource);
  });

  it('should create resource', async () => {
    const createParams = { nameCase: 'resource' };
    jest.spyOn(mockRepository, 'save').mockResolvedValue(resource);
    const response = await service.createResource(createParams);

    expect(response).toEqual(resource);
  });

  describe('should update resource', () => {
    const updateParams = { nameCase: 'resource' };

    beforeEach(() => jest.clearAllMocks());

    it('resource found', async () => {
      jest.spyOn(service, 'retrieveResource').mockResolvedValue(resource);
      jest.spyOn(mockRepository, 'save').mockResolvedValue(resource);

      const response = await service.updateResource(resource.id, updateParams);
      expect(response).toEqual(resource);
      expect(mockRepository.save).toHaveBeenCalledWith({ ...resource, ...updateParams, id: resource.id });
    });

    it('resource not found', async () => {
      jest.spyOn(service, 'retrieveResource').mockResolvedValue(undefined);
      jest.spyOn(mockRepository, 'save').mockResolvedValue(resource);

      const response = await service.updateResource(resource.id, updateParams);
      expect(response).toBeUndefined();
      expect(mockRepository.save).not.toHaveBeenCalled();
    });
  });

  describe('should delete resource', () => {
    beforeEach(() => jest.clearAllMocks());

    it('resource found', async () => {
      jest.spyOn(service, 'retrieveResource').mockResolvedValue(resource);
      jest.spyOn(mockRepository, 'delete').mockResolvedValue(undefined);

      await service.deleteResource(resource.id);
      expect(mockRepository.delete).toHaveBeenCalledWith(resource.id);
    });

    it('resource not found', async () => {
      jest.spyOn(service, 'retrieveResource').mockResolvedValue(undefined);
      jest.spyOn(mockRepository, 'delete').mockResolvedValue(undefined);

      expect(await service.deleteResource(resource.id)).toBeUndefined();
      expect(mockRepository.delete).not.toHaveBeenCalled();
    });
  });
});
