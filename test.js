const request = require('supertest');
const expect = require('chai').expect
const hobbies = require('./hobbies');
describe("API unit test suite", () => {
    describe("getHobbies", () => {
        const list = hobbies.getHobbies();
        it("returns 5 hobbies", () => {
            expect(list.length).to.equal(5);
        });
        it("returns 'jogging' as first hobby", () => {
            expect(list[0]).to.equal("jogging");
        });
    })
})