import Categories from "../component/Categories";
import Header from "../component/Header";
import List from "../List/List";
import SetItem from "../State/SetItem";
import Slidder from "../component/Slidder/Slidder";

const Home = () => {
    return (
        <>
            <SetItem>
                <Header />
                <Slidder />
                <Categories />
                <List />
            </SetItem>
        </>
    );
};

export default Home;
