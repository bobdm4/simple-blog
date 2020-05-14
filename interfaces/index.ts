export interface IPost {
    title: string;
    body: string;
    id: number;
}

export interface IReduxStore {
    posts: IPost[];
    currentPost: IPost;
    isLoading: boolean;
}
