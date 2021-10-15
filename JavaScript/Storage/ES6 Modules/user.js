class User {
  constructor(name) {
    this.name = name;
  }
}
export default User;

export function printName(user) {
  console.log(user.name);
}

//! Không type "export printName" được
