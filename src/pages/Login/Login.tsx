import { Label, TextInput, Checkbox, Button } from "flowbite-react"
import PasswordRecup from "../../components/PasswordRecup/PasswordRecup"
import { Link } from "react-router-dom"


const Login = () => {
  return (
    <>
      <form className="flex max-w-md flex-col gap-4 ml-3 mb-5">
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
          <a href="/passwordRecup" className="text-gray-400">Mot de passe oublié</a>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">
            Remember me
          </Label>
        </div>
        <Button type="submit">
          Submit
        </Button>
      </form>
      <p className="ml-3">Première fois? Inscrivez-vous <span><a href="/signup" className="text-gray-400">ici</a></span></p>
    </>
  )
}
export default Login