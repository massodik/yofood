import React from 'react';
import { Tabs, WhiteSpace, Badge, Card } from 'antd-mobile';
import Page2 from './Page2';

const tabs = [
  { title: <Badge text={'3'}>Transport</Badge> },
  { title: <Badge text={'今日(20)'}>Food</Badge> },
  { title: <Badge dot>Delivery</Badge> }
];

const tabs2 = [
  { title: 'First Tab', sub: '1' },
  { title: 'Second Tab', sub: '2' },
  { title: 'Third Tab', sub: '3' }
];

const IniTabBro = () => (
  <div>
    <Tabs
      tabs={tabs}
      initialPage={1}
      onChange={(tab, index) => {
        console.log('onChange', index, tab);
      }}
      onTabClick={(tab, index) => {
        console.log('onTabClick', index, tab);
      }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '150px',
          backgroundColor: '#fff'
        }}>
        Content of first tab
      </div>
      <div>
        <Page2 />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '150px',
          backgroundColor: '#fff'
        }}>
        Content of third tab
      </div>
    </Tabs>
    <WhiteSpace />
  </div>
);

export default IniTabBro;
