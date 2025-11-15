import { useTranslation } from "react-i18next";
import CarouselEl from "../components/CarouselEl";
import PostCard from "../components/Post/PostCard";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Bounce, ToastContainer } from "react-toastify";
function Home() {
    const { t } = useTranslation();
    const { data, error, loading } = useFetch("https://dummyjson.com/posts");

    useEffect(() => {
        if (error) {
            toast.error("Xatolik yuz berdi", { position: "top-right" });
        } else if (!loading) {
            toast.success("Ma'lumotlar muvaffaqiyatli yuklandi", {
                position: "top-right",
                autoClose: 3000,
                pauseOnFocusLoss: true,
                draggable: true,
                pauseOnHover: true,
                transition: Bounce,
            });
        }
    }, [loading, data, error]);

    return (
        <section className="container home-page">
            <ToastContainer />
            <div className="home-hero">
                <CarouselEl />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                >
                    <div className="hh-news-card">
                        <img
                            src="https://ad-admin.qalampir.uz/uploads/Vu/m_6IjCRUW34YvBZ2U0F5tm36jtGIlBa6.jpg"
                            alt=""
                        />
                        <p>{t("carousel.card2")}</p>
                    </div>
                    <div className="hh-news-card">
                        <img
                            src="https://ad-admin.qalampir.uz/uploads/HW/m_rwpvd3wGtooIqmqZ8z4HfsBx1d3uYB.jpg"
                            alt=""
                        />
                        <p>{t("carousel.card3")}</p>
                    </div>
                </div>
                <div className="live-news">
                    <div className="live-news-top">
                        <i className="fa-solid fa-tower-broadcast">Live</i>
                        <h3>
                            {t("liveNews.all")}{" "}
                            <i
                                className="fa-solid fa-arrow-up-long fa-rotate-by"
                                style={{ rotate: "45deg" }}
                            ></i>
                        </h3>
                    </div>
                    <div className="live-news-cards">
                        <div className="lw-card">
                            <h1>{t("liveNews.news1")}</h1>
                            <p>14 {t("liveNews.date")}</p>
                        </div>
                        <div className="lw-card">
                            <h1>{t("liveNews.news2")}</h1>
                            <p>14 {t("liveNews.date")}</p>
                        </div>
                        <div className="lw-card">
                            <h1>{t("liveNews.news3")}</h1>
                            <p>14 {t("liveNews.date")}</p>
                        </div>
                        <div className="lw-card">
                            <h1>{t("liveNews.news4")}</h1>
                            <p>14 {t("liveNews.date")}</p>
                        </div>
                        <div className="lw-card">
                            <h1>{t("liveNews.news5")}</h1>
                            <p>14 {t("liveNews.date")}</p>
                        </div>
                        <div className="lw-card">
                            <h1>{t("liveNews.news6")}</h1>
                            <p>14 {t("liveNews.date")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="posts">
                <div className="posts-top">
                    <h1>{t("posts.header")}</h1>
                    <p>
                        {t("posts.all")}{" "}
                        <i className="fa-solid fa-arrow-up"></i>
                    </p>
                </div>
                <div className="posts-content">
                    {loading ? (
                        <h1>Loading...</h1>
                    ) : (
                        data?.map((post) => (
                            <PostCard key={post.id} item={post} />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}

export default Home;
