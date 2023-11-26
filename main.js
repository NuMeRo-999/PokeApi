import pintarFooter from "./components/pintarFooter";
import pintarMain from "./components/pintarMain";
import pintarNav from "./components/pintarNav";
import pintarSpinner from "./components/pintarSpinner";

const body = document.querySelector('body');

(async () => {
  try {
    await pintarSpinner(body);
    await pintarNav(body);
    pintarFooter(body);
    await pintarMain(body);
  } catch (error) {
    console.error('Error:', error);
  }
})();
