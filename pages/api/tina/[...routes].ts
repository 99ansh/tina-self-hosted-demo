import { TinaNodeBackend, LocalBackendAuthProvider } from "@tinacms/datalayer";

import { TinaAuthJSOptions, AuthJsBackendAuthProvider } from "tinacms-authjs";

import databaseClient from "../../../tina/__generated__/databaseClient";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

const handler = TinaNodeBackend({
  authProvider: isLocal
    ? LocalBackendAuthProvider()
    : AuthJsBackendAuthProvider({
        authOptions: TinaAuthJSOptions({
          databaseClient: databaseClient,
          secret: process.env.NEXTAUTH_SECRET!,
        }),
      }),
  databaseClient,
});

export default (req, res) => {
  // Modify the request here if you need to
  console.log("request");
  console.log(req);
  console.log("response");
  console.log(res);
  return handler(req, res);
};
