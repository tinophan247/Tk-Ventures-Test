export type BCOption = {
    Name : string,
    Code : string,
    ExtendValue? : string | null
}

export type GenresOption = {
    Name : string,
    Code : string,
}

export type PlatformsOption = {
    Name : string,
    Code : string,
}

export type dataType = {
    Code : string,
    Name : string,
    ImageUrl : string,
    Symbol: string,
    BlockChains : BCOption[],
    Genres : GenresOption[],
    Platforms : PlatformsOption[],
    Price : number
}
