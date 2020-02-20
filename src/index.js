import * as React from "react";
import { render } from "react-dom";
import App from "./app";

class Container {

    init() {
        window.addEventListener("load", () => this.render());
        return this;
    }

    render() {
        render((
            <div id="root">
                <App name="Manoj"/>
            </div>
        ), document.querySelector(".container"));
    }

}

export default new Container().init();