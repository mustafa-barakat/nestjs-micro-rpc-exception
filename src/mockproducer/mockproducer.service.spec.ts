import { Test, TestingModule } from '@nestjs/testing';
import { MockproducerService } from './mockproducer.service';

describe('MockproducerService', () => {
  let service: MockproducerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockproducerService],
    }).compile();

    service = module.get<MockproducerService>(MockproducerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
