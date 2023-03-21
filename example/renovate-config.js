module.exports = {
  branchPrefix: 'test-renovate/',
  username: 'marttio97',
  gitAuthor: 'Martin <martioto@gmail.com>',
  onboarding: true,
  platform: 'github',
  includeForks: true,
  dryRun: null,
  repositories: [
    'marttio97/pizzaStore',
  ],
  onboardingCommitMessage: "onboarding config",
  onboardingPrTitle: "ONBOARDING",
  onboardingConfig: {
    "$schema": "https://docs.renovatebot.com/renovate-schema.json",
    "extends" : [
      "config:base",
      "helpers:pinGitHubActionDigests"
      ]
  },
};
