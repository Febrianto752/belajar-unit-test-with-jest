import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";

const repository = new UserRepository();
const service = new UserService(repository);

test("mock partial class method findById", () => {
  const user = {
    id: 1,
    name: "febri",
  };

  const findByIdMock = jest.spyOn(repository, "findById");
  findByIdMock.mockReturnValueOnce(user);

  expect(service.getOneUser(1)).toEqual(user);
  expect(findByIdMock).toHaveBeenCalled();
  expect(repository.findById).toHaveBeenCalled();
});

test.failing("getAllUser should be fail", () => {
  service.getAllUsers();
});
