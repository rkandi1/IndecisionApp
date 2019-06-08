// Scope of each variable type:
// var: Restricted by function and class, but not restricted by block scope.
// let: Follows regular scoping rules.
// const: Follows regular scoping rules.

// JSX: JavaScript XML
let count = 0;
const meta = {
  title: "Indecision App",
  subtitle: "An example game I am creating. Woohoo!",
  options: ["one", "two"],
  printOptions: function() {
    const list = this.options.map((option) => {
      count++;
      return <li key={count}> Number: {option} </li>;
    })

    return list
  }
};

const onFormOneSubmit = (e) => {
  e.preventDefault();
  const target = e.target;
  if(target === document.getElementById("form_one")){
    const option = target.elements.option.value;
    if(option){
      meta.options.push(option);
      e.target.elements.option.value = "";
      renderTemplate();
    }
  }
  if(target === document.getElementById("form_two")) {
    meta.options = [];
    renderTemplate();
  }
};

const renderTemplate = () => {
  const template = (
    <div>
      <h1> {meta.title} </h1>
      {meta.subtitle && <p>{meta.subtitle}</p>}
      <h3 id="options_length"> {meta.options.length} </h3>
      <form id="form_two" onSubmit={onFormOneSubmit}>
        <button> Reset </button>
      </form>
      <p>{meta.options.length>0 ? "Just some random options: ": "No Options"}</p>
      <ul>
        {meta.printOptions()}
      </ul>
      <br/>
      <form id="form_one" onSubmit={onFormOneSubmit}>
        <input type="text" name="option"/>
        <button> Add Option </button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

// {} are known as JSX expressions.
const appRoot = document.getElementById("app");

renderTemplate();
