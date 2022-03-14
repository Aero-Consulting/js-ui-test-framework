const Helper = require('@codeceptjs/helper');
const codeceptjs = require('codeceptjs');

const allurePlugin = codeceptjs.container.plugins('allure');
const idLabel = 'AS_ID';
const ownerLabel = 'owner';
const tagLabel = 'tag';
const epicLabel = 'epic';
const featureLabel = 'feature';
const storyLabel = 'story';
const issueLabel = 'youtrack';

class AllureHelper extends Helper {
  async id(id) {
    allurePlugin.addLabel(idLabel, id);
  }

  async owner(owner) {
    await allurePlugin.addLabel(ownerLabel, owner);
  }

  async epic(epic) {
    await allurePlugin.addLabel(epicLabel, epic);
  }

  async feature(feature) {
    await allurePlugin.addLabel(featureLabel, feature);
  }

  async story(story) {
    await allurePlugin.addLabel(storyLabel, story);
  }

  async issue(issue) {
    await allurePlugin.addLabel(issueLabel, issue);
  }

  async tag(tag) {
    await allurePlugin.addLabel(tagLabel, tag);
  }

  async step(name, stepFunc) {
    await allurePlugin.createStep(name, stepFunc);
  }
}

module.exports = AllureHelper;
module.exports.allure = new AllureHelper();
