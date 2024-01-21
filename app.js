const { Octokit } = require('@octokit/rest');

const  axios =  require("axios")
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = 8000;

const octokit = new Octokit({
  auth: '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',
});
const corsOpts = {
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'HEAD', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  exposedHeaders: ['Content-Type'],
};
app.use(cors(corsOpts));


async function fetchAllRepositories(username, limit ,page) {
  const data = {
    repositories: [],
  };

  try {
    const { data: repositories } = await octokit.repos.listForUser({
      username,
      per_page:limit,
      page:page ,
    });

    // const { data: repositories } = await axios.get(
    //   `https://api.github.com/users/freeCodeCamp/repos?per_page=${limit}&page=${page}`
    // );

    data.repositories = repositories.map((repo,id) => ({
      name: repo.name || '',
      description: repo.description || '',
      topics: repo.topics || [],
      seq:id
    })); 

    return data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
}


app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
});

 app.get('/data', async (req, res) => {
  let page = req.query.page;
  let limit = req.query.limit;
  console.log(page,limit)
  try {
    const username = "freeCodeCamp";
    const repoNames = await fetchAllRepositories(username, limit, page);
    const data = repoNames;
    console.log(200);
    res.json(data);
  } catch (error) {
    console.error('Failed to fetch repositories:', error);
    res
      .status(500)
      .json({ success: false, error: 'Failed to fetch repositories' });
  }
});



