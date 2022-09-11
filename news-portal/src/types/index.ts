export interface ISource {
    id: string;
    name: string;
}
export interface INews {
    totalResults: number;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    source: { name: string };
}
export interface IResponseConfig {
    endpoint: string;
    options?: {
        sources?: string;
    };
}
export interface IResponseNews {
    articles: INews[];
}
export interface IResponseSources {
    sources: ISource[];
}
