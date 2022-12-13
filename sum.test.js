let add = require("./sum")

describe("Tests on addition funtionality", () =>{
    test("2+2 equals 4",() => {
        expect(add(2,2)).toBe(4)
    })

    test("-1+2 equals 1",() => {
        expect(add(-1,2)).toBe(1)
    })
})