/**
 * 
 * Project: Algorizin (React Developer Recruiting Task)
 * Title: Layout Component 
 * Author: Musiur Alam Opu
 * 
 * Description: There are some component that will be shown 
 * throughout the application, such as Navigation bar, Footer etc.
 * We are using this Layout component to structure our application page
 * all over the application. 
 * 
 * Date: 26th April, 2022
 * 
 */


//dependencies
const { default: Navbar } = require("../components/Navbar")


//main_function
const Layout = ({children}) => {
    return (
        <>
        <Navbar />
        <main>{children}</main>
        </>
    )
}

export default Layout;