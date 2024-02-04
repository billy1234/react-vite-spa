import { useQuery } from "@tanstack/react-query";
import { getCatFact } from "../services/testService";
import { useContext } from "react";
import { HttpClientContext } from "../utils/HttpContext";

export function useCatFact() {
  const clientContext = useContext(HttpClientContext);
  const { isLoading, error, data } = useQuery({
    queryKey: ["cat-fact"],
    queryFn: () => getCatFact(clientContext),
  });

  return {
    isLoading,
    error,
    data,
  };
}
