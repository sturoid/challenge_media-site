import React from 'react';
import Search from '../../components/Search/';
import { wrapper600 } from '../../lib/wrappers.styles';

const UsersPage = () => (
  <section>
    <div className={wrapper600}>
      <Search />
    </div>
  </section>
);

export default UsersPage;
