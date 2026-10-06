module.exports = {
  DefaultArtifactClient: class {
    uploadArtifact() {
      return Promise.resolve({ id: 0 });
    }
  },
};
