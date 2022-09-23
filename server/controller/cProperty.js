const Property = require("../models/Property.js");

exports.getAllProperties = async (req, res, next) => {
    try {
        const getAll = await Property.find(req.query);
        res.status(200).json(getAll);
    } catch (err) {
        next(err);
    }
}


exports.countByNZ = async (req, res, next) => {
    try {
        const Nth = await Property.countDocuments({ NZ: "Northland" });
        const AKL = await Property.countDocuments({ NZ: "Auckland" });
        const Waikato = await Property.countDocuments({ NZ: "Waikato" });
        const Bay = await Property.countDocuments({ NZ: "Bay of Pleanty" });
        const Gisbone = await Property.countDocuments({ NZ: "Gisbone" });
        const Hawke = await Property.countDocuments({ NZ: "Hawke's Bay" });
        const Taranki = await Property.countDocuments({ NZ: "Taranki" });
        const Whanganui = await Property.countDocuments({ NZ: "Manawatu / Whanganui" });
        const Welly = await Property.countDocuments({ NZ: "Wellington" });
        const Tasman = await Property.countDocuments({ NZ: "Nelson / Tasman" });
        const Marlborough = await Property.countDocuments({ NZ: "Marlborough" });
        const West = await Property.countDocuments({ NZ: "West Coast" });
        const Canterbury = await Property.countDocuments({ NZ: "Canterbury" });
        const Otago = await Property.countDocuments({ NZ: "Otago" });
        const Sth = await Property.countDocuments({ NZ: "Southland" });

        res.status(200).json([
            { NZ: "Northland", count: Nth },
            { NZ: "Auckland", count: AKL },
            { NZ: "Waikato", count: Waikato },
            { NZ: "Bay of Pleanty", count: Bay },
            { NZ: "Gisbone", count: Gisbone },
            { NZ: "Hawke's Bay", count: Hawke },
            { NZ: "Taranki", count: Taranki },
            { NZ: "Manawatu / Whanganui", count: Whanganui },
            { NZ: "Wellington", count: Welly },
            { NZ: "Nelson / Tasman", count: Tasman },
            { NZ: "Marlborough", count: Marlborough },
            { NZ: "West Coast", count: West },
            { NZ: "Canterbury", count: Canterbury },
            { NZ: "Otago", count: Otago },
            { NZ: "Southland", count: Sth },
        ]);
    } catch (err) {
        next(err);
    }
}


exports.countByDistrict = async (req, res, next) => {
    const districts = req.query.districts.split(",")
    try {
        const districList = await Promise.all(districts.map(District => {
            return Property.countDocuments({ District: District })
        }));
        res.status(200).json(districList);
    } catch (err) {
        next(err);
    }
}
// localhost:8080/listing/countByDistrict?districts=Auckland City,Waitakere City


exports.CountBySuburb = async (req, res, next) => {
    try {
        const Centre = await Property.countDocuments({ Suburb: "City Centre" });
        const aCBD = await Property.countDocuments({ Suburb: "Auckland CBD" });
        const Eden = await Property.countDocuments({ Suburb: "Mount Eden" });
        const West = await Property.countDocuments({ Suburb: "West City" });

        res.status(200).json([
            { Suburb: "City Centre", count: Centre },
            { Suburb: "Mount Eden", count: aCBD },
            { Suburb: "Southland", count: Eden },
            { Suburb: "West City", count: West },
        ]);
    } catch (err) {
        next(err);
    }
}
// localhost:8080/listing/countBySuburb


exports.countByBedroom = async (req, res, next) => {
    const bedrooms = req.query.bedroom.split(",")
    try {
        const bedroomList = await Promise.all(bedrooms.map(Bedroom => {
            return Property.countDocuments({ Bedroom: Bedroom })
        }));
        res.status(200).json(bedroomList);
    } catch (err) {
        next(err);
    }
}
// countByBedroom?bedrooms=1,2,3



exports.countByBathroom = async (req, res, next) => {
    const bathrooms = req.query.bathrooms.split(",")
    try {
        const bathroomList = await Promise.all(bathrooms.map(Bathroom => {
            return Property.countDocuments({ Bathroom: Bathroom })
        }));
        res.status(200).json(bathroomList);
    } catch (err) {
        next(err);
    }
}
// countByBathroom?bathrooms=1,2,3


// exports.countByCarpark = async (req, res, next) => {
//     const carparks = req.query.carparks.split(",")
//     try {
//         const carparkList = await Promise.all(carparks.map(Carkpark => {
//             return Property.countDocuments({ Carkpark: Carkpark })
//         }));
//         res.status(200).json(carparkList);
//     } catch (err) {
//         next(err);
//     }
// }
// countByCarpark?carparks=1


exports.getProperty = async (req, res, next) => {
    try {
        const getOne = await Property.findById(
            req.params.id)
        res.status(200).json(getOne);
    } catch (err) {
        next(err);
    }
}


exports.createProperty = async (req, res, next) => {
    // res.send("it SHOUDL WORK!!!!!")
    const newProperty = new Property(req.body)
    try {
        const savedProperty = await newProperty.save()
        res.status(200).json(savedProperty)
    } catch (err) {
        next(err);
    }
}


exports.updateProperty = async (req, res, next) => {
    try {
        const updatesProperty =
            await Property.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            );
        res.status(200).json(updatesProperty);
    } catch (err) {
        next(err);
    }
}


exports.deleteProperty = async (req, res, next) => {
    try {
        await Property.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("Listing has been deleted!");
    } catch (err) {
        next(err);
    }
}



// module.exports = properties = mongoose.model('properties', propertiesSchema);