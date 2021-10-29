const initWebGl = (canvas) => {
	let gl = null;

	try {
		// Попытаться получить стандартный контекст. Если не получится, попробовать получить экспериментальный.
		gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
		if (!gl) {
			alert("Unable to initialize WebGL. Your browser may not support it.");
		}
	}
	catch (e) { 
		console.log(e);
	}

	return gl;
}

export default {
	initWebGl,
}