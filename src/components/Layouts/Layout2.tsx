import SideBar from "../SideBar/SideBar"


function Layout2(props: any) {
    return (
        <>
            <SideBar />
            {props.children}
        </>
    )
}

export default Layout2