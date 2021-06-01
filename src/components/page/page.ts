import { BaseComponent, Component } from "../component.js";

export interface Composable {
	addChild(child: Component): void;
}

type OnCloseListener = () => void;

interface SectionContainer extends Component, Composable {
	setOnCloseListener(listener: OnCloseListener): void;
}

type SectionContainerConstructor = {
	// 생성자의 type을 정의
	new (): SectionContainer;
};

export class PageItemComponent
	extends BaseComponent<HTMLUListElement>
	implements SectionContainer
{
	// 외부로 부터 전달 받을 콜백 함수
	private closeListener?: OnCloseListener;

	constructor() {
		super(`<li class="page-item">
							<section class="page-item__body"></section>
							<div class="page-item__controls">
								<button class="close">&times;</button>
							</div>
						</li>`);
		const closeBtn = this.element.querySelector(".close")! as HTMLButtonElement;
		closeBtn.onclick = () => {
			this.closeListener && this.closeListener();
		};
	}

	addChild(child: Component) {
		const container = this.element.querySelector(
			".page-item__body"
		)! as HTMLElement;
		child.attachTo(container);
	}

	setOnCloseListener(listener: OnCloseListener) {
		// 외부 콜백 함수를 전달해줄 함수
		this.closeListener = listener;
	}
}

export class PageComponent
	extends BaseComponent<HTMLUListElement>
	implements Composable
{
	constructor(private pageItemConstructor: SectionContainerConstructor) {
		super('<ul class="page"></ul>');
	}
	addChild(section: Component) {
		const item = new this.pageItemConstructor();

		item.addChild(section);
		item.attachTo(this.element, "beforeend");
		item.setOnCloseListener(() => {
			item.removeFrom(this.element);
		});
	}
}
