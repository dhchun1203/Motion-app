import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
				<h3 class="page-item__title"></h3>
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
          </section>`);
    const videoIframe = this.element.querySelector(
      ".video__iframe"
    )! as HTMLIFrameElement;
    videoIframe.src = this.convertToEmbeddedURL(url);

    const videoTitle = this.element.querySelector(
      ".page-item__title"
    )! as HTMLHeadingElement;
    videoTitle.textContent = title;
  }

  // https://youtu.be/sOpp-mQM0RQ
  // https://www.youtube.com/watch?v=sOpp-mQM0RQ
  // https://youtu.be/sOpp-mQM0RQ?t=4
  private convertToEmbeddedURL(url: string): string {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);
    console.log(match);
    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}
