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

var user = {

    name: 'Chetan',
    age: 26,
    location: 'Chicago'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location : ",
            location
        );
    }
}

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age : ",
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
