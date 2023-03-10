import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';


const TodosClearCompleted = inject('TodoStore')(observer(props => {
  return (
    <div>
      <button onClick={props.TodoStore.clearCompleted}>Bersihkan Pekerjaan Yang Telah Selesai</button>
    </div>
  );
}));

TodosClearCompleted.wrappedComponent.propTypes = {
  TodoStore: PropTypes.object.isRequired,
};

export default TodosClearCompleted;
