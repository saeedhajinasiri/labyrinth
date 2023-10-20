import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    setTimeout(function () {
      console.log('First');
      setTimeout(function () {
        console.log('Second');
        setTimeout(function () {
          console.log('Third');
          setTimeout(function () {
            console.log('Fourth');
          }, 500);
        }, 1000);
      }, 500);
    }, 1000);

    return 'Hello Saeed joon!';
  }
}
