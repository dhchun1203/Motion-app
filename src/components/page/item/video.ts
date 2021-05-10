import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
	constructor(title: string, url: string) {
		super(`<section class="video">
              <div class="video__player">
                  <iframe
                  class="video__iframe"
                  width="400"
                  height="300"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <h3 class="video__title"></h3>
          </section>`);
		const videoIframe = this.element.querySelector(
			".video__iframe"
		)! as HTMLIFrameElement;
		videoIframe.src = url;

		const videoTitle = this.element.querySelector(
			".video__title"
		)! as HTMLHeadingElement;
		videoTitle.textContent = title;
	}
}
