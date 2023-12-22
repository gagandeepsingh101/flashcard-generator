import React from "react";
import toast from "react-hot-toast";
import { BiLogoGmail } from "react-icons/bi";
import { CiShare2 } from "react-icons/ci";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { GiTireIronCross } from "react-icons/gi";
import { PiCopySimpleBold } from "react-icons/pi";

const Model = ({ setShowModal }) => {
	// State to control the visibility of social share icons
	const [showSocialShare, setShowSocialShare] = React.useState(false);

	return (
		<div className="overflow-hidden z-50 w-[100vw] h-[100vh] flex items-center justify-center absolute top-0 left-0 bg-[#000000ce]">
			<div className="w-11/12 h-[35%] relative rounded-xl bg-white p-5 md:w-fit md:h-fit">
				{/* Close modal button */}
				<GiTireIronCross
					onClick={() => setShowModal(false)}
					className="text-red-500 hover:text-red-700 absolute right-2 top-1 text-3xl cursor-pointer transition-all duration-200 ease-linear hover:rotate-180"
				/>

				{/* Modal title */}
				<h1 className="font-bold text-xl">Share</h1>

				{/* Link section */}
				<div className="flex flex-col items-center md:flex-row gap-2 p-3">
					<p className="w-full flex justify-between gap-2 border-2 rounded-lg p-3">
						<span className="w-fit">Link:</span>
						<span className="w-fit truncate">{window.location.href}</span>
					</p>

					{/* Copy and share icons */}
					<div className="flex gap-2">
						<PiCopySimpleBold
							onClick={() => {
								toast.success("Link copied to clipboard");
								navigator.clipboard.writeText(window.location.href);
							}}
							className="cursor-pointer text-3xl hover:text-red-500"
						/>
						<CiShare2
							onClick={() => setShowSocialShare(!showSocialShare)}
							className="cursor-pointer text-3xl hover:text-blue-500"
						/>
					</div>
				</div>

				{/* Social share icons */}
				<div
					className={
						"w-11/12 h-1/2 p-3 gap-5 flex overflow-hidden justify-between mx-auto relative transition-all duration-500 ease-linear md:w-10/12 " +
						(!showSocialShare
							? "-z-50 -translate-y-[100%] "
							: "-translate-y-[0] z-40 ")
					}>
					<FaWhatsapp
						onClick={() => window.open("https://web.whatsapp.com/", "_blank")}
						className="text-4xl cursor-pointer md:text-5xl text-green-500 bg-transparent p-1 rounded-full hover:shadow-md hover:shadow-green-500"
					/>
					<FaFacebook
						onClick={() => window.open("https://www.facebook.com/", "_blank")}
						className="text-4xl cursor-pointer md:text-5xl text-blue-500 bg-transparent p-1 rounded-full hover:shadow-md hover:shadow-blue-500"
					/>
					<FaLinkedin
						onClick={() => window.open("https://www.linkedin.com/", "_blank")}
						className="text-4xl cursor-pointer md:text-5xl text-blue-500 bg-transparent p-1 rounded-full hover:shadow-md hover:shadow-blue-500"
					/>
					<FaTwitter
						onClick={() => window.open("https://twitter.com/", "_blank")}
						className="text-4xl cursor-pointer md:text-5xl text-blue-500 bg-transparent p-1 rounded-full hover:shadow-md hover:shadow-blue-500"
					/>
					<BiLogoGmail
						onClick={() => window.open("https://gmail.google.com", "_blank")}
						className="text-4xl cursor-pointer md:text-5xl text-red-500 bg-transparent p-1 rounded-full hover:shadow-md hover:shadow-red-500"
					/>
				</div>
			</div>
		</div>
	);
};

export default Model;
