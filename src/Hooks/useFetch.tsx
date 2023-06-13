import { useEffect, useState } from "react";

type TypeGit = {
  login: string;
  followers: string;
  following: string;
  public_repos: number;
  company: string;
  location: string;
};

export function useFetch(url: string) {
  const [data, setData] = useState<TypeGit | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function api() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        if (response.ok === false) throw new Error(json.message);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    api();
  }, [url]);

  return { data, error, loading };
}
