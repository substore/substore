import { objectType } from "nexus";

export const Test = objectType({
	name: "Test",
	definition(t) {
		t.int("fat"), t.string("testy");
	}
});