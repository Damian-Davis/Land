export interface User {
  id: string;
  username: string;
  password: string;
}
// In a real world applcation the Array would could from the database
const users: Array<User> = [
  {
    id: "1",
    username: "brad",
    password: "brad",
  },
  {
    id: "2",
    username: "max",
    password: "max",
  },
]

export default users;
