import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import App from './App';


const AttributesContainer = App.AttributesContainer;


storiesOf('Components', module)
.add('Attributes Container', () => {
  return <AttributesContainer></AttributesContainer>;
});

storiesOf('Button', module)
.add('with text', () => (
  <button onClick={action('clicked')}>Hello Button</button>
))
.add('with some emoji', () => (
  <button onClick={action('clicked')}>😀 😎 👍 💯</button>
));
