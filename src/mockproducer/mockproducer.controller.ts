import { Controller } from '@nestjs/common';
import { MockproducerService } from './mockproducer.service';

@Controller('mockproducer')
export class MockproducerController {
  constructor(private readonly mockproducerService: MockproducerService) {}
}
