export interface IAuthMiddleware {
  auth(req: any, res: any): any;
}
