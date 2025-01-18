import Product from "../models/Product.js";


export const search = async (req, res) => {
    try {
        const { searchedWord } = req.body;

        if (!searchedWord) {
            return res.status(400).json({ success: false, message: 'Search term is required.' });
        }

        // Search products by name, category, or tags
        const products = await Product.find({
            $or: [
                { name: { $regex: searchedWord, $options: 'i' } },
                { category: { $regex: searchedWord, $options: 'i' } },
                { tags: { $regex: searchedWord, $options: 'i' } },
            ],
        });

        return res.status(200).json({ success: true, products });
    } catch (error) {
        console.error('Error in search:', error);
        return res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};
