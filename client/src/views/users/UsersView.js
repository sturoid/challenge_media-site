import React from 'react';
import Search from '../../components/Search/';
import { wrapper600 } from '../../lib/wrappers.styles';

const UsersView = () => (
  <section>
    <div className={wrapper600}>
      <Search
        src="/api/v1/users"
        fields={[
          { name: 'Name', value: 'display_name' },
          { name: 'Username', value: 'username' },
          { name: 'Location', value: 'location' }
        ]}
      />
    </div>
  </section>
);

export default UsersView;
