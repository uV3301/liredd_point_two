import { Query, Resolver } from "type-graphql";

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello() {
    return "welcomet to graphql";
  }
  @Query(() => String)
  bye() {
    return "bye my old dear friend";
  }
}
