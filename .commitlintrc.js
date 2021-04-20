// 用于规范 commit message 的规范，防止全是 fix 这种无意义的 commit message 导致历史记录追溯比较麻烦
const { getCommitlintConfig } = require('@iceworks/spec');

module.exports = getCommitlintConfig('react');
