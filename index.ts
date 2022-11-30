

type sometype = {
    a: string,
    b: number
    param?: sometype
}

function newfunction(param: string): sometype {
    param = param.toLowerCase()

    const newvar = {
        a: param,
        b: 2,
        param: {
            a: `${param} 22222`,
            b: 3
        }
    }

    let a = ""

    return newvar
}


console.table(newfunction("WAH"))