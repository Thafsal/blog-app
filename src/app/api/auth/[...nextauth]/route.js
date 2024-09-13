import NextAuth from "next-auth"
import { authConfig } from "@/lib/auth.config"
export { GET, POST } from "@/lib/auth"

export default NextAuth(authConfig);
