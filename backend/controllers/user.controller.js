        // name: "",
        // pincode: "",
        // city: "",
        // address: "",
        // landmark: "",
        // phone: "",
        // altPhone: "",
        // email: ""
const UserAddress = require("../models/userAddress");
const getUserAddress = async (req, res) => {
  try {
    // Implementation for handling user address
    const userId = req.user.id;
    const userAddress = await UserAddress.findOne({ user: userId });

    if (!userAddress) {
      return res.status(404).json({ message: "User address not found" });
    }

    res.status(200).json(userAddress);
  } catch (error) {
    console.error("Error handling user address:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const SaveUserAddress = async (req, res) => {
  try {
    // Implementation for handling user address
    const userId = req.user.id;
    const { name, pincode, city, address, landmark, phone, altPhone, email } = req.body;

    // Validate address input
    if (!address || typeof address !== "string") {
      return res.status(400).json({ message: "Invalid address" });
    }
    // Check if user already has an address
    let userAddress = await UserAddress.findOne({ user: userId });

    if (userAddress) {
      // Update existing address
      userAddress.name = name;
      userAddress.pincode = pincode;
      userAddress.city = city;
      userAddress.address = address;
      userAddress.landmark = landmark;
      userAddress.phone = phone;
      userAddress.altPhone = altPhone;
      userAddress.email = email;

      await userAddress.save();
    } else {
      // Create new address
      userAddress = new UserAddress({
        user: userId,
        name,
        pincode,
        city,
        address,
        landmark,
        phone,
        altPhone,
        email
      });

      await userAddress.save();
    }

    res.status(200).json(userAddress);
  } catch (error) {
    console.error("Error handling user address:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteUserAddress = async (req, res) => {
  try {
    // Implementation for handling user address deletion
    const userId = req.user.id;
    const userAddress = await UserAddress.findOneAndDelete({ user: userId });

    if (!userAddress) {
      return res.status(404).json({ message: "User address not found" });
    }
    res.status(200).json({ message: "User address deleted successfully" });
  } catch (error) {
    console.error("Error handling user address deletion:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getUserAddress, SaveUserAddress, deleteUserAddress };