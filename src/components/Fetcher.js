import React from 'react';
// import { Spinner, Error } from './index';
import Spinner from './Spinner';
import Error from './Error';
import useFetcher from '../hooks/useFetcher';

const Fetcher = ({ action, children }) => {
  const [data, loading, error] = useFetcher(action);
  if (loading) return <Spinner />;
  if (error) return <Error error={error} />
  if (!data) return null;
  return children(data);
};
export default Fetcher;