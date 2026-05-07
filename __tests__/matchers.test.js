describe("Jest Matchers Examples", () => {

    test("equality matchers", () => {
        expect(2 + 2).toBe(4); // toBe для примитивов
        expect({ name: "John" }).toEqual({ name: "John" }); // toEqual для объектов
    });

    test("truthiness matchers", () => {
        expect(true).toBeTruthy();
        expect(null).toBeNull();
        expect(undefined).toBeUndefined();
        expect(0).toBeFalsy();
    });

    test("number matchers", () => {
        expect(10).toBeGreaterThan(5);
        expect(10).toBeLessThan(20);
        expect(0.1 + 0.2).toBeCloseTo(0.3);
    });

    test("string matchers", () => {
        expect("Hello World").toMatch(/World/);
        expect("team").not.toMatch(/I/);
    });

    test("array matchers", () => {
        const shoppingList = [ "diapers", "kleenex", "trash bags"];
        expect(shoppingList).toContain("kleenex");
        expect(shoppingList).toHaveLength(3);
    });
});