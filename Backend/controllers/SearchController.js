import Product from "../models/Product.js";

export const search = async (req, res) => {
  try {
    const { searchedWord } = req.body;
    const { page = 1, limit = 10 } = req.query;

    // Validate input
    if (!searchedWord || searchedWord.trim() === "") {
      return res.status(400).json({ success: false, message: "Search term is required." });
    }

    // Search query across name, category, and tags
    const query = {
      $or: [
        { name: { $regex: searchedWord, $options: "i" } },
        { category: { $regex: searchedWord, $options: "i" } },
        { tags: { $regex: searchedWord, $options: "i" } },
      ],
    };

    // Fetch results with pagination
    const products = await Product.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    // Return results with pagination info
    return res.status(200).json({
      success: true,
      products,
      totalResults: await Product.countDocuments(query),
      currentPage: page,
      totalPages: Math.ceil(await Product.countDocuments(query) / limit),
    });
  } catch (error) {
    console.error("Search Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "An error occurred while searching for products. Please try again later.",
    });
  }
};
