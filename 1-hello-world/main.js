class Q4HelloWorld extends HTMLElement {
  // connect component
  connectedCallback() {
    this.textContent = "Hello World!";
  }
}

customElements.define("q4-hello-world", Q4HelloWorld);
