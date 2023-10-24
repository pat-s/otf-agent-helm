export default {
  commentOnReleasedPullRequests: false,
  useVersionPrefixV: false,
  includeContributors: false,
  beforePrepare: async ({ exec, nextVersion }) => {
    await exec(`apk add --no-cache helm curl`);
    await exec(
      `sed -i "s/^version:.*$/version: ${nextVersion}/g" otf-agent/Chart.yaml`
    );
    await exec(
      `export UPSTREAM_VERSION=$(curl -s https://api.github.com/repos/leg100/otf/releases/latest | grep tag_name | grep -Eo "([0-9]+(\.[0-9]+)+)") && sed -i "s/^appVersion:.*$/appVersion: $UPSTREAM_VERSION/g" otf-agent/Chart.yaml`
    );
    await exec("helm dependency update");
    await exec("git add otf-agent/Chart.yaml");
  },
};
