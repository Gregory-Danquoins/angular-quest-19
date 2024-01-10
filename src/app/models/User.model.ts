export class User {
  username: string;
  firstname: string;
  lastname: string;
  email: string;

  constructor(
    username: string = '',
    firstname: string = '',
    lastname: string = '',
    email: string = ''
  ) {
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
  }
}
