import User from "../models/userModel.js";

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            //succeded olabilir hata verdi yaazdığımda dikkat et
            success: true,
            user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error,
        });
    }
};



export default { createUser };
