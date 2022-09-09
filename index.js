const github = require('@actions/github');
const core = require('@actions/core');

async function run() {
    // This should be a token with access to your repository scoped in as a secret.
    // The YML workflow will need to set myToken with the GitHub Secret Token
    // myToken: ${{ secrets.GITHUB_TOKEN }}
    // https://help.github.com/en/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token#about-the-github_token-secret
    const githubToken = core.getInput('github_token');

    const octokit = github.getOctokit(githubToken)
    const context = github.context;
    const {data: tags} = await octokit.rest.repos.listTags({...context.repo})

    console.log(tags);
    console.log(JSON.stringify(context));
}

run();
