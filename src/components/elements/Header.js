import RMDBLogo from "../images/reactMovie_logo.png";
import TMDBLogo from "../images/tmdb_logo.svg";

import {
	StyledHeader,
	StyledRMDBLogo,
	StyledTMDBLogo,
} from "../styles/StyledHeader";

const Header = () => {
	return (
		<StyledHeader>
			<div className="header-content">
				<StyledRMDBLogo src={RMDBLogo} alt="Logo" />
				<StyledTMDBLogo src={TMDBLogo} alt="Logo-alt" />
			</div>
		</StyledHeader>
	);
};

export default Header;
