import {Logo} from "./Header/Logo";
import {Search} from "./Header/Search";
import {Menu} from "./Header/Menu";

const headerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export function Header() {
  return <div id='Header' style={headerStyles}>
    <Logo/>
  </div>;
}
