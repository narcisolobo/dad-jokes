import { Fragment } from 'react';

import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

function EditDeleteButtons({ joke, setShow }) {
  return (
    <Fragment>
      <EditButton size="sm" joke={joke} />
      <DeleteButton size="sm" joke={joke} setShow={setShow} />
    </Fragment>
  );
}

export default EditDeleteButtons;
