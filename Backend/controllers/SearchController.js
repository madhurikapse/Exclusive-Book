const search = async (req, res) => {
  const { query } = req.body;

  if (!query || query.trim() === "") {
    return res.status(400).json({ message: "Query is required!" });
  }

  try {
    // Example mock data
    const products = [
      { id: 1, title: 'My Soul', author: 'Author 1', rating: 4, price: 350, description: 'This is Book 1' },
      { id: 2, title: 'My World in Me', author: 'Author 2', rating: 5, price: 499, description: 'This is Book 2' },
      { id: 3, title: 'MAGA', author: 'Author 3', rating: 4.5, price: 299, description: 'This is Book 3' },
      { id: 4, title: 'Herbal GPS in the Kitchen', author: 'Author 4', rating: 3.5, price: 250, description: 'This is Book 4' },
      { id: 5, title: 'My Electric Magnetic Friend', author: 'Author 5', rating: 5, price: 450, description: 'This is Book 5' },
      { id: 6, title: 'MASHIN ME', author: 'Author 6', rating: 4, price: '₹350', description: 'This is Book 6' },
      { id: 7,  title: 'ANTONITY MY LIFE', author: 'Author 7', rating: 5, price: '₹499', description: 'This is Book 7' },
      { id: 8,  title: 'MY MIND', author: 'Author 8', rating: 4.5, price: '₹299', description: 'This is Book 8' },
      { id: 9,  title: 'MY BODY', author: 'Author 9', rating: 3.5, price: '₹250', description: 'This is Book 9' },
      { id: 10, title: 'APECTRUMB', author: 'Author 10', rating: 5, price: '₹450', description: 'This is Book 10' },
     
    ];

    // Filter logic: Case-insensitive match for titles starting with the query
    const results = products.filter((product) =>
      product.title.toLowerCase().startsWith(query.toLowerCase())
    );

    res.status(200).json({ results });
  } catch (error) {
    res.status(500).json({ message: "An error occurred!", error: error.message });
  }
};

export default search;
