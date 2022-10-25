import logo from '../../../../images/logo-brand.jpg';

const logoStyles = {
  maxWidth: '20vw',
};

export function Logo() {
  return <img src={logo} alt='Logo' style={logoStyles} />;
}
