import { User } from "../types/User";

export class UserService {
  getUserById = async (id: string): Promise<User> => {
    try {
      var user: User = {
        id: parseInt(id),
        emailAddress: "rutsuo@proton.me",
        password: "v3rys3cr3t",
      };
      return user;
    } catch (error) {
      throw error;
    }
  };
}
