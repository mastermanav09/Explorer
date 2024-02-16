export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) {
        token._id = user._id;
      }

      if (user?.isAdmin) {
        token.isAdmin = user.isAdmin;
      }

      return token;
    },

    async session({ session, token }) {
      if (token?._id) {
        session.user._id = token._id;
      }

      if (token?.isAdmin) {
        session.user.isAdmin = token.isAdmin;
      }

      return session;
    },

    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
      const isOnRegisterPage =
        request.nextUrl?.pathname.startsWith("/register");

      // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD

      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE

      if (isOnBlogPage && !user) {
        return false;
      }

      // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE

      if ((isOnLoginPage || isOnRegisterPage) && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
