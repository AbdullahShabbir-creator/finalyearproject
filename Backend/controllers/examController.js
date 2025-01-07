const multer = require('multer');
const path = require('path');
const fs = require('fs');
const ExamResult = require('../Models/ExamResult');

// Define the path to the 'uploads' folder in the project directory
const uploadFolderPath = path.join(__dirname, '..', 'uploads');

// Ensure that the 'uploads' folder exists
if (!fs.existsSync(uploadFolderPath)) {
  fs.mkdirSync(uploadFolderPath, { recursive: true });
}

// Configure multer to store files in the uploads folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFolderPath);  // Store files in 'uploads' folder
  },
  filename: (req, file, cb) => {
    // Use the current timestamp as part of the filename to make it unique
    const fileName = `${Date.now()}_${file.originalname}`;
    cb(null, fileName);  // Save the file with this unique name
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Set the file size limit (10MB)
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'application/pdf') {
      return cb(new Error('Only PDF files are allowed.'));
    }
    cb(null, true);
  }
}).single('pdfFile');  // The name of the file input in the form

// Handle the file upload
const uploadPdf = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }

    // Extract the className from the request body
    const { className } = req.body;
    if (!className) {
      return res.status(400).json({ message: 'Class name is required.' });
    }

    // If no file is uploaded
    if (!req.file) {
      return res.status(400).json({ message: 'PDF file is required.' });
    }

    // Construct the URL to access the uploaded file
    const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

    try {
      // Save the file reference to the database
      const newExamResult = new ExamResult({
        className,
        fileUrl,
      });

      await newExamResult.save();
      res.status(200).json({ message: 'File uploaded successfully', fileUrl });
    } catch (error) {
      res.status(500).json({ message: 'Error saving PDF to the database' });
    }
  });
};

// Fetch the latest PDF by class name
const getPdfByClass = async (req, res) => {
  const { className } = req.params;
  try {
    const result = await ExamResult.find({ className })  // Find all results for the class
      .sort({ uploadedAt: -1 })  // Sort by 'uploadedAt' in descending order to get the latest file
      .limit(1);  // Limit to just 1 document (the latest one)

    if (result.length === 0) {
      return res.status(404).json({ message: 'No PDF found for this class' });
    }

    res.json({ fileUrl: result[0].fileUrl });  // Return the fileUrl of the latest document
  } catch (error) {
    res.status(500).json({ message: 'Error fetching PDF' });
  }
};


module.exports = {
  uploadPdf,
  getPdfByClass,
};
