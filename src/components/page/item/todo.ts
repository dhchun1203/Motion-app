import { BaseComponent } from "../../component.js";

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, content: string) {
    super(`<section class="todo">
				<h2 class="page-item__title"></h2>
				<label for="todo_checkbox"><input type="checkbox" id="todo_checkbox" for="todo_checkbox" class="todo__checkBox"></label>
			</section>`);
    const titleElement = this.element.querySelector(
      ".page-item__title"
    )! as HTMLHeadingElement;
    titleElement!.textContent = title;

    const todoElement = this.element.querySelector(
      ".todo__checkBox"
    )! as HTMLInputElement;
    todoElement.insertAdjacentText("afterend", content);
  }
}
