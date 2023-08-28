const { schoolService } = require("../services");

const createSchool = async (req, res) => {
  try {
    const reqBody = req.body

    const school = await schoolService.createschool(reqBody);
    if (!school) {
      throw new Error("something wen twrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("School Successfully Create"),
      data: { school }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
const getSchool = async (req, res) => {
  try {

    const school = await schoolService.getSchool();
    if (!school) {
      throw new Error("something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("School show"),
      data: { school }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteSchool = async (req, res) => {
  try {
    const id = req.params.Id
    const school = await schoolService.getSchool();

    let hotel_id = school.map((item) => { return item.id })
    let data = hotel_id.find((item) => { return item === id.toString() })
    if (!data) { return res.status(404).json("Not Found") }
    console.log(data);

    if (!school) {
      throw new Error("Please provide userId")
    }
    await schoolService.deleteschool(id)

    res.status(200).json({
      success: true,
      message: "School successfully deleted",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
};

const updateSchool = async (req, res) => {
  try {
    const schoolId = req.params.Id;

    const cateExists = await schoolService.getSchoolById(schoolId);
    if (!cateExists) {
      throw new Error("School not found!");
    }

    await schoolService.updateDetails(schoolId, req.body);

    res.status(200).json({
      success: true,
      message: "School details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createSchool, getSchool, deleteSchool, updateSchool };
