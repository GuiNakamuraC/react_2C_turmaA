import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Favorites.module.css";
import VideoList from "../../components/VideoList";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import { useFavoriteContext } from "../../contexts/Favorites";

function Favorites() {

    const { favorite } = useFavoriteContext()

    return (
        <>
            <ScrollToTopButton />
            <Header />
            <Container>
                <section className={styles.favorites}>
                    <h2>Meus favoritos</h2>
                    {<VideoList videos={favorite} emptyHeading="SEM FAVORITOS" />}
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Favorites;