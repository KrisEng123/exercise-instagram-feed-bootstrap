import React from "react";
import MyNavBar from "./nav.jsx";
import Jumbotron from "./jumbotron.jsx";
import MyCard from "./card.jsx";
import Footer from "./footer.jsx";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<>
			<MyNavBar />
			<Jumbotron />
			<div class="container">
				<div class="row">
					<div class="col-sm">
						<MyCard
							cardTitle="Beautiful Rudolf"
							cardText="Rudolph the Red-Nosed Reindeer is a fictional reindeer created by Robert Lewis May. Rudolph is usually depicted as the ninth and youngest of Santa Claus's reindeer, using his luminous red nose to lead the reindeer team and guide Santa's sleigh on Christmas Eve."
							img="https://www.wallpapers13.com/wp-content/uploads/2015/12/Fall-nature-pictures-with-deer-hd-pictures-4-915x515.jpg"
						/>
					</div>
					<div class="col">
						<MyCard
							cardTitle="More Beautiful Mountains"
							cardText="A mountain is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock. A mountain differs from a plateau in having a limited summit area, and is larger than a hill, typically rising at least 300 metres above the surrounding land."
							img="https://www.wallpapers13.com/wp-content/uploads/2018/11/Dolomiti-Italy-Autumn-Lago-Antorno-landscape-photography-Desktop-HD-Wallpaper-For-PC-Tablet-And-Mobile-3840x2400-915x515.jpg"
						/>
					</div>
					<div class="col">
						<MyCard
							cardTitle="Rocky Views"
							cardText="It is categorized by the minerals included, its chemical composition and the way in which it is formed. Rocks form the Earth's outer solid layer, the crust, and most of its interior, except for the liquid outer core and pockets of magma in the asthenosphere."
							img="https://www.wallpapers13.com/wp-content/uploads/2016/07/Architecture-rock-of-nature-Arches-National-Park-in-Utah-USA-915x515.jpg"
						/>
					</div>
					<div class="col">
						<MyCard
							cardTitle="Pink Sky"
							cardText="Look at this beautiful pink sky - A stunning, but bizarre, sky was visible throughout Scotland this evening before full darkness arrived.

							The spectacle left the sky glowing in parts of Scotland this evening with areas of Glasgow enjoying the best of the show."
							img="https://www.wallpapers13.com/wp-content/uploads/2019/01/Half-Dome-Granite-dome-in-California-Yosemite-National-Park-USA-Best-HD-Wallpapers-For-Desktop-Tablets-and-Mobile-Phones3840x2160-915x515.jpg"
						/>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Home;
