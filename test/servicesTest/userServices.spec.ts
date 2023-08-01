import { expect } from "chai";
import supertest from "supertest";
import { app } from "../../src/index";

describe("registration api test", () => {
  it("should return message if data added successfully", () => {
    supertest(app)
      .post("/users/add")
      .send({
        id: 3,
        first_name: "Shivam",
        last_name: "Yadav",
        gender: "M",
        email: "shivam@gamil.com",
        password: "shivam@123",
      })
      .expect(200)
      .end((err, res) => {
        if (err) {
          throw err;
        } else {
          expect(res.text).to.be.equals("Record Inserted Successfully");
        }
      });
  });
});
describe("login api test", () => {
  it("should return id and token", () => {
    supertest(app)
      .post("/users/login")
      .send({
        email: "shivam@gamil.com",
        password: "shivam@123",
      })
      .expect(200)
      .end((err, res) => {
        if (err) {
          throw err;
        } else {
          console.log(res.body);

          expect(res.body).to.be.an("object").and.has.keys(["id", "token"]);
        }
      });
  });
});
describe("get user by api test", () => {
  it("should return user details", () => {
    supertest(app)
      .get("/users/userDetails/1")
      .expect(200)
      .end((err, res) => {
        if (err) {
          throw err;
        } else {
          console.log(res.body);
          expect(res.body).to.be.deep.equals([
            {
              user_id: 1,
              first_name: "Krant",
              last_name: "Darshi",
              gender: "M",
              email: "krant@gmail.com",
              password:
                "$2b$10$.7mV4acGmu9giukNM0/h0u//vQMkrfBFJ7FKIYi4yxEdT0qinP.J6",
            },
          ]);
        }
      });
  });
});
