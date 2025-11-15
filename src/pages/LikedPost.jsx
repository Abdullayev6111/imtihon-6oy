import { Badge, Button } from "@mantine/core";
import useAppContext from "../hooks/useAppContext";
import { useTranslation } from "react-i18next";
import { IconHeartFilled } from "@tabler/icons-react";

function LikedPost() {
    const { t } = useTranslation();
    const { likedPosts, setLikedPosts } = useAppContext();

    const handleUnlike = (id) => {
        setLikedPosts((prev) => prev.filter((p) => p.id !== id));
    };

    if (likedPosts.length === 0) {
        return (
            <section className="container">
                <h1
                    style={{
                        color: "white",
                        fontFamily: "inter-b",
                        fontWeight: 700,
                        textAlign: "center",
                        fontSize: 24,
                        padding: "100px 0",
                    }}
                >
                    {t("liked.empty") || "Yoqtirilgan postlar yo'q"}
                </h1>
            </section>
        );
    }

    return (
        <section className="container" style={{ marginBottom: 30 }}>
            <h1 className="cart-main-text">
                {t("liked.title") || "Yoqtirilgan postlar"},{" "}
                <span>{likedPosts.length} </span>
            </h1>

            <div
                className="liked-grid"
                style={{
                    display: "grid",
                    gap: "20px",
                    marginTop: "20px",
                }}
            >
                {likedPosts.map((post) => (
                    <div
                        key={post.id}
                        className="liked-item"
                        style={{
                            borderRadius: "12px",
                            padding: "16px",
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                            background: "#111",
                        }}
                    >
                        <img
                            src={`https://picsum.photos/seed//200/200`}
                            style={{
                                width: 80,
                                height: 80,
                                objectFit: "cover",
                                borderRadius: "8px",
                            }}
                        />
                        <div style={{ flex: 1 }}>
                            <Badge color="#e31e24" mb={4}>
                                {post.tags[0]}
                            </Badge>
                            <h3
                                style={{
                                    margin: "4px 0",
                                    fontSize: "18px",
                                    color: "white",
                                    fontFamily: "inter-m",
                                }}
                            >
                                {post.title}
                            </h3>
                            <p
                                style={{
                                    color: "#666",
                                    fontSize: "14px",
                                    lineClamp: 2,
                                }}
                            >
                                {post.body}
                            </p>
                        </div>
                        <Button
                            leftSection={<IconHeartFilled size={16} />}
                            color="red"
                            variant="light"
                            onClick={() => handleUnlike(post.id)}
                        >
                            {t("liked.unlike") || "O‘chirish"}
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default LikedPost;
