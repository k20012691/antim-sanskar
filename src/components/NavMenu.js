import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Navbar,
	NavItem,
	NavbarToggler,
	Collapse,
	NavLink,
	Nav,
	NavbarBrand
} from 'reactstrap';

function NavMenu() {

	// Collapse isOpen State
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div>
			<Navbar color="light" light expand="md" fixed>
				<NavbarBrand href="/">Home</NavbarBrand>
				<NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href="/manikarnika-ghat">Manikarnika Ghat</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/last-rites">Last Rites</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/maha-mritunjay">Maha Mritunjay Mantra</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div >
	);
}

export default NavMenu;
