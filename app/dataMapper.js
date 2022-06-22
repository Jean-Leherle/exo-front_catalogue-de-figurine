const client = require('./client');

const dataMapper = {
  async getAllFigurines() {
    const query = "SELECT * FROM figurine;";
    const result = await client.query(query);
    const figurines = result.rows;
    return figurines;
  },

  async getOneFigurine(id) {
    const query = "SELECT * FROM figurine WHERE id = $1;";
    const result = await client.query(query, [id]);
    const figurine = result.rows[0];
    return figurine;
  }
};

module.exports = dataMapper;