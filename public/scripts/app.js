"use strict";

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer!",
    option: ["one", "two"]
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        "Subtitle : ",
        app.subtitle
    ),
    app.option && app.option.length > 0 && React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            app.option[0]
        ),
        React.createElement(
            "li",
            null,
            app.option[1]
        )
    )
);

var count = 0;
var addOne = function addOne() {
    count++;
    renderApp();
};

var minusOne = function minusOne() {
    count--;
    renderApp();
};
var reset = function reset() {
    count = 0;
    renderApp();
};

var renderApp = function renderApp() {

    var templateTwo = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: minusOne },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "reset"
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

var appRoot = document.getElementById('app');

renderApp();
