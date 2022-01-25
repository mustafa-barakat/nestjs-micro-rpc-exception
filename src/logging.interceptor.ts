import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { firstValueFrom, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    const now = Date.now();
    const returnValue = next.handle().pipe(
      map((res) => res),
      tap(() => console.log(`After... ${Date.now() - now}ms`)),
    );
    return returnValue;
  }
}
