import * as React from "react";
import { Helmet } from "react-helmet";
// import Container from "../../components/Users";
// import Filter from "../../components/Filter";

// TODO move fixture upstream
// import users from "fixtures/users";

const Users = () => (
  <div className="content">
    <Helmet>
      <title>Users</title>
    </Helmet>

    <h2 className="title is-2">Users</h2>

    <div>
      <p>Coming soon...</p>

      {/*<Filter data={users}>*/}
      {/*<Container data={users} />*/}
      {/*</Filter>*/}
    </div>
  </div>
);

export default Users;
