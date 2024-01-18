import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
  const { data } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  return (
    <h2>
      This is HOME page <p>{data.fact}</p>
    </h2>
  );
};
