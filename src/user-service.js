import { UserRepository } from "./user-repository";

export class UserService {
  constructor(userRepository) {
    if (userRepository) {
      this.userRepository = userRepository;
    } else {
      this.userRepository = new UserRepository();
    }
  }

  save(user) {
    this.userRepository.save(user);
  }

  getOneUser(id) {
    return this.userRepository.findById(id);
  }

  getAllUsers() {
    return this.userRepository.findAll();
  }
}
