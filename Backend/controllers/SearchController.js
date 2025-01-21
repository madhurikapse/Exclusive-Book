import Product from "../models/Product";

export const search = async (req, res) => {
    try {
        
        const { searchedWord } = req.body;
        if (!searchedWord || typeof searchedWord !== 'string') {
            return res.status(400).json({ success: false, message: 'Invalid search term.' });
        }
        
        console.log('Searched Word:', searchedWord);

        const products = await Product.find({
            $or: [
                { name: { $regex: searchedWord, $options: 'i' } },
                { category: { $regex: searchedWord, $options: 'i' } },
                { tags: { $regex: searchedWord, $options: 'i' } },
            ],
        });

        console.log('Products Found:', products);
        return res.status(200).json({ success: true, products });
    } catch (error) {
        console.error('Error in search:', error);
        return res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};
