import { Test, TestingModule } from '@nestjs/testing';
import { MockproducerController } from './mockproducer.controller';
import { MockproducerService } from './mockproducer.service';

describe('MockproducerController', () => {
  let controller: MockproducerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MockproducerController],
      providers: [MockproducerService],
    }).compile();

    controller = module.get<MockproducerController>(MockproducerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
