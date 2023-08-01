import { expect } from "chai";
import supertest from "supertest";
import { app } from "../../src";

describe("create blog test case", () => {
  it("should create blog", () => {
    supertest(app)
      .post("/blog/add")
      .send({
        bid: 4,
        user_id: 1,
        heading: "fourth blog",
        content: "fourthcontent",
        published_date: "2022-9-8",
      })
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.be.equal("record Inserted");
      });
  });
});

describe("get all blog test case", () => {
  it("should return ", () => {
    supertest(app)
      .get("/blog/allBlogs")
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.deep.equal([
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
    supertest(app)
      .get("/blog/blogById/1")
      .expect(200)
      .end((err, res) => {
        if (err) {
          throw err;
        } else {
          expect(res.body).to.be.deep.equal([
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
    supertest(app)
      .get("/blog/blogByUserId/1")
      .expect(200)
      .end((err, res) => {
        if (err) {
          throw err;
        } else {
          expect(res.body).to.be.deep.equal([
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
