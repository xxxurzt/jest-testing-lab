const { capitalize, reverse, isPalindrome } = require('../src/stringUtils');

describe("String Utilities", () => {

    test("capitalize should make first letter uppercase", () => {
        expect(capitalize("hello")).toBe("Hello");
        expect(capitalize("jEST")).toBe("Jest");
        expect(capitalize("")).toBe("");
    });

    test("reverse should reverse a string", () => {
        expect(reverse("hello")).toBe("olleh");
        expect(reverse("Jest")).toBe("tseJ");
    });

    test("isPalindrome should detect palindromes", () => {
        expect(isPalindrome("racecar")).toBe(true);
        expect(isPalindrome("A man, a plan, a canal: panama")).toBe(true);
        expect(isPalindrome("hello")).toBe(false);
    });
});