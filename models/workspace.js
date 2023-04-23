const mongoose = require('mongoose');

const { Schema } = mongoose;

const workSpaceSchema = new Schema(
  {
    workspace_name: {
      type: String,
    },
    workspace_category: {
      type: String,
    },
    workspace_type: {
      type: String,
    },
    workspace_startDate: {
      type: String,
    },
    workspace_endDate: {
      type: String,
    },
    githubRepository: {
      type: String,
    },
    member: {
      type: Object,
    },
    workflow: {
      type: Object,
    },
  },
  {
    collection: 'workspace',
    versionKey: false,
  },
);

module.exports = mongoose.model('WorkSpace', workSpaceSchema);
