module.exports = {
  branchPrefix: 'test-renovate/',
  username: 'renovate-release',
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  onboarding: true,
  platform: 'github',
  includeForks: true,
  dryRun: 'full',
  repositories: [
    'marttio97/pizzaStore',
  ],
  onboardingCommitMessage: "onboarding config",
  onboardingPrTitle: "ONBOARDING",
  onboardingConfig: {
    "$schema": "https://docs.renovatebot.com/renovate-shcema.json",
    "extends" : [
      "config:base"
      ]
  },
  packageRules: [
    {
      description: 'lockFileMaintenance',
      matchUpdateTypes: [
        'pin',
        'digest',
        'patch',
        'minor',
        'major',
        'lockFileMaintenance',
      ],
      dependencyDashboardApproval: false,
      stabilityDays: 0,
    },
  ],
};
