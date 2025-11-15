import { NavLink } from "react-router-dom";
import HeaderLogo from "../assets/images/qalampir-logo.png";
import LanguageSelect from "./Language-selector/LanguageSelect";
import { useTranslation } from "react-i18next";

function Header() {
    const { t } = useTranslation();
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
                    <NavLink to="/">{t("header.congregation")}</NavLink>
                    <NavLink to="/">{t("header.universe")}</NavLink>
                    <NavLink to="/">{t("header.art")}</NavLink>
                    <NavLink to="/">{t("header.interview")}</NavLink>
                    <NavLink to="/">{t("header.sport")}</NavLink>
                    <NavLink to="/">{t("header.tech")}</NavLink>
                    <NavLink to="/liked-posts">{t("header.saved")} ❤️</NavLink>
                </div>
                <LanguageSelect />
            </div>
        </header>
    );
}

export default Header;
