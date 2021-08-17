/*
        const elementProps = { className: "greeting", children: "Hello World" };
        const elementType = "h1";
        const element = React.createElement(elementType, elementProps);
        */
// Creating JSX element
/*
      const fullname = (user) => user.firstName + " " + user.lastName;
      const user = { firstName: "Premkumar", lastName: "Vanapalli" };
      const element = <h1 className="greeting">Hello {fullname(user)}!</h1>;
      */
const element = (
  <div>
    <h1 className="greeting">Premkumar</h1>
    <p>Hello Premkumar</p>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
