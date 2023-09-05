const Travel = require("../models/travel");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createTravel = async (reqBody) => {
    return Travel.create(reqBody);
};

const getTravelList = async () => {
    return Travel.find()
};

const deleteTravel = async (Id) => {
    return Travel.findByIdAndDelete(Id)
}

const getTravelById = async (travelId) => {
    return Travel.findById(travelId);
};

const updateDetails = async (travelId, updateBody) => {
    return Travel.findByIdAndUpdate(travelId, { $set: updateBody });
};

module.exports = {
    createTravel,
    getTravelList,
    deleteTravel,
    getTravelById,
    updateDetails
};