import Layout from "../components/layout";

export function getStaticPaths(){
    const paths = [
        {
            params:{
                category: 'erectile-dysnfunction'
            }
        },
        {
            params:{
                category: 'weight-loss'
            }
        },
        {
            params:{
                category: 'viagra.html'
            }
        }
    ];
    return {
        paths,
        fallback:false
    }
}

export function getStaticProps(){
    const categoryData ={category: 'erectile-dysnfunction', title:'Impotence', description: 'viagra, sildenafill'};

    return {
        props:{
            categoryData
        }
    }
}

export default function Category({categoryData}){
    return (
        <Layout>
            <h2>Category page</h2>
            <p>{categoryData.title}</p>
        </Layout>
    );
}
