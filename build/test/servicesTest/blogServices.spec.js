"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const supertest_1 = __importDefault(require("supertest"));
const src_1 = require("../../src");
// describe("create blog test case", () => {
//   it("should create blog", () => {
//     supertest(app)
//       .post("/blog/add")
//       .send({
//         bid: 4,
//         user_id: 1,
//         heading: "fourth blog",
//         content: "fourthcontent",
//         published_date: "2022-9-8",
//       })
//       .expect(200)
//       .end((err, res) => {
//         expect(res.text).to.be.equal("record Inserted");
//       });
//   });
// });
describe("get all blog test case", () => {
    it("should return ", () => {
        (0, supertest_1.default)(src_1.app)
            .get("/blog/allBlogs")
            .expect(200)
            .end((err, res) => {
            (0, chai_1.expect)(res.body).to.be.deep.equal([
                {
                    bid: 1,
                    user_id: 1,
                    heading: "first blog",
                    content: "first content",
                    published_date: "2022-09-07T18:30:00.000Z",
                },
                {
                    bid: 2,
                    user_id: 1,
                    heading: "second blog",
                    content: "second content",
                    published_date: "2022-09-07T18:30:00.000Z",
                },
                {
                    bid: 3,
                    user_id: 2,
                    heading: "Third blog",
                    content: "Third blog Content",
                    published_date: "2023-07-07T18:30:00.000Z",
                },
            ]);
        });
    });
});
describe("get blog by blog id test", () => {
    it("should return blogdetails by blog id", () => {
        (0, supertest_1.default)(src_1.app)
            .get("/blog/blogById/1")
            .expect(200)
            .end((err, res) => {
            if (err) {
                throw err;
            }
            else {
                (0, chai_1.expect)(res.body).to.be.deep.equal([
                    {
                        bid: 1,
                        user_id: 1,
                        heading: "first blog",
                        content: "first content",
                        published_date: "2022-09-07T18:30:00.000Z",
                    },
                ]);
            }
        });
    });
});
describe("get blog by userid test", () => {
    it("should return blogDetails by userId", () => {
        (0, supertest_1.default)(src_1.app)
            .get("/blog/blogByUserId/1")
            .expect(200)
            .end((err, res) => {
            if (err) {
                throw err;
            }
            else {
                (0, chai_1.expect)(res.body).to.be.deep.equal([
                    {
                        bid: 1,
                        user_id: 1,
                        heading: "first blog",
                        content: "first content",
                        published_date: "2022-09-07T18:30:00.000Z",
                    },
                    {
                        bid: 2,
                        user_id: 1,
                        heading: "second blog",
                        content: "second content",
                        published_date: "2022-09-07T18:30:00.000Z",
                    },
                ]);
            }
        });
    });
});
console.log("3" + "3" + "3");
