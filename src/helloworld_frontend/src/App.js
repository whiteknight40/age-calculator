import { html, render } from 'lit-html';
import { helloworld_backend } from 'declarations/helloworld_backend';
import logo from './logo2.svg';

class App {
  greeting = '';

  constructor() {
    this.#render();
  }

  

  #render() {
    let body = html`
      <main>
        <div class="heading">
          <h1>Enter your birthday</h1>
        </div>
        <div class="input1">
          <input type="date" id="date" />
        </div>
        <div class="button1">
          <button id="btn">Calculate age</button>
        </div>
        <h1 id="result"></h1>
      </main>
    `;
    render(body, document.getElementById('root'));
    const date = document.getElementById("date");
    const btn = document.getElementById("btn");
    const result = document.getElementById("result");

    const calculateAge = () => {
      const birthday = date.value;
      if (date.value === "") {
        alert("Please enter your birthday");
      } else {
        const age = getAge(birthday);
        result.innerText = `You are ${age} ${age > 1 ? "years" : "year"} old.`;
      }
    };

    const getAge = (birthday) => {
      const currentDate = new Date();
      const birthdayDate = new Date(birthday);
      let age = currentDate.getFullYear() - birthdayDate.getFullYear();
      const month = currentDate.getMonth() - birthdayDate.getMonth();

      if (
        month < 0 ||
        (month === 0 && currentDate.getDate() < birthdayDate.getDate())
      ) {
        age--;
      }
      return age;
    };

    btn.addEventListener("click", calculateAge);

  }
}

export default App;
