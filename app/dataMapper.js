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
  },
  async getNoteReviews() {
    const query = "SELECT note, figurine_id FROM review;";
    const result = await client.query(query);
    const reviews = result.rows;
    return reviews;
  },
  
  async getReviewsbyId(figurine_id) {
    const query = "SELECT * FROM review WHERE figurine_id = $1;";
    const result = await client.query(query, [figurine_id]);
    const reviews = result.rows;
    return reviews;
  }
};

module.exports = dataMapper;