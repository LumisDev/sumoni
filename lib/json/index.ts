export type JSONThing = {
    data: any
}

export var insertPokes:(thing:any) => JSONThing = (thing: any) => {
    return {
        data: thing
    }
}