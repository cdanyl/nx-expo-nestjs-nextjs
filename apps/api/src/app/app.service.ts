import { Injectable } from '@nestjs/common';

import { model } from '@fullstack/models';

@Injectable()
export class AppService {
  getData(): string {
    return model;
  }
}
