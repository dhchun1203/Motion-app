import {
	Composable,
	PageComponent,
	PageItemComponent,
} from "./components/page/page.js";
import { ImageComponent } from "./components/page/item/image.js";
import { VideoComponent } from "./components/page/item/video.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { Component } from "./components/component.js";
import { InputDialog } from "./components/dialog/dialog.js";
class App {
	private readonly page: Component & Composable;
	constructor(appRoot: HTMLElement) {
		this.page = new PageComponent(PageItemComponent);
		this.page.attachTo(appRoot);

		const image = new ImageComponent(
			"image title",
			"https://picsum.photos/600/300"
		);
		// image.attachTo(appRoot, "beforeend");
		this.page.addChild(image);

		const video = new VideoComponent(
			"healing music",
			"https://youtu.be/ArQvRDWulns"
		);
		// video.attachTo(appRoot, "beforeend");
		this.page.addChild(video);

		const note = new NoteComponent("Hey!", "hello!");
		// note.attachTo(appRoot, "beforeend");
		this.page.addChild(note);

		const todo = new TodoComponent("Todo", "netflix");
		// todo.attachTo(appRoot, "beforeend");
		this.page.addChild(todo);

		const imageBtn = document.querySelector("#new-image")! as HTMLButtonElement;
		imageBtn.addEventListener("click", () => {
			const dialog = new InputDialog();

			dialog.setOnCloseListener(() => {
				dialog.removeFrom(document.body);
			});

			dialog.setOnSubmitListener(() => {
				dialog.removeFrom(document.body);
			});

			dialog.attachTo(document.body);
		});
	}
}

new App(document.querySelector(".document")! as HTMLElement);
