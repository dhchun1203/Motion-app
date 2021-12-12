import { BaseComponent } from "../../component.js";

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, content: string) {
    super(`<section class="note">
            <h2 class="page-item__title"></h2>
            <p class="note__content"></p>
           </section>`);
    const titleElement = this.element.querySelector(
      ".page-item__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;

    const contentElement = this.element.querySelector(
      ".note__content"
    )! as HTMLParagraphElement;
    contentElement.textContent = content;
  }
}
