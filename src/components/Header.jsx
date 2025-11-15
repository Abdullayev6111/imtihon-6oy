import { NavLink } from "react-router-dom";
import HeaderLogo from "../assets/images/qalampir-logo.png";
import LanguageSelect from "./Language-selector/LanguageSelect";

function Header() {
    return (
        <header>
            <div className="container header-nav">
                <NavLink
                    to="/"
                    style={{
                        display: "flex",
                        backgroundColor: "transparent",
                        alignItems: "center",
                        textDecoration: "none",
                    }}
                >
                    <img src={HeaderLogo} alt="" width={35} height={35} />
                    <h2 className="logo-text">
                        ALAMPIR.<span>UZ</span>
                    </h2>
                </NavLink>
                <div className="navbar-content">
                    <NavLink to="/">Jamiyat</NavLink>
                    <NavLink to="/">Olam</NavLink>
                    <NavLink to="/">San'at madaniyat</NavLink>
                    <NavLink to="/">Intervyu</NavLink>
                    <NavLink to="/">Sport</NavLink>
                    <NavLink to="/">Texnolohiya</NavLink>
                    <NavLink to="/liked-posts">Saqlanganlar</NavLink>
                </div>
                <LanguageSelect />
            </div>
        </header>
    );
}

export default Header;
