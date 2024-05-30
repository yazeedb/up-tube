import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { msg: string } {
    return { msg: 'hello world' };
  }

  createFake() {
    // Some fake DB insert logic here

    return { success: true };
  }
}
