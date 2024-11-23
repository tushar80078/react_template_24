import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Logo from "@/assets/Logo.svg"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className=" h-[100vh] w-[100%]   ">

      <div className="h-[10vh] pt-4 ml-4 flex items-center">

        <img src={Logo} alt="Logo" width="40" />
        <span className="font-poppins font-semibold text-xl pl-2">Secure Chat</span>
      </div>

      <div className="flex h-[80vh] w-full justify-center items-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-3xl">
              Login
            </CardTitle>

          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4 ">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name" className="mb-2">Email</Label>
                  <Input id="name" placeholder="johndoe@gmail.com" />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name" className="mb-2">Password</Label>
                  <Input id="name" placeholder="**********" type="password" />
                </div>
              </div>
            </form>

            <div className="flex flex-col ">
              <div>
                <Button variant="link" onClick={() => navigate('/signup')}>Create Account?</Button>
              </div>
              <div className="flex justify-end">
                <Button >Login</Button>
              </div>
            </div>
          </CardContent>

        </Card>
      </div>
    </div>
  )
}

export default Login