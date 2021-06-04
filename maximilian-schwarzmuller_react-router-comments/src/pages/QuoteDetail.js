import React, { useEffect } from 'react';
import { Route, Link, useParams, useRouteMatch } from 'react-router-dom';

import useHttp from '../hooks/use-https';
import { getSingleQuote } from '../lib/api';

import Comments from '../components/comments/Comments';
import HilightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const QuoteDetail = () => {
  const match = useRouteMatch();
  const { quoteId } = useParams();

  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending')
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );

  if (error) return <p className='centered'>{error}</p>;

  if (!loadedQuote) return <p>No quote found!</p>;
  return (
    <>
      <h1>QuoteDetail</h1>
      <HilightedQuote text={loadedQuote.text} author={loadedQuote.author} />

      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </>
  );
};

export default QuoteDetail;
