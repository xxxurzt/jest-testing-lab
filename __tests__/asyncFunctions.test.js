const { fetchData, fetchDataPromise, fetchDataWithError } = require('../src/asyncFunctions');

describe("Async Functions", () => {

    test("callback should receive peanut butter", (done) => {
        fetchData((data) => {
            expect(data).toBe("peanut butter");
            done();
        });
    });

    test("promise should resolve to peanut butter", () => {
        return expect(fetchDataPromise()).resolves.toBe("peanut butter");
    });

    test("async/await should work", async () => {
        const data = await fetchDataPromise();
        expect(data).toBe("peanut butter");
    });

    test("promise should reject with error", () => {
        return expect(fetchDataWithError()).rejects.toThrow("Failed to fetch data");
    });
});