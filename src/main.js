import App from "./App.svelte";

// get a random picture from /evies
const randomPicture = () => {
  const random = Math.floor(Math.random() * 10);
  return `/evies/${random + 1}.jpg`;
};

const app = new App({
  target: document.body,
  props: {
    evie: randomPicture(),
  },
});

export default app;
