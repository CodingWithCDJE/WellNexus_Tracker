import { Component } from 'react';

import DashBoard from '../../components/dashboard/dashboard.component';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: 'CJ',
    };
  }

  render() {
    return (
      <div>
        <DashBoard />
      </div>
    );
  }
}

export default Home;
