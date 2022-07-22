import ContextAPI from "../../components/contextAPI";
import Layout from "../../components/layout";


export default function En({menuItems, homePageData}){
    return (
        <Layout menuItems={menuItems}>
            <h1>{homePageData.description}</h1>
            <ContextAPI/>
        </Layout>
    );
}


export function getStaticProps(){
    const menuItems = [
        {id: 1, title: 'Erectile dysfunction', href: '/erectile-dysfunction'},
        {id: 2, title: 'weight loss', href: '/weight-loss'}
    ];

    const homePageData = {
        description: 'Home page description'
    }

    return {
        props:{
            menuItems,
            homePageData
        }
    }
}