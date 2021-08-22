import { LoadingContext, useLoading } from '../../Providers/LoadingProvider';
import { AxiosInstance } from 'axios';

export const generateApi = (instance: AxiosInstance) => {
  const { setLoading } = useLoading() as LoadingContext;

  const get = async (url: string) => {
    setLoading(true);
    try {
      const { data } = await instance.get(url);
      return data;
    } finally {
      setLoading(false);
    }
  };

  const post = async (url: string, body: any) => {
    setLoading(true);
    try {
      const { data } = await instance.post(url, body);
      return data;
    } finally {
      setLoading(false);
    }
  };

  const deleteMethod = async (url: string) => {
    setLoading(true);
    try {
      const { data } = await instance.delete(url);

      return data;
    } finally {
      setLoading(false);
    }
  };

  const put = async (url: string, body: any) => {
    setLoading(true);
    try {
      const { data } = await instance.put(url, body);

      return data;
    } finally {
      setLoading(false);
    }
  };

  return { get, post, put, deleteMethod };
};
