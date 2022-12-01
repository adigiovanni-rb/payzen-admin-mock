import { HttpAdapterHost } from "@nestjs/core";
import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
export declare class AllExceptionsFilter implements ExceptionFilter {
    private readonly httpAdapterHost;
    constructor(httpAdapterHost: HttpAdapterHost);
    catch(exception: any, host: ArgumentsHost): void;
}
