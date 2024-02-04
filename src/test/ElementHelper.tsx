import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default function elementHelper(x: ReactNode, url: string[] | null) {
  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={url ?? []}>{x}</MemoryRouter>
    </QueryClientProvider>
  );
}
