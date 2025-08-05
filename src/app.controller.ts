import { Controller, Get } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello world from ReadyRemit SDUI';
  }

  @Get('home')
  getHome(): object {
    const filePath = path.join(__dirname, 'data', 'home.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(jsonData);
  }
}
