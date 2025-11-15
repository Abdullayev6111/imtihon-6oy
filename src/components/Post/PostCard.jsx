import { Button, Card, Image, Text } from "@mantine/core";
import useAppContext from "../../hooks/useAppContext";
import { useNavigate } from "react-router-dom";

function PostCard({ item }) {
    const navigate = useNavigate();
    const { likedPosts, setLikedPosts } = useAppContext();

    const isLiked = likedPosts.some((p) => p.id === item.id);

    const handleLike = () => {
        if (isLiked) {
            setLikedPosts((prev) => prev.filter((p) => p.id !== item.id));
        } else {
            setLikedPosts((prev) => [...prev, item]);
        }
    };

    const handleClick = () => {
        navigate(`/${item.id}`);
    };

    return (
        <section className="container">
            <Card
                shadow="sm"
                padding="md"
                className="card"
                style={{
                    transition: "transform 0.3s, box-shadow 0.3s",
                    cursor: "pointer",
                    position: "relative",
                }}
                onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.02)")
                }
                onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                }
            >
                <Card.Section style={{ flexShrink: 0 }}>
                    <Image
                        src={`https://picsum.photos/seed/${item.id}/200/200`}
                        width={80}
                        height={100}
                        style={{
                            borderRadius: 8,
                            marginTop: 10,
                            paddingLeft: 10,
                        }}
                    />
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
                </Card.Section>

                <div style={{ marginLeft: 25 }} onClick={handleClick}>
                    <Text
                        fw={500}
                        size="16px"
                        lineClamp={1}
                        className="card-title"
                    >
                        {item.title}
                    </Text>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: 20,
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
                                    color: "#969696",
                                    textTransform: "uppercase",
                                    fontSize: 10,
                                    fontWeight: 600,
                                }}
                            >
                                {item.tags[0]}
                            </p>
                        </div>
                        <p
                            style={{
                                color: "#969696",
                                textTransform: "uppercase",
                                fontSize: 10,
                                fontWeight: 600,
                                display: "flex",
                                gap: 5,
                                alignItems: "center",
                            }}
                        >
                            <i className="fa-solid fa-eye"></i>
                            {item.views}
                        </p>
                    </div>
                </div>
            </Card>
        </section>
    );
}

export default PostCard;
