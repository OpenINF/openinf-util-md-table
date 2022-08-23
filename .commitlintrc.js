'use strict';

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'deps',
        'doc',
        'feat',
        'fix',
        'meta',
        'new',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'typings',
      ],
    ],
    'header-max-length': [2, 'always', 50],
    'subject-case': [
      0,
      'always',
      ['lower-case', 'sentence-case', 'start-case'],
    ],
  },
};
