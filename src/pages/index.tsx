// import { useSubscription } from '../rqs-original/use-subscription'; // IMPORT USING THIS FILE AND IT WILL WORK
import { useSubscription } from 'react-query-subscription';
import { eventSource$ } from 'rx-event-source';

function getData$() {
  return eventSource$(`event/url`)
}

export default function Home() {
  const { data, isLoading, isError, error } = useSubscription(
    ['test-key'],
    getData$
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div role="alert">
        {error?.message || 'Unknown error'}
      </div>
    );
  }

  return <div>Data: {JSON.stringify(data)}</div>;
}
