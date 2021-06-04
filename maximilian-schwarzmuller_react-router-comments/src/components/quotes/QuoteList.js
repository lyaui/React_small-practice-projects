import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queries = new URLSearchParams(location.search);
  const isSortingAsc = queries.get('sort') === 'asc';

  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAsc ? 'dsc' : 'asc'}`,
    });
  };

  const sortedQrotes = (() =>
    props.quotes.sort((a, b) => {
      if (isSortingAsc) return a.id > b.id ? 1 : -1;
      return a.id < b.id ? 1 : -1;
    }))();

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAsc ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQrotes.map((quote) => (
          <QuoteItem key={quote.id} id={quote.id} author={quote.author} text={quote.text} />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
