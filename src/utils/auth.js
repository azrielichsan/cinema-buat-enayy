export const PASSWORD = "kamucantik";

export const isAuthenticated = () => {
  return localStorage.getItem("birthday_auth") === "true";
};

export const login = () => {
  localStorage.setItem("birthday_auth", "true");
};

export const logout = () => {
  localStorage.removeItem("birthday_auth");
};