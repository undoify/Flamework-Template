import { BaseComponent, Component } from "@flamework/components";
import { Janitor } from "@rbxts/janitor";
import { OnStart } from "@flamework/core";

@Component()
export default abstract class DisposableComponent<A extends object = {}, I extends Instance = Instance, U extends object | void = void>
	extends BaseComponent<A, I>
	implements OnStart
{
	protected readonly janitor = new Janitor<U>();

	constructor() {
		super();
	}

	onStart() {
		this.maid.GiveTask(this.janitor);
	}
}
