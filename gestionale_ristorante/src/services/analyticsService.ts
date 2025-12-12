import type { ChartDataResponse, FetchChartDataParams } from "../Interfaces/backoffice";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000";

export async function fetchChartData(params: FetchChartDataParams = {}): Promise<ChartDataResponse> {
  const search = new URLSearchParams(
    Object.entries(params)
      .filter(([, value]) => value != null && value !== "")
      .map(([key, value]) => [key, String(value)])
  );

  const response = await fetch(`${API_BASE_URL}/analytics${search.size ? `?${search}` : ""}`);

  if (!response.ok) {
    throw new Error(`Errore caricamento grafici: ${response.statusText}`);
  }

  return response.json();
}
