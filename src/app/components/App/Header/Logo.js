import logo from '../../../../images/logo-brand.jpg';

const logoStyles = {
  maxWidth: '20vw',
  paddingTop: '10px',
  minHeight: '1rem',
};

export function Logo() {
  return <img src={logo} alt='Logo' style={logoStyles} />;
}
