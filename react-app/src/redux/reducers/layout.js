import { SETSCROLL } from "@/redux/constant";

const defaultScrollTop = 0;
export default function setScroll(preState = defaultScrollTop, action) {
	const { type, data } = action;
	switch (type) {
		case SETSCROLL:
			return { scrollTop: data };
		default:
			return defaultScrollTop;
	}
}
