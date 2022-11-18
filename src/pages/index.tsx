import { Login } from "../shared/components/Login";
import { auth } from "../shared/services/authenticateService";

export const Home = () => {
  const userToken = async () => {
    const data = await auth("andrezaleal@admin","admin")
    console.log(data)
  };
  console.log(userToken);
  return (
    <>
      <Login/>
    </>
  )
}
