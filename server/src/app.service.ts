import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { msg: string } {
    return { msg: 'hello world' };
  }
}
