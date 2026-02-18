function login(user) {
  if (user.role === "student") {
    return "Student Home";
  }
  return "No Access";
}
module.exports = login;
