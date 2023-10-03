import SideBar from "../SideBar/SideBar"


function Layout2(props: any) {
    return (
        <>
            <SideBar />
            <section className='w-full sm:w-8/12 md:w-9/12 lg:w-10/12 m-1 sm:ms-auto'>
                {props.children}
            </section>
        </>
    )
}

export default Layout2