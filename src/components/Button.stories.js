import { Button } from './Button.jsx';

export default {
  component: Button,
};

export const MyStory = {
  args: {
    label: 'My Button',
  },
};

export const IAmYourFather = {
  args: {
    label: 'NOOOO!',
    primary: true,
    backgroundColor: "red",
    size: 'large',
  }
}