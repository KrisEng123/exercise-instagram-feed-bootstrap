import React from "react";

const Footer = () => {
	return (
		<nav class="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
			<div class="container-fluid">
				Made by{" "}
				<a class="navbar-brand" href="">
					Landing Page Exercise
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarCollapse"
					aria-controls="navbarCollapse"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarCollapse">
					<ul class="navbar-nav">
						<li class="nav-item">
							<a
								class="nav-link active"
								aria-current="page"
								href="#"></a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#"></a>
						</li>
						<li class="nav-item">
							<a class="nav-link disabled"></a>
						</li>
						<li class="nav-item dropup">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								id="dropdown10"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								Made by Crystle Ying
							</a>
							<ul
								class="dropdown-menu"
								aria-labelledby="dropdown10">
								<li>
									<a
										class="dropdown-item"
										href="https://github.com/KrisEng123">
										GitHub
									</a>
								</li>
								<li>
									<a
										class="dropdown-item"
										href="http://www.linkedin.com/in/crystleying">
										LinkedIn
									</a>
								</li>
								<li>
									<a class="dropdown-item" href="#">
										E-mail
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Footer;
