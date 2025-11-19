export const setAdminLoggedIn = () => {
  localStorage.setItem("admin_logged_in", "true");
};

export const isAdminLoggedIn = () => {
  return localStorage.getItem("admin_logged_in") === "true";
};

export const logoutAdmin = () => {
  localStorage.removeItem("admin_logged_in");
};