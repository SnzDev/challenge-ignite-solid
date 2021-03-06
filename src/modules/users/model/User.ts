import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;
  name: string;
  email: string;
  admin: boolean;
  created_at: string;
  updated_at: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
    if (!this.admin) {
      this.admin = false;
    }
  }
}

export { User };
