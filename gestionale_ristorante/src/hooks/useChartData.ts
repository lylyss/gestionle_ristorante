import { useCallback, useEffect, useState } from "react";
import type { ChartDataResponse, FetchChartDataParams } from "../Interfaces/backoffice";

const MOCK_LABELS = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];

const createMockChartData = (params: FetchChartDataParams): ChartDataResponse =>
  ({
    labels: MOCK_LABELS,
    datasets: [
      {
        label: (params.metric ?? "Ricavi").toUpperCase(),
        data: MOCK_LABELS.map((_, idx) => Math.round(Math.sin(idx) * 150 + 250 + idx * 20)),
      },
    ],
  } as ChartDataResponse);

interface UseChartDataResult {
  data: ChartDataResponse | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useChartData(params: FetchChartDataParams = {}): UseChartDataResult {
  const [data, setData] = useState<ChartDataResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshIndex, setRefreshIndex] = useState(0);

  const refetch = useCallback(() => setRefreshIndex((prev) => prev + 1), []);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    const timeoutId = setTimeout(() => {
      if (cancelled) return;
      try {
        const payload = createMockChartData(params);
        setData(payload);
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : "Errore sconosciuto");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }, 400);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [params.metric, params.from, params.to, refreshIndex]);

  return { data, loading, error, refetch };
}
