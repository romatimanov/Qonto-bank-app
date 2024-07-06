import { Account } from "./Account/Account";
import { Brand } from "./Brand/Brand";
import { Creators } from "./Creators/Creators";
import { Discover } from "./Discover/Discover";
import { Finance } from "./Finance/Finance";
import { Sign } from "./Sign/Sign";

export function Main() {
  return (
    <>
      <Account />
      <Creators />
      <Discover />
      <Finance />
      <Brand />
      <Sign />
    </>
  );
}
