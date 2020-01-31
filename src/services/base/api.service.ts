import Request from 'request-promise';

export const MakeApiRequest = <T>(url: string): Promise<T> => Request(url).then(data => JSON.parse(data));
