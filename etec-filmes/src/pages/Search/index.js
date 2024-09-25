import styles from "./Search.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import SearchVideoList from "../../components/SearchVideoList";
import videos from "../../json/videos.json"

function Search() {
    return (
        <>
            <ScrollToTopButton />
            <Header />
            <Container>
                <section className={styles.search}>
                    <SearchVideoList videos={videos} />
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Search;