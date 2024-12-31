const AdmissionForm = require('../Models/AdmissionForm');
const MainSchoolDatabase = require('../Models/MainSchoolDatabase');

exports.calculateTopStudents = async (req, res) => {
  try {
    // Fetch all admission records and filter out students with missing obtained marks
    const students = await AdmissionForm.find({ obtainedMarks: { $exists: true } }).sort({ obtainedMarks: -1 }).limit(20);

    // Clear the previous top students list
    await MainSchoolDatabase.deleteMany({});

    // Map the students to the new format and add rank
    const topStudents = students.map((student, index) => ({
      misId: student.misId,
      firstName: student.firstName,
      lastName: student.lastName,
      classAppliedFor: student.classAppliedFor,
      obtainedMarks: student.obtainedMarks,
      totalMarks: student.totalMarks,
      rank: index + 1, // Assign rank based on their position in the sorted list
    }));

    // Insert top students into the MainSchoolDatabase collection
    await MainSchoolDatabase.insertMany(topStudents);

    // Send a success response
    res.status(200).json({
      message: 'Top 20 students calculated and stored successfully!',
      topStudents,
    });
  } catch (error) {
    console.error("Error calculating top students:", error);
    res.status(400).json({ error: 'An error occurred while calculating top students.' });
  }
};
