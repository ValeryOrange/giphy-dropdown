export interface IImages {
    fixed_width: {
        url: string
    },
    fixed_width_still: {
        url: string,
    },
    original: {
        url: string,
    },
    original_still: {
        url: string,
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
    id: string,
    mobile: {
        gif: string,
        static: string,
    },
    desktop: {
        gif: string,
        static: string,
    }
}

export type PicListType = IPic[];
