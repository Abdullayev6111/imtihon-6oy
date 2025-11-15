import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { useTranslation } from "react-i18next";

const data = [
    {
        title: "carousel.card1",
        image: "https://ad-admin.qalampir.uz/uploads/7n/m_Kc3S9A8WU8rYsKXtELucIOiRxYOrHM.jpg",
    },
    {
        title: "carousel.card2",
        image: "https://ad-admin.qalampir.uz/uploads/Vu/m_6IjCRUW34YvBZ2U0F5tm36jtGIlBa6.jpg",
    },
    {
        title: "carousel.card3",
        image: "https://ad-admin.qalampir.uz/uploads/HW/m_rwpvd3wGtooIqmqZ8z4HfsBx1d3uYB.jpg",
    },
    {
        title: "carousel.card4",
        image: "https://ad-admin.qalampir.uz/uploads/MA/m_IDRnzjAw5oyqeZvE9HHgjmIXW5j1Qw.jpg",
    },
    {
        title: "carousel.card5",
        image: "https://ad-admin.qalampir.uz/uploads/6c/m_QoLU7qdJqHMp3yMLolahogDw5WxvJt.jpg",
    },
    {
        title: "carousel.card6",
        image: "https://ad-admin.qalampir.uz/uploads/2g/m_py2TdwbWu8HT9aHeZJw9BghC5TMSZE.jpg",
    },
    {
        title: "carousel.card7",
        image: "https://ad-admin.qalampir.uz/uploads/Gg/m_4LPLt25MNubIW0NXQ7sEw9UPxluGG1.jpg",
    },
    {
        title: "carousel.card8",
        image: "https://ad-admin.qalampir.uz/uploads/mc/m_cECNf6v5SKUdaF1uaLlaekU15zXRW9.jpg",
    },
    {
        title: "carousel.card9",
        image: "https://ad-admin.qalampir.uz/uploads/Li/m_CIITxqRLAGE4v5ER8sV5yUF2PVYeck.jpg",
    },
    {
        title: "carousel.card10",
        image: "https://ad-admin.qalampir.uz/uploads/Lp/m_kALNoqeldFZRUMRgstnda4U0kiNGyZ.jpg",
    },
];

function CarouselEl() {
    const { t } = useTranslation();
    const autoplay = useRef(Autoplay({ delay: 5000 }));
    const slides = data.map((item, index) => (
        <Carousel.Slide key={index}>
            <div
                style={{ position: "relative", width: "100%", height: "100%" }}
            >
                <Image
                    src={item.image}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: 10,
                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: "50%",
                        background:
                            "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))",
                    }}
                ></div>
            </div>
            <p
                style={{
                    position: "absolute",
                    bottom: "50px",
                    left: "20px",
                    right: "20px",
                    color: "white",
                    fontSize: "28px",
                    fontWeight: "500",
                    fontFamily: "inter-m",
                }}
            >
                {t(item.title)}
            </p>
        </Carousel.Slide>
    ));

    return (
        <Carousel
            withIndicators
            height={480}
            w={640}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={() => autoplay.current.play()}
            style={{
                borderRadius: "10px",
                overflow: "hidden",
            }}
        >
            {slides}
        </Carousel>
    );
}

export default CarouselEl;
