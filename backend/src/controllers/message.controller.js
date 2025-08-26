import User from "../models/user.model.js"
import Message from "../models/message.model.js"

export const getUserForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password")

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.error("Error in getUsersForSidebar: ", error.message);
        res.status(500).json({ error: "Internal server error" })
    }
}

export const getMessages = async (req, res) => {
    try {
        
        const { id: userToChatId } = req.params;
        const userId = req.user._id;

        const messages = await Message.find({
            $or: [
                {senderId : userId, receiverId: userToChatId},
                {senderId : userToChatId, receiverId: userId}
            ]
        })

        res.status(200).json(messages)

    } catch (error) {
        console.error("Error in getMessages Controller: ", error.message);
        res.status(500).json({ error: "Internal server error" })
    }
}

export const sendMessage = async(req, res ) => {

    try{

        const { text, image } = req.body;
        const { id: receiverId } = req.params;
    }
    catch (error) { 
        
    }

}