import "jspdf-autotable";
import React from "react";
import { LiaShareSolid } from "react-icons/lia";
import { SlCloudDownload, SlPrinter } from "react-icons/sl";
import { useGeneratePdf } from "../hooks/useGeneratePdf";
import toast from "react-hot-toast";

const SharePrintDownloadComponent = ({ singleFlashCardData, setShowModal }) => {
	// Function to download the PDF
	const flashCardPdf = useGeneratePdf(singleFlashCardData.flashCardsData);
	return (
		<div
			data-testid="test-share-print-download-component"
			className="w-full h-1/6 mx-auto flex flex-wrap rounded-xl md:w-2/12 md:flex-col md:h-1/2 md:gap-5">
			{/* Share Button */}
			<button
				data-testid="test-share-btn"
				onClick={() => setShowModal(true)}
				className="w-[30%] h-2/3 flex items-center gap-2 text-black cursor-pointer transition-all duration-300 ease-in-out bg-white rounded-xl hover:bg-red-500 hover:text-white md:w-full md:h-1/4 md:px-4">
				<LiaShareSolid className="hidden lg:block text-2xl font-bold" />
				<span className="w-full md:text-lg font-bold md:w-auto text-center">
					Share
				</span>
			</button>

			{/* Download Button */}
			<button
				data-testid="test-download-btn"
				onClick={() => {
					toast.promise(
						flashCardPdf.save("flashcard.pdf", { returnPromise: true }),
						{
							error: "Something went wrong!",
							loading: "Downloading...",
							success: "Downloaded successfully!",
						}
					);
				}}
				className="w-[30%] h-2/3 flex items-center gap-2 text-black cursor-pointer transition-all duration-300 ease-in-out bg-white rounded-xl hover:bg-red-500 hover:text-white md:w-full md:h-1/4 md:px-4">
				<SlCloudDownload className="hidden lg:block text-2xl font-bold" />
				<span className="w-full md:text-lg font-bold md:w-auto text-center">
					Download
				</span>
			</button>

			{/* Print Button */}
			<button
				data-testid="test-print-btn"
				onClick={() => {
					window.open(flashCardPdf.output("bloburl"), "_blank");
				}}
				className="w-[30%] h-2/3 flex items-center gap-2 text-black cursor-pointer bg-white rounded-xl transition-all duration-300 ease-in-out hover:bg-red-500 hover:text-white md:w-full md:h-1/4 md:px-4">
				<SlPrinter className="hidden lg:block text-2xl font-bold" />
				<span className="w-full md:text-lg font-bold md:w-auto text-center">
					Print
				</span>
			</button>
		</div>
	);
};

export default SharePrintDownloadComponent;
