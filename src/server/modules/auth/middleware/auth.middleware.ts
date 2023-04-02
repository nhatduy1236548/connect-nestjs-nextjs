import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    private readonly logger = new Logger(LoggerMiddleware.name);
  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(`Request ${req.body.email}`);
    res.on('finish', () => {
      console.log(`[${req.method}] ${req.originalUrl} => ${res.statusCode}`);
      console.log(`Response: ${JSON.stringify(res.status)}`);
    });
    next();
  }
}