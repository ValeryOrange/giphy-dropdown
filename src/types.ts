export interface IImages {
    fixed_width: {
        url: string,
        mp4: string,
    },
    original: {
        mp4: string,
    },
}

export interface IGif {
    type: string,
    id: string,
    url: string,
    title: string,
    images: IImages,
}

export type GifType = IGif[];

export interface IPic {
    title: string,
    id: string,
    gif: string,
    video: string,
    original: string,
}

export type PicListType = IPic[];
