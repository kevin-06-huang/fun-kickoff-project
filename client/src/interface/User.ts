export interface User {
  email: string;
  name: string;
}

export interface SearchUsersApiData {
  users?: User[];
  error?: { message: string };
}
