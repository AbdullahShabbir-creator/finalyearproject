const AdmissionForm = require('../Models/AdmissionForm');
const ScholarshipForm = require('../Models/scholarshipModel');

exports.submitScholarshipForm = async (req, res) => {
  try {
    const { Misid, name, className, Grade, email, phoneNumber, scholarshipType } = req.body;

    // Misid is already treated as a string here (from the frontend)
    const student = await AdmissionForm.findOne({ misId: Misid });

    if (!student) {
      return res.status(400).json({ message: 'Your Mis ID is not in the database.' });
    }

    // Proceed with saving the scholarship form
    const scholarshipData = new ScholarshipForm({
      Misid,
      name,
      className,
      Grade,
      email,
      phoneNumber,
      scholarshipType
    });

    await scholarshipData.save();
    return res.status(200).json({ message: 'Scholarship form submitted successfully!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};
