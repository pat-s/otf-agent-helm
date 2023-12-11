export default {
  commentOnReleasedPullRequests: false,
  useVersionPrefixV: false,
  includeContributors: false,
  beforePrepare: async ({ exec, nextVersion }) => {
    await exec(`apk add --no-cache helm curl`);
    await exec(
      `sed -i "s/^version:.*$/version: ${nextVersion}/g" charts/otf-agent/Chart.yaml`
    );
    await exec(
      `export UPSTREAM_VERSION=$(curl -s https://api.github.com/repos/leg100/otf/releases/latest | grep tag_name | grep -Eo "([0-9]+(\.[0-9]+)+)") && sed -i "s/^appVersion:.*$/appVersion: $UPSTREAM_VERSION/g" charts/otf-agent/Chart.yaml`
    );
    await exec("helm dependency update charts/otf-agent");
    await exec("curl -L -O https://github.com/norwoodj/helm-docs/releases/download/v1.11.3/helm-docs_1.11.3_Linux_x86_64.tar.gz && tar -xzf helm-docs_1.11.3_Linux_x86_64.tar.gz && chmod +x helm-docs && ./helm-docs");
    await exec("git add charts/otf-agent/Chart.yaml && git add charts/otf-agent/README.md");
  },
};
