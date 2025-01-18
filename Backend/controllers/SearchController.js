import Product from '../models/Product.js';

export const searchProducts = async (req, res) => {
    try {
        const { query } = req.query; 
        if (!query) {
            return res.status(400).json({ message: 'Query parameter is required.' });
        }

        const results = await Product.find({
            $or: [
                { name: { $regex: query, $options: 'i' } }, 
                { category: { $regex: query, $options: 'i' } }, 
            ],
        });

        res.json(results);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching search results', error });
    }
};
