export interface IApiService {
    get(url: string): Promise<any>;
}
