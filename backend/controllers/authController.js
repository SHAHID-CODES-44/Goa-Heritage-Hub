import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';

// Register (Sign Up)
export const registerUser = async (req, res) => {
    const { email, password, phone } = req.body;

    // 1. Check if required fields are present
    if (!email || !password || !phone) {
        return res.status(400).json({ message: "Please provide email, password, and phone number" });
    }

    try {
        // 2. Check if user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" }); // 409 = Conflict
        }

        // 3. Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 4. Create the user
        const user = await User.create({
            email,
            password: hashedPassword,
            phoneNo: phone  // Ensure this matches your model field name!
        });

        // 5. Remove password before sending response
        const { password: _, ...userData } = user.toJSON();

        res.status(201).json({
            message: "User registered successfully",
            user: userData
        });
    } catch (err) {
        console.error("Signup Error:", err);  // Helpful during development
        res.status(500).json({ message: "Error registering user", error: err.message });
    }
};

// Login (Sign In)
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // 1. Check if both fields are provided
    if (!email || !password) {
        return res.status(400).json({ message: "Please provide both email and password" });
    }

    try {
        // 2. Find user by email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // 3. Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // 4. Remove password before sending response
        const { password: _, ...userData } = user.toJSON();

        res.status(200).json({
            message: "Login successful",
            user: userData
        });
    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json({ message: "Error logging in", error: err.message });
    }
};
