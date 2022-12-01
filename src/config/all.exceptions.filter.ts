import { HttpAdapterHost } from "@nestjs/core";
import {ArgumentsHost, Catch, ExceptionFilter, HttpStatus} from "@nestjs/common";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {

  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: any, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;
    const [incomingMessage, serverResponse] = host.getArgs();

    const ctx = host.switchToHttp();

    console.log(incomingMessage)


    const responseBody = {
      code: "INT_001",
      message: exception.message === Array ? exception.message[0] : exception.message,
      field: '',
      context: {
        serverDateTime: new Date().toISOString(),
        user: "prismaadmin",
        requestId: "aa3c863ab8814bd5a0bdd52177159331",
        path: incomingMessage.originalUrl,
        hostname: "secure.payzen.lat"
      }
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, exception.status);
  }
}