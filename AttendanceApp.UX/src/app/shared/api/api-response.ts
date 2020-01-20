export class APIResponseModel<T> {
    message: string;
    status: string;
    statusCode: number;
    results: T;
}

