import { Controller, OnStart } from "@flamework/core";

@Controller({})
export class AiController implements OnStart {
	onStart() {
		print("Client working");
	}
}
