import { useSelector } from "react-redux";

const Notification = () => {
	const notification = useSelector((state) => state.notification);
	const style =
		notification.message === ""
			? // { display: "none" } or {visibility: "hidden"} or { opacity: 0 } don't take up space, how to solve it?
			  { opacity: 0 }
			: {
					border: "solid",
					padding: 10,
					borderWidth: 1,
			  };
	return <div style={style}>{notification.message + " "}</div>;
};

export default Notification;
