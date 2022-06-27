import Logo from './components/Logo/Logo';
import logo from '../../assets/logo.png';
import Button from '../../common/Button/Button';

function Header() {
	return (
		<>
			<Logo src={logo} alt='Logo' />
			<h2>Eka</h2>
			<Button>Logout</Button>
		</>
	);
}

export default Header;
