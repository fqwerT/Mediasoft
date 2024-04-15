import { Outlet } from "react-router"
import { AppHeader } from "../components/AppHeader/AppHeader"



export const Layout = () => {
 

    return (

        <>
            <AppHeader/>
            <Outlet/>
        </>
    )

}