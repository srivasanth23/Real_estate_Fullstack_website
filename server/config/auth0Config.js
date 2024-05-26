import { expressjwt } from "express-jwt";
import jwksRsa from "jwks-rsa";

const checkJwt = expressjwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-knmay4sprlvtcdj2.us.auth0.com/.well-known/jwks.json`,
  }),
  audience: "http://localhost:8000",
  issuer: `https://dev-knmay4sprlvtcdj2.us.auth0.com/`,
  algorithms: ["RS256"],
}).unless({ path: ["/api/public"] });

export default checkJwt;
