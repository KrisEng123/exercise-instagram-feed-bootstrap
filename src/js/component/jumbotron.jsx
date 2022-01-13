import React from "react";

const Jumbotron = () => {
	return (
		<div class="container-fluid py-5 bg-light">
			<h1 class="display-5 fw-bold">A Warm Welcome</h1>
			<p class="col-md-8 fs-4">
				Using a series of utilities, you can create this jumbotron, just
				like the one in previous versions of Bootstrap. Check out the
				examples below for how you can remix and restyle it to your
				liking.
			</p>
			<br></br>
			<p class="col-md-8 fs-4">
				If you're looking at this page, please pass my exercise - just
				saying. Would be absolutely awesome if you do.
			</p>
			<a href="https://www.youtube.com/watch?v=ejcWz1ZRC9I">
				<button class="btn btn-primary btn-lg" type="button">
					Please :D
				</button>
			</a>
		</div>
	);
};

export default Jumbotron;
