import Photo from "../models/photoModel.js";

const createPhoto = async (req, res) => {
  try {
    const photo = await Photo.create(req.body);
    res.status(201).json({
      //succeded olabilir hata verdi yaazdığımda dikkat et
      success: true,
      photo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const getAllPhotos = async (req, res) => {
  try {
    const photos = await Photo.find({});
    res.status(200).render("photos", {
      photos,
      link: "photos",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const getAPhoto = async (req, res) => {
  try {
    const photo = await Photo.findById({ _id: req.params.id });
    res.status(200).render("photo", {
      photo,
      link: "photos",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export default { createPhoto, getAllPhotos, getAPhoto };
