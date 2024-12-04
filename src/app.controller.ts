// app.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'get_consulta' }) // Lida com a mensagem "get_consulta"
  async handleConsulta(data: { id: string }) {
    return this.appService.getConsulta(data);
  }
}
