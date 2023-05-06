import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";

jest.mock("../src/user-repository.js");

const repository = new UserRepository();
const service = new UserService(repository);

test("mock class method save", () => {
  const user = { id: 1, name: "febri" };
  service.save(user);
  expect(repository.save).toHaveBeenCalled();
  expect(repository.save).toHaveBeenCalledWith(user);
});

test("mock class method findById", () => {
  const user = { id: 1, name: "febri" };
  repository.findById.mockReturnValueOnce(user);
  expect(service.getOneUser(1)).toEqual(user);
  expect(repository.findById).toHaveBeenCalled();
});

test("mock class method findAll", () => {
  const users = [
    { id: 1, name: "febri" },
    { id: 2, name: "leo" },
  ];

  repository.findAll.mockReturnValueOnce(users);
  expect(service.getAllUsers()).toEqual(users);
  expect(repository.findAll).toHaveBeenCalled();
});
