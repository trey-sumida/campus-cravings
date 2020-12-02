import React from 'react';
import { Header } from 'semantic-ui-react';
import TopPicks from '../components/TopPicks';

/** A simple static component to render some text for the todays top picks page. */
class TodaysTopPicks extends React.Component {
  render() {
    return (
        <div>
          <Header as="h2" textAlign="center">Today&#39;s Top Picks</Header>
          <TopPicks/>
        </div>
    );
  }
}

export default TodaysTopPicks;