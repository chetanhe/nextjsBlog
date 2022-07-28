import { wrapper } from "../store";
//import '../base.css'

function MyApp({Component, pageProps}){
    return(
        <Component {...pageProps} />
    );
}

export default wrapper.withRedux(MyApp);