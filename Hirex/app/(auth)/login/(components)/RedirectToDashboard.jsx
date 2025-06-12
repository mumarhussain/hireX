export const RedirectToDashboard = (role, router) => {
  const paths = {
    freelancer: "/freelancer/dashboard",
    client: "/client/dashboard",
  };

  const path = paths[role] || "/unauthorized";
  router.push(path);
};
