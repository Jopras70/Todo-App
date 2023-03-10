import React from 'react';
import PropTypes from 'prop-types';
import * as classnames from 'classnames';
import { inject, observer } from 'mobx-react';


const TodosFiltered = inject('TodoStore')(observer(props => {
  const TodoStore = props.TodoStore;
  return (
    <div>
      <button
        onClick={() => TodoStore.updateFilter('all')}
        className={classnames({ 'active': TodoStore.filter === 'all' })}
      >
        Semua
      </button>

      <button
        onClick={() => TodoStore.updateFilter('active')}
        className={classnames({ 'active': TodoStore.filter === 'active' })}
      >
        Aktif
      </button>

      <button
        onClick={() => TodoStore.updateFilter('completed')}
        className={classnames({ 'active': TodoStore.filter === 'completed' })}
      >
        Selesai
      </button>
    </div>
  );
}));

TodosFiltered.wrappedComponent.propTypes = {
  TodoStore: PropTypes.object.isRequired,
};

export default TodosFiltered;
