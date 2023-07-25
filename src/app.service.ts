import { Injectable } from '@nestjs/common';
import { find } from 'rxjs';

@Injectable()
export class AppService {
  getHello(): string {
    
    return 'Vanakkam da Mapla!';
  }
}
