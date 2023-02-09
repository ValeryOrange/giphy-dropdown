export interface IImages {
    fixed_width: {
        url: String
    },
    fixed_width_still: {
        url: String,
    },
    original: {
        url: String,
    },
    original_still: {
        url: String,
    },
}

export interface IGif {
    type: String,
    id: String,
    url: String,
    title: String,
    images: IImages,
}

export type GifType = IGif[];

export interface IPic {
    mobile: {
        gif: String,
        static: String,
    },
    desktop: {
        gif: String,
        static: String,
    }
}

export type PicListType = IPic[];
