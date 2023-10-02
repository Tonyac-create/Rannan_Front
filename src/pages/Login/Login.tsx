import { Label, TextInput, Checkbox, Button } from "flowbite-react"
import Layout from "../../components/Layouts/Layout"
import { useState } from "react"
import PasswordRecup from "../../components/PasswordRecup/PasswordRecup"
import Signup from "../../components/Signup/Signup"


const Login = () => {

  const [login, setLogin] = useState(true)

  const [components, setComponents] = useState(true)

  const switchComponent = () => {
    setLogin(false)
  }

  const switchComponentTest = () => {
    setLogin(false)
    setComponents(false)
  }

  return (
    <>

      {
        login ? (

          <Layout>
            <form className="flex max-w-md flex-col gap-4 mb-5">
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="email1"
                    value="Your email"
                  />
                </div>
                <TextInput
                  id="email1"
                  placeholder="name@flowbite.com"
                  required
                  type="email"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="password1"
                    value="Your password"
                  />
                </div>
                <TextInput
                  id="password1"
                  required
                  type="password"
                />
                <a onClick={switchComponent} href="#" className="text-gray-400">Mot de passe oublié</a>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">
                  Remember me
                </Label>
              </div>
              <Button className="w-6/12">
                <a href="/home">Submit</a>
              </Button>
            </form>
            <p className="ml-3">Première fois? Inscrivez-vous <span><a onClick={switchComponentTest} href="#" className="text-gray-400">ici</a></span></p>
          </Layout>
        ) : (
          components ? (
            <Layout>
              <PasswordRecup />
            </Layout>
          ) : (
            <Layout>
              <Signup />
            </Layout>
          )
        )
      }
    </>
  )
}
export default Login