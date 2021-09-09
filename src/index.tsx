import React from 'react';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkOutlinedIcon from '@material-ui/icons/BookmarkOutlined';

interface PropsTypes {
  value: boolean;
  onChange(args: boolean): void;
}

export const BookMarkButton = ({
  value,
  onChange,
}: PropsTypes): JSX.Element => {
  if (value === true) {
    return (
      <button
        className="favourites-button"
        onClick={() => onChange(!value)}
        data-testid="clicked-button"
      >
        <BookmarkOutlinedIcon fontSize="large" />
      </button>
    );
  } else {
    return (
      <button
        className="favourites-button"
        onClick={() => onChange(!value)}
        data-testid="notClicked-button"
      >
        <BookmarkBorderIcon fontSize="large" />
      </button>
    );
  }
};
