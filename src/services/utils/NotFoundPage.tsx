import Layout from "../../components/Layouts/Layout";

export default function NotFoundPage() {
  return (
    <div>
      <Layout>
        <div className="flex justify-center items-center mt-32">
          <img src="https://beratung.medizin.de/assets/img/404.svg" alt="404"/>
        </div>
        <h1 className="text-center mt-20 font-black text-4xl"> PAGE NOT FOUND </h1>
      </Layout>
    </div>
  )
}