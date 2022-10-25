import {Logo} from "./Header/Logo";
import {Search} from "./Header/Search";
import {Menu} from "./Header/Menu";

export function Header() {
  return <div id='Header'>
    <Logo/>
    <Search/>
    <Menu/>
  </div>;
}
