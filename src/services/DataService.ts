import { Data } from "../types/Data";

export class DataService {
  getData = async (): Promise<[Data]> => {
    try {
      return [
        {
          id: 1337,
          title: "Rutsuo",
          description: "Hello, World! ✨",
          avaiable: true,
        },
      ];
    } catch (error) {
      throw error;
    }
  };
}
