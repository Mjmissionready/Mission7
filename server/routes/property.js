const express = require("express");
// const { default: Property } = require("../../client/src/pages/Property.js");
const {
    getAllProperties,
    getProperty,
    createProperty,
    updateProperty,
    deleteProperty,
    countByNZ,
    countByDistrict,
    CountBySuburb,
    countByBedroom,
    countByBathroom,
} = require("../controller/cProperty.js");


const propertyRoute = express.Router();

propertyRoute.get("/", getAllProperties);

propertyRoute.get("/countByNZ", countByNZ);

propertyRoute.get("/countByDistrict", countByDistrict);

propertyRoute.get("/countBySuburb", CountBySuburb);

propertyRoute.get("/countByBedroom", countByBedroom);

propertyRoute.get("/countByBathroom", countByBathroom);

propertyRoute.get("/:id", getProperty);

propertyRoute.post("/", createProperty);

propertyRoute.put("/:id", updateProperty);

propertyRoute.delete("/:id", deleteProperty);

module.exports = { propertyRoute };

// export default router
