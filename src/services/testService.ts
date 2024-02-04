export interface CatFact {
  fact: string;
  length: number;
}

import type { AxiosInstance } from "axios";

export async function getCatFact(client: AxiosInstance) {
  return client
    .get<CatFact>("/fact")
    .then((x) => new Promise<CatFact>((res) => setTimeout(res, 1000, x.data)));
}
