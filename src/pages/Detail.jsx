import { FaFacebookF, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAppContext from "../hooks/useAppContext";
import axios from "axios";
import { Button } from "@mantine/core";
import { useTranslation } from "react-i18next";

function Detail() {
    const { t } = useTranslation();
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/posts/${id}`)
            .then((res) => {
                setPost(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    });

    const { likedPosts, setLikedPosts } = useAppContext();

    const isLiked = post ? likedPosts.some((p) => p.id === post.id) : false;

    const handleLike = () => {
        if (!post) return;

        if (isLiked) {
            setLikedPosts((prev) => prev.filter((p) => p.id !== post.id));
        } else {
            setLikedPosts((prev) => [...prev, post]);
        }
    };

    return (
        <div className="container detail">
            <div className="detail-socials">
                <FaFacebookF color="#1877F2" className="social-app" />
                <FaTelegramPlane color="#0088cc" className="social-app" />
                <FaTwitter color="#0088cc" className="social-app" />
            </div>
            <div className="detail-main-card">
                <div className="detail-main-top">
                    {post && (
                        <Button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleLike();
                            }}
                            pos="absolute"
                            variant="transparent"
                            style={{
                                width: 32,
                                height: 32,
                                borderRadius: "50%",
                                top: 8,
                                right: 8,
                                padding: 0,
                                background: isLiked
                                    ? "rgba(255,0,0,0.1)"
                                    : "rgba(0,0,0,0.3)",
                                backdropFilter: "blur(4px)",
                                zIndex: 10,
                            }}
                        >
                            <i
                                className={
                                    isLiked
                                        ? "fa-solid fa-heart"
                                        : "fa-regular fa-heart"
                                }
                                style={{
                                    color: isLiked ? "red" : "white",
                                    fontSize: 16,
                                }}
                            ></i>
                        </Button>
                    )}
                    <h1>{post?.title}</h1>
                    <div
                        style={{
                            display: "flex",
                            gap: 30,
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 5,
                            }}
                        >
                            <div
                                style={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    background: "#e31e24",
                                }}
                            ></div>
                            <p
                                style={{
                                    textTransform: "capitalize",
                                    fontSize: 16,
                                    color: "#ffffffe6",
                                    fontFamily: "inter-m",
                                    fontWeight: 500,
                                }}
                            >
                                {post?.tags[0]}
                            </p>
                        </div>

                        <p
                            style={{
                                fontSize: 14,
                                color: "#ffffffe6",
                                fontFamily: "inter-r",
                                fontWeight: 400,
                            }}
                        >
                            <i className="fa-solid fa-eye"></i> {post?.views}
                        </p>
                    </div>
                </div>
                <img
                    className="detail-main-img"
                    src={`https://picsum.photos/seed/picsum/800/600`}
                    alt=""
                />
                <div
                    style={{
                        display: "flex",
                        gap: 20,
                        cursor: "pointer",
                        marginTop: 10,
                    }}
                    className="reaction-buttons"
                >
                    <p
                        style={{
                            fontSize: 16,
                            color: "#ffffffe6",
                            fontFamily: "inter-r",
                            fontWeight: 400,
                        }}
                    >
                        <i className="fa-solid fa-thumbs-up"></i>{" "}
                        {post?.reactions?.likes}
                    </p>
                    <p
                        style={{
                            fontSize: 16,
                            color: "#ffffffe6",
                            fontFamily: "inter-r",
                            fontWeight: 400,
                        }}
                    >
                        <i className="fa-solid fa-thumbs-down"></i>{" "}
                        {post?.reactions?.dislikes}
                    </p>
                </div>
                <h3
                    style={{
                        fontSize: 16,
                        color: "#ffffffe6",
                        fontFamily: "inter-r",
                        fontWeight: 400,
                        marginTop: 10,
                    }}
                >
                    {post?.body}
                </h3>
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
    );
}

export default Detail;
