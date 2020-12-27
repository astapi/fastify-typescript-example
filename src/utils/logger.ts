import { IncomingHttpHeaders } from "http";

const projectId = 'xxxxx';
const globalLogFields: any = {};

export class Logger {
  private static instance: Logger;
  private traceId: string|undefined;

  private constructor(traceId?: string) {
    if (traceId) this.traceId = traceId;
  }

  static getInstance(headers?: IncomingHttpHeaders) {
    if (!Logger.instance) {
      if (headers) {
        // clound run実行時にはrequestIdをヘッダーから取得する
        const traceHeader = headers['x-cloud-trace-context'];
        if (typeof traceHeader === 'string') {
          const [trace] = traceHeader.split('/');
          Logger.instance = new Logger(trace);
        }
      } else {
        Logger.instance = new Logger();
      }
    }
    return Logger.instance
  }

  public static log(text: string, option?: any): void {
    Logger.getInstance().log(text, option);
  }
  log(text: string, option?: any): void {
    globalLogFields['logging.googleapis.com/trace'] = `projects/${projectId}/traces/${this.traceId}`;
    const entry = {
      severity: 'INFO',
      message: text,
      data: option,
      ...globalLogFields
    }
    console.log(JSON.stringify(entry));
  }

  public static error(text: string, option?: any): void {
    Logger.getInstance().error(text, option);
  }
  error(text: string, option?: any): void {
    globalLogFields['logging.googleapis.com/trace'] = `projects/${projectId}/traces/${this.traceId}`;
    const entry = {
      severity: 'ERROR',
      message: text,
      data: option,
      ...globalLogFields
    }
    console.error(JSON.stringify(entry));
  }

  public static getTraceId(): string|undefined {
    return Logger.getInstance().traceId;
  }
}