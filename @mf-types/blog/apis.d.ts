
    export type RemoteKeys = 'blog/blognav' | 'blog/blog';
    type PackageType<T> = T extends 'blog/blog' ? typeof import('blog/blog') :T extends 'blog/blognav' ? typeof import('blog/blognav') :any;