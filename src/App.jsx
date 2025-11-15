import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { Context } from "./context/script.js";
import Home from "./pages/Home";
import LikedPost from "./pages/LikedPost";
import Detail from "./pages/Detail";
import Layout from "./components/Layout.jsx";
import "@mantine/core/styles.css";

function App() {
    const [post, setPost] = useState(() => {
        const storedPost = localStorage.getItem("post");
        return storedPost ? JSON.parse(storedPost) : [];
    });

    const [likedPosts, setLikedPosts] = useState(() => {
        const stored = localStorage.getItem("likedPosts");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("post", JSON.stringify(post));
    }, [post]);

    useEffect(() => {
        localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
    }, [likedPosts]);

    return (
        <Context.Provider value={{ post, setPost, likedPosts, setLikedPosts }}>
            <MantineProvider>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/:id" element={<Detail />} />
                        <Route path="/liked-posts" element={<LikedPost />} />
                    </Route>
                </Routes>
            </MantineProvider>
        </Context.Provider>
    );
}

export default App;
