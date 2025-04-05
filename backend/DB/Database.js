import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    const db = process.env.MONGO_URL;

    try {
        const { connection } = await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,  // Recommended to ensure the latest connection management
            ssl: true,                 // Ensure SSL is used
            sslValidate: true,         // Optional: Enforce certificate validation
            tls: true,                 // Explicitly enable TLS
            tlsAllowInvalidCertificates: false, // Optional: Don't allow invalid certificates (for production)
        });

        console.log(`MongoDB Connected to ${connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error:", error);
        res.status(500).json({ message: "Error connecting to MongoDB", error });
    }
};
