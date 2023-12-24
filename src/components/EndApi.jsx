import { useEffect } from "react";

const End = () => {
  useEffect(() => {
    const LoginUser = async () => {
      try {
        let JsonApi = "http://localhost:1337/products";

        const response = await fetch(JsonApi);
        const responseData = await response.json();
        console.log(responseData);
        console.log(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    LoginUser();
  }, []);

  return <div></div>;
};

export default End;
