// const { generateCollection } = require("./generateCollection.controller");

// const getCollectionData = async (req, res) => {
//     try {
//         const userId = req.user._id;

//         const data = await generateCollection(userId);

//         return res.status(200).json({
//             success: true,
//             ...data,
//         });

//     } catch (error) {
//         console.error("Collection Error:", error);

//         return res.status(500).json({
//             success: false,
//             message: "Failed to load collection data.",
//         });
//     }
// };

// module.exports = {
//     getCollectionData,
// };