import React from 'react';
import { YMInitializer } from 'react-yandex-metrika';

const MyComponent = () => {

  return (
    <div>

      <YMInitializer accounts={[22375891]} options={{ webvisor: true }} version="2" />

    </div>

  );

}
export default MyComponent;