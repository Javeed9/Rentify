const Property = require('../models/propertyModel');

const createProperty = async (req, res) => {
    try {
        const newProperty = new Property(req.body);
        console.log(req.userId);
        newProperty.owner = req.userId;
        await newProperty.save();
        res.status(201).json(newProperty);
    } catch (error) {
        console.error("Error while creating property: ", error);
        res.status(400).json({ message: error.message });
    }
};

const getProperties = async (req, res) => {
    try {
        const filterOptions = {
            city: req.query.city,
            bedrooms: req.query.bedrooms ? Number(req.query.bedrooms) : undefined,
            bathrooms: req.query.bathrooms ? Number(req.query.bathrooms) : undefined,
            area: req.query.area ? Number(req.query.area) : undefined,
            'owner': req.query.userId ? Number(req.query.userId) : undefined
        };

        // Remove undefined values from filterOptions
        Object.keys(filterOptions).forEach(key => filterOptions[key] === undefined && delete filterOptions[key]);

        const properties = await Property.find(filterOptions)
            .populate('owner', '-password')
            .populate('interestedUsers', '-password');

        res.status(200).json(properties);
    } catch (error) {
        console.error("Error while getting all properties: ", error);
        res.status(500).json({ message: error.message });
    }
};

const getPropertyById = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id).populate('owner', '-password').populate('interestedUsers', '-password');
        if (!property) {
            return res.status(404).json({ message: "Property not found" });
        }
        res.status(200).json(property);
    } catch (error) {
        console.error("Error while getting property by ID: ", error);
        res.status(500).json({ message: error.message });
    }
};

const updateProperty = async (req, res) => {
    try {
        const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!property) {
            return res.status(404).json({ message: "Property not found" });
        }
        res.status(200).json(property);
    } catch (error) {
        console.error("Error while updating property: ", error);
        res.status(400).json({ message: error.message });
    }
};

const deleteProperty = async (req, res) => {
    try {
        const property = await Property.findByIdAndDelete(req.params.id);
        if (!property) {
            return res.status(404).json({ message: "Property not found" });
        }
        res.status(200).json({ message: "Property successfully deleted" });
    } catch (error) {
        console.error("Error while deleting property: ", error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createProperty, getProperties, getPropertyById, updateProperty, deleteProperty };
