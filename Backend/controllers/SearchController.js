
const search = async (req, res) => {
  const { query } = req.body;

  if (!query || query.trim() === "") {
    return res.status(400).json({ message: "Query is required!" });
  }

  try {
    // Example mock data
    const products = [
      { id: 1, name:"Book1" },
      { id: 2, name: "book2" },
    ];
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    res.status(200).json({ results });
  } catch (error) {
    res.status(500).json({ message: "An error occurred!", error: error.message });
  }
};

export default search;
