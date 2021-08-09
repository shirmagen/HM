import { useLoading } from '../../Providers/LoadingProvider';

export const generateApi = ({ instance }) => {
  const { setLoading } = useLoading();

  const baseApiFunction = async ({ url, callback, body }) => {
    setLoading(true);
    try {
      const { data } = await callback(url, body);

      return data;
    } finally {
      setLoading(false);
    }
  };

  const get = async ({ url }) => {
    baseApiFunction({ url, callback: instance.get });
  };

  const post = async ({ url, body }) => {
    baseApiFunction({ url, callback: instance.get, body });
  };

  const deleteMethod = async ({ url }) => {
    baseApiFunction({ url, callback: instace.delete });
  };

  const put = async ({ url, body }) => {
    baseApiFunction({ url, callback: instace.put, body });
  };

  return { get, post, put, deleteMethod };
};
