import React, { forwardRef } from "react";
import { Scrollbars } from "react-custom-scrollbars";

const Scrollbar = forwardRef((props, ref) => {
	return (
		<Scrollbars
			autoHide
			autoHideTimeout={1000}
			autoHideDuration={200}
			autoHeight={false}
			autoHeightMin={0}
			thumbMinSize={30}
			universal={true}
			{...props}
			ref={ref}
		/>
	);
});

export default Scrollbar;
