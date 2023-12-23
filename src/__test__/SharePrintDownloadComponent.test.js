import {
	fireEvent,
	render,
	screen
} from "@testing-library/react";
import "jspdf-autotable"; // Import jspdf-autotable for table generation
import React from "react";
import SharePrintDownloadComponent from "../components/SharePrintDownloadComponent";

const setShowModal = jest.fn();
const singleFlashCardData = {
	flashCardsData: {
		groupInfo: {
			groupDescription: "ewqewrwrewrewrewew",
			groupImage:
				"https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?w=234&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
			groupName: "ewqwewrewre",
		},
		termInfo: [
			{
				termName: "ewqewrew",
				termDescription: "ewqewrewrewrewew",
				termImage:
					"https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?w=234&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
			},
		],
	},
};
it("should render Share Print Download Component", () => {
	render(
		<SharePrintDownloadComponent
			singleFlashCardData={singleFlashCardData}
			setShowModal={setShowModal}
		/>
	);
	const sharePrintDownloadComponent = screen.getByTestId(
		"test-share-print-download-component"
	);
	expect(sharePrintDownloadComponent).toBeInTheDocument();
});

describe("check functionality of share button", () => {
	it("should render share button", () => {
		render(
			<SharePrintDownloadComponent
				singleFlashCardData={singleFlashCardData}
				setShowModal={setShowModal}
			/>
		);
		const shareBtn = screen.getByTestId("test-share-btn");
		expect(shareBtn).toBeInTheDocument();
	});

	it("should show share modal", () => {
		render(
			<SharePrintDownloadComponent
				singleFlashCardData={singleFlashCardData}
				setShowModal={setShowModal}
			/>
		);
		const shareBtn = screen.getByTestId("test-share-btn");
		fireEvent.click(shareBtn);
		expect(setShowModal).toHaveBeenCalledWith(true);
	});
});

jest.mock("../hooks/useGeneratePdf", () => ({
	useGeneratePdf: jest.fn(() => ({
		save: jest.fn(() => Promise.resolve()),
		output: jest.fn(() => "bloburl"),
	})),
}));

jest.mock("react-hot-toast", () => ({
	...jest.requireActual("react-hot-toast"),
	promise: jest.fn(),
}));
describe("check functionality of download button", () => {
	it("should Render Download Button", async () => {
		render(
			<SharePrintDownloadComponent
				singleFlashCardData={singleFlashCardData}
				setShowModal={setShowModal}
			/>
		);
		const downloadBtn = screen.getByTestId("test-download-btn");
		expect(downloadBtn).toBeInTheDocument();
	});
});

describe("check functionality of print button", () => {
	it("should render print button", () => {
		render(
			<SharePrintDownloadComponent
				singleFlashCardData={singleFlashCardData}
				setShowModal={setShowModal}
			/>
		);
		const printBtn = screen.getByTestId("test-print-btn");
		expect(printBtn).toBeInTheDocument();
	});
});
