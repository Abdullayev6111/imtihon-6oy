import { NavLink } from "react-router-dom";
import FooterLogo from "../assets/images/qalampir-logo.png";
import {
    FaFacebookF,
    FaYoutube,
    FaInstagram,
    FaTelegramPlane,
    FaTwitter,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();
    return (
        <footer>
            <section className="container footer-section">
                <img className="footer-logo" src={FooterLogo} alt="" />
                <div className="footer-left">
                    <div className="links-info">
                        <NavLink
                            to="https://qalampir.uz/uz/about"
                            target="_balnk"
                        >
                            {t("footer.about")}
                        </NavLink>
                        <NavLink>{t("footer.buisness")}</NavLink>
                        <NavLink>{t("footer.contact")}</NavLink>
                        <NavLink>{t("footer.archive")}</NavLink>
                    </div>
                    <div className="footer-left-text">
                        <p>{t("footer.desc1")}</p>
                        <p>{t("footer.desc2")}</p>
                        <p>
                            {t("footer.desc3")} <br /> {t("footer.desc4")}
                        </p>

                        <h6>{t("footer.desc5")}</h6>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="social-icons">
                        <FaFacebookF color="#1877F2" />
                        <FaYoutube color="#FF0000" />
                        <FaInstagram color="#E4405F" />
                        <FaTelegramPlane color="#0088cc" />
                        <FaTwitter color="#0088cc" />
                    </div>
                    <div className="download-app">
                        <div className="download-app-card">
                            <NavLink to="https://apps.apple.com/tr/app/qalampir/id1560975775">
                                <i className="fa-brands fa-apple"></i> AppStore
                            </NavLink>
                        </div>
                        <div className="download-app-card">
                            <NavLink to="https://play.google.com/store/apps/details?id=com.qalpampir.qalampir.uz">
                                <i className="fa-brands fa-google-play"></i>
                                GooglePlay
                            </NavLink>
                        </div>
                        <div className="download-app-card">
                            <NavLink to="https://appgallery.huawei.com/app/C106518715">
                                <i className="fa-solid fa-briefcase"></i>
                                AppGallery
                            </NavLink>
                        </div>
                    </div>
                    <div
                        style={{
                            width: "40px",
                            height: "27px",
                            borderRadius: "10px",
                            background: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "17px",
                        }}
                    >
                        16+
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
