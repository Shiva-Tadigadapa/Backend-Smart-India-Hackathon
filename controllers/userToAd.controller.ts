import Upload from "../models/upload" 
 // Import your Mongoose model

export const authToAdController = async (req, res, next) => {
  try {
    const mainData = req.body;
    const { fullName,email ,type,CertifyUNID, Gender,DOB, PhNo  , Caption } = mainData;

    // Create a new instance of your Mongoose model with the data
    const newUpload = new Upload({
      fullName,
      email,
      type,
      CertifyUNID,
      Gender,
      DOB,
      PhNo,
      Caption,
    });

    // Save the data to the database
    await newUpload.save();

    res.status(200).json({ message: "New user has been created" });
  } catch (err) {
    // Handle errors appropriately
    console.error(err);
    res.status(500).json({ message: "An error occurred while saving the data" });
  }
};


export const getUploads = async (req, res, next) => {
  try {
    // Fetch all the data in your database
    const uploads = await Upload.find();

    // Send the fetched data
    res.status(200).json(uploads);
  } catch (err) {
    // Handle errors appropriately
    console.error(err);
    res.status(500).json({ message: "An error occurred while fetching the data" });
  }
}


export default {
  authToAdController,
  getUploads,
};
