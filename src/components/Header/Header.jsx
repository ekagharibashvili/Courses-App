import Logo from './components/Logo/Logo';
import logo from '../../assets/logo.png';
import Button from '../../common/Button/Button';
import './Header.css';

function Header() {
	return (
		<div className='header'>
			<div className='headerStart'>
				<Logo src={logo} alt='Logo' />
			</div>
			<div className='headerEnd'>
				<h2>Eka</h2>
				<Button buttonText='Logout'></Button>
			</div>
		</div>
	);
}

export default Header;
