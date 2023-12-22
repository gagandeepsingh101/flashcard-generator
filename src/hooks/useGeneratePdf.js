import jsPDF from "jspdf";

// Custom hook to generate a PDF from flashCardData
export const useGeneratePdf = (flashCardData) => {
	// Create a new instance of jsPDF
	const pdf = new jsPDF();

	// Extract the group image data from flashCardData (make sure it's a valid image URL)
	const imgData = flashCardData.groupInfo.groupImage;

	// Add the group image to the PDF
	pdf.addImage(imgData, "JPEG", 15, 50, 40, 40);

	// Add a header with color and font styling
	pdf.setTextColor(240, 128, 128);
	pdf.setFontSize(22);
	pdf.text(20, 20, "Flash Cards PDF");

	// Reset text color
	pdf.setTextColor(0, 0, 0);
	
	// Set font size for content
	pdf.setFontSize(14);

	// Add group information to the PDF
	pdf.text(20, 30, `Group Name: ${flashCardData.groupInfo.groupName}`);
	pdf.text(
		20,
		40,
		`Group Description: ${flashCardData.groupInfo.groupDescription}`
	);

	// Add a table for termInfo with colors and effects
	pdf.autoTable({
		startY: 100,
		head: [["Term Name", "Description"]],
		body: flashCardData.termInfo.map((term) => [
			term.termName,
			term.termDescription,
		]),
		theme: "grid", // Use the 'grid' theme for table borders
		styles: { halign: "center" },
		headStyles: { fillColor: [255, 31, 31] },
		alternateRowStyles: { fillColor: [255, 230, 230] },
		tableLineColor: [224, 0, 0],
		tableLineWidth: 0.1,
	});

	// Return the generated PDF
    return pdf;
};
