import SideBar from "../SideBar/SideBar"


function Layout2(props: any) {
    return (
        <>
            <SideBar />
            <section className='w-1/2 sm:w-8/12 md:w-9/12 lg:w-10/12 ms-auto'>
                {props.children}
            </section>
        </>
    )
}

export default Layout2