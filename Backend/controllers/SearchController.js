const search = async (req, res) => {
  const { query } = req.body;

  if (!query || query.trim() === "") {
    return res.status(400).json({ message: "Query is required!" });
  }

  try {
    // Example mock data with proper image paths
    const products = [
      { id: 1, title: 'My Soul', author: 'Author 1', rating: 4, price: 350, description: 'This is Book 1', image: '/assets/img/book1.jpg' },
      { id: 2, title: 'My World in Me', author: 'Author 2', rating: 5, price: 499, description: 'This is Book 2', image: '/assets/img/book2.jpg' },
      { id: 3, title: 'MAGA', author: 'Author 3', rating: 4.5, price: 299, description: 'This is Book 3', image: '/assets/img/book3.jpg' },
      { id: 4, title: 'Herbal GPS in the Kitchen', author: 'Author 4', rating: 3.5, price: 250, description: 'This is Book 4', image: '/assets/img/book4.jpg' },
      { id: 5, title: 'My Electric Magnetic Friend', author: 'Author 5', rating: 5, price: 450, description: 'This is Book 5', image: '/assets/img/book5.jpg' },
      { id: 6, title: 'MASHIN ME', author: 'Author 6', rating: 4, price: 350, description: 'This is Book 6', image: '/assets/img/book6.jpg' },
      { id: 7, title: 'ANTONITY MY LIFE', author: 'Author 7', rating: 5, price: 499, description: 'This is Book 7', image: '/assets/img/book7.jpg' },
      { id: 8, title: 'MY MIND', author: 'Author 8', rating: 4.5, price: 299, description: 'This is Book 8', image: '/assets/img/book8.jpg' },
      { id: 9, title: 'MY BODY', author: 'Author 9', rating: 3.5, price: 250, description: 'This is Book 9', image: '/assets/img/book9.jpg' },
      { id: 10, title: 'APECTRUMB', author: 'Author 10', rating: 5, price: 450, description: 'This is Book 10', image: '/assets/img/book10.jpg' },
    ];

    // Convert query to lowercase for case-insensitive search
    const searchQuery = query.toLowerCase();

    // Filter logic: Match title, description, ID, or price
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery) ||
      product.id.toString().includes(searchQuery) ||
      product.price.toString().includes(searchQuery)||
      product.image.toLowerCase().includes(searchQuery)
    );

    res.status(200).json({ results });
  } catch (error) {
    res.status(500).json({ message: "An error occurred!", error: error.message });
  }
};

export default search;
